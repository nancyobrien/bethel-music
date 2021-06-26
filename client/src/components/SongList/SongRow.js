import React from "react";
import styled from "@emotion/styled/macro";

export function SongRow({ song }) {
  const startDate = "need start date";
  return (
    <ul className="data-row">
      <li className="title" data-songid={song.id}>
        <span className="constraint-width tooltip tooltipstered">
          {song.title} <span className="ccliNumber">({song.ccliNumber})</span>
        </span>
        <span className="tooltipster-icon"></span>
        <span className="tooltipster-icon mobile-only manual-tooltip"></span>
        <span className="song-ctrl ctrl1"></span>
        <span className="song-ctrl ctrl2"></span>
        <span className="data-label"></span>
      </li>
      <li className="artist" title={song.author}>
        <span className="constraint-width overflow-ellipsis artist-name">
          {song.artist}
        </span>
        <span className="data-label"></span>
      </li>
      <li className="lastUsed">
        {song.lastUsed} ({song.lastUsedWeeks})
        <span className="data-label"></span>
      </li>
      <li className="preferredSlot">
        {song.preferredSlot}
        <span className="data-label"></span>
      </li>

      <li className="useCount" data-sincedate={startDate}>
        <span className="label">{song.useCount}</span>{" "}
        <div className="meter">
          <span style={{ width: `${song.usePercentage}` }}></span>
        </div>
        <span
          className="data-label"
          data-sincedate={`Times Played (since ${startDate})`}
        ></span>
      </li>
      <li className="voting">
        &nbsp;<span className="data-label"></span>
      </li>
    </ul>
  );
}

///////////////////////////////////////////////////////
