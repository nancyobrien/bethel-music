import React, { useState } from "react";
import styled from "@emotion/styled/macro";

import { SongRow } from "./SongList/SongRow";
import { SongTableHeader } from "./SongList/SongTableHeader";

import data from "./SongList/tempData.json";

export const SongTableContext = React.createContext();

export default function SongTable() {
  const [sortField, setSortField] = useState("lastUsed");
  const [sortDirection, setSortDirection] = useState(1);

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
    [sortField]
  );
  return (
    <SongTableContext.Provider value={{ sortField, sortDirection, updateSort }}>
      <div id="songList" className="data-table">
        <SongTableHeader />

        <div id="songBody" className="data-content list">
          {data.map((d) => (
            <SongRow song={d} />
          ))}
        </div>
      </div>
    </SongTableContext.Provider>
  );
}
