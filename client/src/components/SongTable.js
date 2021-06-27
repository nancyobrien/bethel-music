import React from "react";

import { SongRow } from "./SongList/SongRow";
import { SongTableHeader } from "./SongList/SongTableHeader";

import { useSongList } from "./SongList/useSongList";

export default function SongTable() {
  const { sortedData } = useSongList();

  return (
    <div id="songList" className="data-table">
      <SongTableHeader />

      <div id="songBody" className="data-content list">
        {sortedData.map((d) => (
          <SongRow key={d.id} song={d} />
        ))}
      </div>
    </div>
  );
}
