import React from "react";
import styled from "@emotion/styled/macro";
import Colors from "../styles/colors";
import SongTable from "./SongTable";

export default function SongUsage() {
  return (
    <div className="content-container" id="tab-songs">
      <Controls>
        <SearchContainer>
          <label>Search by Title or Artist:</label>{" "}
          <input className="search-title" placeholder="Search" type="search" />
          <a className="clear-input" href="#"></a>
        </SearchContainer>
        <div className="config">
          <input type="text" className="datepicker" id="startdatepicker" />
        </div>
        <Filters />
      </Controls>
      <div id="songList" className="data-table">
        <div className="data-head">
          <ul className="data-header-list drop-list">
            <li className="sort" data-sort="title">
              <a>
                Title <span className="subtitle">(CCLI #)</span>
              </a>
            </li>
            <li className="sort" data-sort="artist">
              <a>Artist</a>
            </li>
            <li className="sort" data-sort="lastUsed">
              <a>Last Use (weeks)</a>
            </li>
            <li className="sort" data-sort="preferredSlot">
              <a>Most Common Slot</a>
            </li>
            <li className="sort" data-sort="useCount">
              <a>Number of Times Played</a>{" "}
              <div className="timestamp">
                (since <span className="dataStartDate"></span>)
              </div>
            </li>
            <li className="no-sort voting">Vote</li>
          </ul>
          <ul id="data-titles" className="data-header"></ul>
        </div>
        {/* <!-- IMPORTANT, className="list" have to be on container --> */}
        <div id="songBody" className="data-content list">
          <Loading />
        </div>
        <SongTable />
      </div>
    </div>
  );
}

/////////////////////////////////////////////////////////////
function Filters() {
  const [selectedFilter, setSelectedFilter] = React.useState("");
  return (
    <div className="filters">
      <span className="title--filter">Filter by slot:</span>
      <FilterItem
        onClick={() => setSelectedFilter("")}
        selected={selectedFilter === ""}
      >
        Any slot
      </FilterItem>
      <FilterItem
        onClick={() => setSelectedFilter("1")}
        selected={selectedFilter === "1"}
      >
        Slot&nbsp;1
      </FilterItem>
      <FilterItem
        onClick={() => setSelectedFilter("2")}
        selected={selectedFilter === "2"}
      >
        Slot&nbsp;2
      </FilterItem>
      <FilterItem
        onClick={() => setSelectedFilter("3")}
        selected={selectedFilter === "3"}
      >
        Slot&nbsp;3
      </FilterItem>
      <FilterItem
        onClick={() => setSelectedFilter("4")}
        selected={selectedFilter === "4"}
      >
        Slot&nbsp;4
      </FilterItem>
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

/////////////////////////////////////////////////////////////

const Controls = styled.div`
  font-weight: bold;
  padding: 1em;
  border: 1px solid ${Colors.secondary};
  display: flex;
  justify-content: space-between;

  label {
    display: block;
    @media (min-width: 800px) {
      display: inline;
    }
  }

  input {
    display: inline-block;
    margin: 0.5em 0;
    width: 90%;
    @media (min-width: 800px) {
      margin-left: 1em;
      width: 30%;
      min-width: 200px;
    }
  }

  .clear-input {
    text-decoration: none;
    color: #aaa;
    font-size: 1.3em;
    line-height: 0.9em;
    margin: 0;
    padding: 0;
    display: inline-block;
    position: relative;
    margin-left: -1.1em;
    top: 0.15em;
    &:hover {
      color: #666;
    }
    &:before {
      font-family: "icomoon";
      content: "\e908";
    }
    &:focus,
    &:active {
      outline: none;
    }
  }

  .button--randomize {
    background-color: ${Colors.primary};
    color: white;
    text-decoration: none;
    padding: 0.5em 2em;
    border: thin solid ${Colors.primary};
    display: inline-block;

    span {
      font-weight: normal;
      margin-right: 0.3em;
      &.icon-dice-single {
        &:before {
          display: inline-block;
        }
      }
    }
    &.processing {
      cursor: default;
      .icon-dice-single {
        &:before {
          animation: spin 0.75s infinite;
        }
      }
    }
    &:hover {
      border: thin dotted white;
    }
  }

  .button--download {
    background-color: ${Colors.primary};
    color: white;
    text-decoration: none;
    padding: 0.5em 2em;
    border: thin solid ${Colors.primary};
    display: inline-block;
    overflow: hidden;

    span {
      font-weight: normal;

      &.icon-arrow-down {
        margin-right: 0.3em;
        &:before {
          display: inline-block;
          position: relative;
        }
      }
    }
    &.processing {
      cursor: default;
      .icon-arrow-down {
        &:before {
          -webkit-animation: movedown 0.8s steps(10) infinite;
          -moz-animation: movedown 0.8s steps(10) infinite;
          -ms-animation: movedown 0.8s steps(10) infinite;
          -o-animation: movedown 0.8s steps(10) infinite;
          animation: movedown 0.8s steps(10) infinite;
        }
      }
    }
    &:hover {
      border: thin dotted white;
    }
  }
`;

const SearchContainer = styled.div``;

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

const FilterItem = styled.span`
  color: ${({ selected }) => (selected ? "#fff" : Colors.primary)};
  text-decoration: none;
  padding: 0.5em 1em;
  font-size: 0.6rem;
  border-bottom: thin dotted ${Colors.primary};
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? Colors.primary : "transparent"};

  @media (min-width: 350px) {
    font-size: 0.7rem;
  }

  &:hover {
    background-color: ${({ selected }) =>
      selected ? Colors.primary : Colors.subtle};
  }
`;
