import React from "react";
import styled from "@emotion/styled/macro";
import Icon from "widgets/Icon";
import Colors from "styles/colors";

export function SongRow({ song }) {
  const startDate = "need start date";
  return (
    <ul className="data-row">
      <SongTitle className="title" data-songid={song.id}>
        <span>{song.title}</span>{" "}
        <span className="ccliNumber">({song.ccliNumber})</span>{" "}
        <SongTip>
          <Icon icon="ellipsis-h" />
        </SongTip>
      </SongTitle>
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

const SongTitle = styled.li`
  display: flex !important;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  > span + span {
    margin-left: 0.25rem;
  }
`;

const SongTip = styled.span`
  cursor: help;
  margin-left: 0.5rem !important;
  background: ${Colors.primary};
  padding: 0 0.25rem;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
