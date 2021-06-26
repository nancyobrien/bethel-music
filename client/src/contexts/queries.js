import { gql } from "@apollo/client";

const DOCUMENT_LIST_SCHEMA = ` 
  id
  title
  author
  publishedTime
  text
 `;

export const DOCUMENTS_QUERY = gql`
  query GetDocuments {
    documents {
      ${DOCUMENT_LIST_SCHEMA}
    }
  }
`;

export const DOCUMENTS_SEARCH_TOTAL_COUNT_QUERY = gql`
  query SearchTotalDocuments($query: JSON!) {
    pandion_search(query_body: $query) {
      hits
      aggregations
    }
  }
`;

export const DOCUMENTS_SEARCH_QUERY = gql`
  query SearchDocuments($query: JSON!)  {
    pandion_search(query_body: $query) {
      hits
      document_results {
        score
        highlights {
          field
          highlights
        }
        doc_type
        doc {
          ... on Document {
            ${DOCUMENT_LIST_SCHEMA}
          }
        }
      }
    aggregations
    }
  }
`;

export const DOCUMENT_QUERY = gql`
  query GetDocument($id: ID) {
    document(id: $id) {
      id
      title
      author
      url
      text
      contentLink
      publishedTime
      updatedTime
      ingestDatetime
      sentimentScore
      entities {
        id
        entity
        group
      }
    }
  }
`;

//TODO: switch to favorite query once it is available
export const FAVORITES_QUERY = gql`
  query GetFavorites {
    documents {
      id
      title
    }
  }
`;
