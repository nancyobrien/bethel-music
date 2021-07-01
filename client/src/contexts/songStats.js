import React, { useState } from "react";

import { useSongData } from "./songs";

export const SongSearchContext = React.createContext();

export const SortFields = {
  TITLE: "title",
  ARTIST: "author",
  LAST_USED: "lastUsedSort",
  PREFERRED_SLOT: "preferredSlot",
  USE_COUNT: "useCount",
};

export default function SongProvider(props) {
  const { plans, plansLoading } = useSongData();
  let sDate = new Date();
  sDate.setDate(sDate.getDate() - 26 * 7);

  const [sortField, setSortField] = useState(SortFields.LAST_USED);
  const [sortDirection, setSortDirection] = useState(-1);
  const [slotFilter, setSlotFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState();
  const [queryStartDate, setQueryStartDate] = useState(sDate);

  const allSongs = React.useMemo(() => {
    return plans.reduce(
      (a, b) =>
        a.concat(
          b.songs.map((s) => ({
            ...s.song,
            slot: s.slot,
            planDate: b.planDate,
            leaderID: s.leader?.id,
            key: b.song_key,
          }))
        ),
      []
    );
  }, [plans]);

  const songsForDateRange = React.useMemo(() => {
    return allSongs.filter((s) => s.planDate >= queryStartDate);
  }, [allSongs, queryStartDate]);

  const formatDate = (dateTicks) => {
    const dateObj = new Date(dateTicks);
    return `${
      dateObj.getMonth() + 1
    }/${dateObj.getDate()}/${dateObj.getFullYear()}`;
  };

  const songMetrics = React.useCallback((filteredSongs) => {
    const now = Date.now();
    const uniqueSongIDs = [...new Set(filteredSongs.map((s) => s.id))];
    const metrics = uniqueSongIDs.map((id) => {
      const songOccurrences = filteredSongs.filter((s) => s.id === id);
      const useCount = songOccurrences.length;
      const lastUsed = songOccurrences.reduce(
        (a, b) => (a > b.planDate ? a : b.planDate),
        new Date("1/1/2000").getTime()
      );
      const lastUsedWeeks = Math.floor(
        (now - lastUsed) / 1000 / 60 / 60 / 24 / 7
      );
      const slots = {};
      songOccurrences.forEach((o) => {
        slots[o.slot] = (slots[o.slot] || 0) + 1;
      });
      const preferredSlot = Object.keys(slots).reduce(
        (a, b) => (slots[a] || -1 > slots[b] ? a : b),
        ""
      );
      const songData = {
        id,
        title: songOccurrences[0].title,
        author: songOccurrences[0].author,
        ccliNumber: songOccurrences[0].ccliNumber,
        useCount,
        lastUsed: formatDate(lastUsed),
        lastUsedSort: lastUsed,
        lastUsedWeeks,
        preferredSlot,
      };

      return songData;
    });

    const maxUsage = metrics.reduce(
      (a, b) => (a < b.useCount ? b.useCount : a),
      0
    );
    metrics.forEach((m) => {
      m.usePercentage = m.useCount / maxUsage;
    });

    return metrics;
  }, []);

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
    //Filter by date to reduce the set for other filtering/sorting
    let filteredSongs = songMetrics(songsForDateRange);
    //Always sort by title first, so that fields with same value are in title order

    filteredSongs = filteredSongs.sort((a, b) =>
      a[SortFields.TITLE] < b[SortFields.TITLE]
        ? -1
        : a[SortFields.TITLE] > b[SortFields.TITLE]
        ? 1
        : 0
    );
    if (!!slotFilter) {
      filteredSongs = filteredSongs.filter(
        (s) => s[SortFields.PREFERRED_SLOT] === slotFilter
      );
    }

    if (!!searchFilter) {
      filteredSongs = filteredSongs.filter(
        (s) =>
          s[SortFields.TITLE]
            .toLowerCase()
            .includes(searchFilter.toLowerCase()) ||
          s[SortFields.ARTIST]
            .toLowerCase()
            .includes(searchFilter.toLowerCase())
      );
    }

    switch (sortField) {
      case SortFields.TITLE:
      case SortFields.ARTIST:
      case SortFields.PREFERRED_SLOT:
      case SortFields.USE_COUNT:
        filteredSongs = filteredSongs.sort((a, b) =>
          a[sortField] < b[sortField]
            ? -1 * sortDirection
            : a[sortField] > b[sortField]
            ? 1 * sortDirection
            : 0
        );
        break;
      case SortFields.LAST_USED:
        filteredSongs = filteredSongs.sort((a, b) => {
          const dateA = new Date(a[SortFields.LAST_USED]);
          const dateB = new Date(b[SortFields.LAST_USED]);
          return dateA < dateB
            ? -1 * sortDirection
            : dateA > dateB
            ? 1 * sortDirection
            : 0;
        });
        break;
      default:
    }
    return filteredSongs;
  }, [
    searchFilter,
    slotFilter,
    songMetrics,
    songsForDateRange,
    sortDirection,
    sortField,
  ]);
  const values = React.useMemo(
    () => ({
      sortField,
      sortDirection,
      updateSort,
      sortedData,
      slotFilter,
      setSlotFilter,
      searchFilter,
      setSearchFilter,
      queryStartDate,
      setQueryStartDate,
      plansLoading,
    }),
    [
      sortField,
      sortDirection,
      updateSort,
      sortedData,
      slotFilter,
      searchFilter,
      queryStartDate,
      plansLoading,
    ]
  );

  return <SongSearchContext.Provider {...props} value={values} />;
}

export function useSongList() {
  return React.useContext(SongSearchContext);
}
