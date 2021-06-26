import React from "react";
import { useQuery } from "@apollo/client";

import {
  DOCUMENTS_SEARCH_QUERY,
  DOCUMENTS_SEARCH_TOTAL_COUNT_QUERY,
} from "./queries";

export const DocumentSearchContext = React.createContext();

const documentSortOptions = [
  { label: "Title", field: "title", defaultDirection: "ASC" },
  { label: "Published Date", field: "published", defaultDirection: "DESC" },
];

const aggregationFields = [{ esField: "author.keyword", label: "Author" }];

export default function DocumentSearchProvider(props) {
  const [documentSearchList, setDocumentSearchList] = React.useState([]);
  const [activeFilters, setActiveFilters] = React.useState([]);
  const [articleFilterText, setArticleFilterText] = React.useState("");
  const [documentListSortField, setDocumentListSortField] = React.useState(
    documentSortOptions[0].field
  );
  const [documentListSortDirection, setDocumentListSortDirection] =
    React.useState(documentSortOptions[0].defaultDirection);
  const [documentListFilterOptions, setDocumentListFilterOptions] =
    React.useState([]);
  const [docSearchParams, setDocSearchParams] = React.useState();
  const [docSearchBatchSize, setDocSearchBatchSize] = React.useState(50);
  const [docSearchStartIndex, setDocSearchStartIndex] = React.useState(0);
  const [docSearchSortField, setDocSearchSortField] = React.useState();
  const [docSearchSortDirection, setDocSearchSortDirection] =
    React.useState("asc");

  const documentSearchListRef = React.useRef(documentSearchList);
  documentSearchListRef.current = documentSearchList;

  const esBaseQuery = React.useMemo(
    () => ({
      size: 0,
      from: 0,
      aggs: aggregationFields.reduce((aggs, f) => {
        aggs[f.label] = { terms: { field: f.esField } };
        return aggs;
      }, {}),
    }),
    []
  );

  const esSearchQuery = React.useMemo(() => {
    console.log(activeFilters, aggregationFields);
    const queryString = docSearchParams
      ? docSearchParams.split(" ").join("* ") + "*"
      : "*";

    const filters = activeFilters.length
      ? {
          filter: aggregationFields
            .filter((a) => activeFilters.some((f) => f.type === a.label))
            .map((a) => ({
              terms: {
                [a.esField]: activeFilters
                  .filter((f) => f.type === a.label)
                  .map((f) => f.value),
              },
            })),
        }
      : null;

    let esQuery = {
      ...esBaseQuery,
      size: docSearchBatchSize,
      from: docSearchStartIndex,
      query: {
        simple_query_string: {
          query: queryString,
          default_operator: "and",
        },
      },
      highlight: {
        pre_tags: ["<span class='eshighlight'>"],
        post_tags: ["</span>"],
        fields: {
          title: { number_of_fragments: 0 },
          text: { number_of_fragments: 0 },
        },
      },
    };

    if (filters) {
      esQuery.query = {
        bool: { must: { ...esQuery.query }, ...filters },
      };
    }

    if (docSearchSortField) {
      esQuery.sort = {
        [docSearchSortField]: { order: docSearchSortDirection },
      };
    }

    return esQuery;
  }, [
    activeFilters,
    docSearchBatchSize,
    docSearchParams,
    docSearchSortDirection,
    docSearchSortField,
    docSearchStartIndex,
    esBaseQuery,
  ]);

  const { loading: searchLoading, data: docSearchList } = useQuery(
    DOCUMENTS_SEARCH_QUERY,
    {
      skip: !esSearchQuery,
      variables: { query: esSearchQuery },
    }
  );

  const { data: docTotalCount } = useQuery(DOCUMENTS_SEARCH_TOTAL_COUNT_QUERY, {
    variables: { query: esBaseQuery },
  });

  function getHighlightedText(field, data) {
    //combine adjacent highlight tags
    return (
      data.highlights
        ?.find((h) => h.field === field)
        ?.highlights[0].replace(/<\/span> <span class='eshighlight'>/gm, " ")
        .replace(/<\/span><span class='eshighlight'>/gm, "") ||
      data.doc[field] ||
      ""
    );
  }

  React.useEffect(() => {
    setDocumentSearchList(
      docSearchList?.pandion_search?.document_results.map((d) => ({
        id: d.doc.id,
        title: getHighlightedText("title", d),
        text: getHighlightedText("text", d),
        rawTitle: d.doc.title,
        rawText: d.doc.text,
        score: d.score,
      })) || []
    );
  }, [docSearchList?.pandion_search]);

  const searchDocuments = React.useCallback((searchParams) => {
    setDocSearchParams(searchParams);
    setDocSearchStartIndex(0);
  }, []);

  const clearSearch = () => {
    setDocumentSearchList([]);
  };

  const addFilter = ({ type, value }) => {
    setActiveFilters((prevValues) => {
      if (prevValues.some((f) => f.type === type && f.value === value)) {
        return prevValues;
      } else {
        return prevValues.concat({ type, value });
      }
    });
  };

  const removeFilter = ({ type, value }) => {
    setActiveFilters((prevValues) => {
      if (prevValues.some((f) => f.type === type && f.value === value)) {
        return prevValues.filter(
          (f) => f.value !== value || (f.value === value && f.type !== type)
        );
      } else {
        return prevValues;
      }
    });
  };

  const removeAllFilters = () => {
    setActiveFilters([]);
  };

  const toggleFilter = ({ type, value }) => {
    setActiveFilters((prevValues) => {
      if (prevValues.some((f) => f.type === type && f.value === value)) {
        return prevValues.filter(
          (f) => f.value !== value || (f.value === value && f.type !== type)
        );
      } else {
        return prevValues.concat({ type, value });
      }
    });
  };

  const totalFilters = React.useMemo(() => {
    const aggs = docTotalCount?.pandion_search?.aggregations;
    let filters = [];
    if (aggs) {
      filters = Object.keys(aggs).map((a) => ({
        type: a,
        options: aggs[a].buckets.map((b) => ({
          value: b.key,
          count: b.doc_count,
        })),
        count: aggs[a].buckets.reduce((a, b) => a + b.doc_count, 0),
      }));
    }
    return filters;
  }, [docTotalCount?.pandion_search?.aggregations]);

  const searchFilters = React.useMemo(() => {
    const aggs = docSearchList?.pandion_search?.aggregations;
    let filters = [];
    if (aggs) {
      filters = Object.keys(aggs).map((a) => ({
        type: a,
        options: aggs[a].buckets.map((b) => ({
          value: b.key,
          count: b.doc_count,
        })),
        count: aggs[a].buckets.reduce((a, b) => a + b.doc_count, 0),
      }));
    }
    return filters;
  }, [docSearchList?.pandion_search?.aggregations]);

  const values = React.useMemo(
    () => ({
      loading: searchLoading,
      totalResultsCount: docTotalCount?.pandion_search?.hits || 0,
      resultsCount: docSearchList?.pandion_search?.hits || 0,
      totalFilters,
      searchFilters,
      searchActive: !!docSearchParams,
      searchDocuments,
      docSearchParams,
      articleFilterText,
      setArticleFilterText,
      clearSearch,
      documentSearchList,
      filteredDocs: documentSearchList,
      activeFilters,
      addFilter,
      removeFilter,
      toggleFilter,
      removeAllFilters,
      documentListSortDirection,
      setDocumentListSortDirection,
      documentListFilterOptions,
      setDocumentListFilterOptions,
      documentListSortField,
      setDocumentListSortField,
      documentSortOptions,
      setDocSearchBatchSize,
      setDocSearchSortField,
      setDocSearchSortDirection,
    }),
    [
      searchLoading,
      docTotalCount?.pandion_search?.hits,
      docSearchList?.pandion_search?.hits,
      totalFilters,
      searchFilters,
      searchDocuments,
      docSearchParams,
      articleFilterText,
      documentSearchList,
      activeFilters,
      documentListSortDirection,
      documentListFilterOptions,
      documentListSortField,
    ]
  );

  return <DocumentSearchContext.Provider {...props} value={values} />;
}

export function useDocumentSearch() {
  return React.useContext(DocumentSearchContext);
}

export function useSearchFilter(fType) {
  const [filterType, setFilterType] = React.useState(fType);
  const {
    totalFilters,
    searchFilters,
    activeFilters,
    addFilter,
    removeFilter,
    toggleFilter,
    searchActive,
  } = React.useContext(DocumentSearchContext);

  React.useEffect(() => {
    setFilterType(fType);
  }, [fType]);

  const filters = React.useMemo(
    () => totalFilters.find((f) => f.type === filterType)?.options,
    [filterType, totalFilters]
  );

  const currentFilters = React.useMemo(
    () => searchFilters.find((f) => f.type === filterType)?.options,
    [filterType, searchFilters]
  );

  const activeForType = React.useMemo(
    () => activeFilters.filter((f) => f.type === filterType),
    [activeFilters, filterType]
  );

  const addForType = React.useCallback(
    (value) => {
      addFilter({ type: fType, value });
    },
    [addFilter, fType]
  );

  const removeForType = React.useCallback(
    (value) => {
      removeFilter({ type: fType, value });
    },
    [removeFilter, fType]
  );

  const toggleForType = React.useCallback(
    (value) => {
      toggleFilter({ type: fType, value });
    },
    [toggleFilter, fType]
  );

  return {
    searchActive,
    filters,
    currentFilters,
    activeFilters: activeForType,
    addFilter: addForType,
    removeFilter: removeForType,
    toggleFilter: toggleForType,
  };
}
