import React from "react";
import styled from "@emotion/styled/macro";
import { SongRow } from "./SongList/SongRow";
import { SongTableHeader } from "./SongList/SongTableHeader";

import { useSongList } from "./SongList/useSongList";

export default function SongTable() {
  const { sortedData, plansLoading } = useSongList();

  return (
    <div id="songList" className="data-table">
      <SongTableHeader />

      {plansLoading && <Loading />}
      <div id="songBody" className="data-content list">
        {sortedData.map((d) => (
          <SongRow key={d.id} song={d} />
        ))}
      </div>
    </div>
  );
}

/////////////////////////////////////////////////////////////
function Loading() {
  return (
    <LoadingContainer>
      <span>Loading songs</span>
      <span className="loader-image"></span>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  display: flex;
  span {
    line-height: 3em;
    vertical-align: top;
    font-size: 126%;
    margin-left: 1em;
  }
  .loader-image {
    width: 4em;
    height: 3em;
    /*  display: inline-block;
    width: 2.5em;
    height: 0.7em;
    background-position: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: inline-image("ellipsis.gif"); */
  }

  @media (min-width: 800px) {
    min-width: 600px;
  }
`;
