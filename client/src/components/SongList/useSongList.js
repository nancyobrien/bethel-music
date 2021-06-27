import React from "react";
import { SongTableContext } from "components/SongUsage";
import data from "./tempData.json";

export const SortFields = {
  TITLE: "title",
  ARTIST: "artist",
  LAST_USED: "lastUsed",
  PREFERRED_SLOT: "preferredSlot",
  USE_COUNT: "useCount",
};

export function useSongList() {
  const {
    sortField,
    sortDirection,
    setSortField,
    setSortDirection,
    slotFilter,
    setSlotFilter,
    searchFilter,
    setSearchFilter,
    queryStartDate,
    setQueryStartDate,
  } = React.useContext(SongTableContext);

  const updateSort = React.useCallback(
    (fieldName) => {
      if (fieldName === sortField) {
        setSortDirection((prevValue) => {
          return prevValue * -1;
        });
      } else {
        setSortField(fieldName);
        setSortDirection(1);
      }
    },
    [setSortDirection, setSortField, sortField]
  );

  const sortedData = React.useMemo(() => {
    //Always sort by title first, so that fields with same value are in title order
    let titleSorted = data.sort((a, b) =>
      a[SortFields.TITLE] < b[SortFields.TITLE]
        ? -1
        : a[SortFields.TITLE] > b[SortFields.TITLE]
        ? 1
        : 0
    );
    if (!!slotFilter) {
      titleSorted = titleSorted.filter(
        (s) => s[SortFields.PREFERRED_SLOT] === slotFilter
      );
    }

    if (!!searchFilter) {
      titleSorted = titleSorted.filter(
        (s) =>
          s[SortFields.TITLE].toLowerCase().includes(searchFilter.toLowerCase()) ||
          s[SortFields.ARTIST].toLowerCase().includes(searchFilter.toLowerCase())
      );
    }

    switch (sortField) {
      case SortFields.TITLE:
      case SortFields.ARTIST:
      case SortFields.PREFERRED_SLOT:
      case SortFields.USE_COUNT:
        return titleSorted.sort((a, b) =>
          a[sortField] < b[sortField]
            ? -1 * sortDirection
            : a[sortField] > b[sortField]
            ? 1 * sortDirection
            : 0
        );
      case SortFields.LAST_USED:
        return titleSorted.sort((a, b) => {
          const dateA = new Date(a[SortFields.LAST_USED]);
          const dateB = new Date(b[SortFields.LAST_USED]);
          return dateA < dateB
            ? -1 * sortDirection
            : dateA > dateB
            ? 1 * sortDirection
            : 0;
        });
      default:
        return data;
    }
  }, [searchFilter, slotFilter, sortDirection, sortField]);

  return {
    sortField,
    sortDirection,
    updateSort,
    sortedData,
    slotFilter,
    setSlotFilter,
    searchFilter,
    setSearchFilter,
  };
}
