import React from "react";
import styled from "@emotion/styled/macro";
import Colors from "../styles/colors";
import SongTable from "./SongTable";

import Icon from "widgets/Icon";
import { StandardTransition } from "styles/global";
import ReactDatePicker from "react-datepicker";
import { formatDate, useSongList } from "contexts/songStats";
import { useSongData } from "contexts/songs";

export const SongTableContext = React.createContext();

export default function SongUsage() {
  return (
    <ContentContainer>
      <Controls>
        <SearchBox />
        <StartDate />
        <Filters />
      </Controls>

      <SongTable />
    </ContentContainer>
  );
}

/////////////////////////////////////////////////////////////

function DownloadData() {
  const { sortedData, plansLoading, queryStartDate } = useSongList();
  const { currentVenue } = useSongData();
  const download_csv = (csv, filename) => {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], { type: "text/csv" });

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
  };

  const export_table_to_csv = () => {
    var rows = [
      `Title,CCLI #, Artist, Last Use, Last Use weeks, Most Common Slot, Number of Times Played since ${formatDate(
        queryStartDate
      )}`,
    ];

    sortedData.forEach((song) => {
      rows.push(
        `"${song.title}",${song.ccliNumber},"${song.author}",${song.lastUsed},${song.lastUsedWeeks},${song.preferredSlot},${song.useCount},`
      );
    });

    const fileName = `${currentVenue.name}-${formatDate(
      queryStartDate,
      "-"
    )}-thru-${formatDate(Date.now(), "-")}.csv`;
    // Download CSV
    download_csv(rows.join("\n"), fileName);
  };

  return (
    <DownloadButton disabled={plansLoading} onClick={export_table_to_csv}>
      <Icon icon="download2" />
    </DownloadButton>
  );
}
/////////////////////////////////////////////////////////////

function StartDate() {
  const { queryStartDate, setQueryStartDate } = useSongList();
  return (
    <div>
      <ReactDatePicker
        selected={queryStartDate}
        onChange={(date) => setQueryStartDate(date)}
      />
    </div>
  );
}

/////////////////////////////////////////////////////////////
function SearchBox() {
  const { searchFilter, setSearchFilter } = useSongList();
  return (
    <SearchContainer>
      <DownloadData />
      <label>Search by Title or Artist:</label>{" "}
      <input
        className="search-title"
        placeholder="Search"
        type="search"
        value={searchFilter || ""}
        onChange={(e) => {
          setSearchFilter(e.target.value);
        }}
      />
      <ClearSearchInput
        disabled={!searchFilter}
        onClick={() => setSearchFilter("")}
      >
        <Icon icon="cross-circle" />
      </ClearSearchInput>
    </SearchContainer>
  );
}

/////////////////////////////////////////////////////////////
function Filters() {
  const { slotFilter, setSlotFilter } = useSongList();
  return (
    <div className="filters">
      <span className="title--filter">Filter by slot:</span>
      <FilterItem
        onClick={() => setSlotFilter("")}
        selected={slotFilter === ""}
      >
        Any slot
      </FilterItem>
      <FilterItem onClick={() => setSlotFilter(1)} selected={slotFilter === 1}>
        Slot&nbsp;1
      </FilterItem>
      <FilterItem onClick={() => setSlotFilter(2)} selected={slotFilter === 2}>
        Slot&nbsp;2
      </FilterItem>
      <FilterItem onClick={() => setSlotFilter(3)} selected={slotFilter === 3}>
        Slot&nbsp;3
      </FilterItem>
      <FilterItem onClick={() => setSlotFilter(4)} selected={slotFilter === 4}>
        Slot&nbsp;4
      </FilterItem>
    </div>
  );
}

/////////////////////////////////////////////////////////////

const ContentContainer = styled.div`
  display: block;
`;

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

const ClearSearchInput = styled.span`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  padding: 0.25rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-top: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ disabled }) => (disabled ? Colors.darktext : Colors.primary)};
  ${StandardTransition};
`;

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  input {
    border-width: 0 0 1px 0;
    &:focus {
      outline: none;
    }
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

const DownloadButton = styled.span`
  padding: 0.5rem;
  border-radius: 100%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  margin-right: 1rem;
  color: ${Colors.primary};

  svg {
    margin-top: -0.3rem;
  }
`;
