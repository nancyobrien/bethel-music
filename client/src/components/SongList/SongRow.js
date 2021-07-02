import React from "react";
import styled from "@emotion/styled/macro";
import Icon from "widgets/Icon";
import Colors from "styles/colors";
import { formatDate, useSongHistory, useSongList } from "contexts/songStats";

export function SongRow({ song }) {
  const { queryStartDate } = useSongList();
  const songHistory = useSongHistory(song.id);

  const startDate = formatDate(queryStartDate);
  return (
    <ul className="data-row">
      <SongTitle className="title" data-songid={song.id}>
        <span>{song.title}</span>{" "}
        <span className="ccliNumber">({song.ccliNumber})</span>{" "}
        <SongTip>
          <Icon icon="ellipsis-h" />
          <SongHistory>
            {songHistory.map((s, idx) => (
              <div key={idx}>
                {s.displayDate} - {s.leaderName || <em>Unknown</em>} [{s.key}]
              </div>
            ))}
          </SongHistory>
        </SongTip>
      </SongTitle>
      <li className="artist" title={song.author}>
        <span className="constraint-width overflow-ellipsis artist-name">
          {song.author}
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
          <span style={{ width: `${song.usePercentage * 100}%` }}></span>
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

const SongHistory = styled.div`
  position: absolute;
  top: -1rem;
  left: 2rem;
  display: none;
  background: white;
  color: ${Colors.darktext};
  z-index: 100;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid ${Colors.primary};
  font-weight: normal;
  font-size: 0.85rem;
  > div {
    white-space: nowrap;
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
  position: relative;
  &:hover {
    ${SongHistory} {
      display: block;
    }
  }
`;
