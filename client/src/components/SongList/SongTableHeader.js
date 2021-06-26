import React from "react";
import styled from "@emotion/styled/macro";
import { Icon } from "../../widgets/Icon";
import { SongTableContext } from "../SongTable";

export function SongTableHeader() {
  return (
    <div className="data-head">
      <ul className="data-header-list drop-list zg-ul-select">
        <li className="sorter" data-sort="title">
          <a>
            Title <span className="subtitle">(CCLI #)</span>
          </a>
        </li>
        <li className="sorter" data-sort="artist">
          <a>Artist</a>
        </li>
        <li className="sorter asc active" data-sort="lastUsed">
          <a>Last Use (weeks)</a>
          <span id="ul-arrow" className="arrow"></span>
        </li>
        <li className="sorter" data-sort="preferredSlot">
          <a>Most Common Slot</a>
        </li>
        <li className="sorter" data-sort="useCount">
          <a>Number of Times Played</a>{" "}
          <div className="timestamp">
            (since <span className="dataStartDate">1/1/2020</span>)
          </div>
        </li>
        <SongHeaderItem fieldName="title">
          Title <span className="subtitle">(CCLI #)</span>
        </SongHeaderItem>
        <SongHeaderItem fieldName="artist">Artist</SongHeaderItem>
        <SongHeaderItem fieldName="lastUsed">Last Use (weeks)</SongHeaderItem>
        <SongHeaderItem fieldName="preferredSlot">
          Most Common Slot
        </SongHeaderItem>
        <SongHeaderItem fieldName="useCount">
          Number of Times Played{" "}
          <div className="timestamp">
            (since <span className="dataStartDate">1/1/2020</span>)
          </div>
        </SongHeaderItem>
      </ul>
      <ul id="data-titles" className="data-header">
        <SongHeaderItem fieldName="title">
          Title <span className="subtitle">(CCLI #)</span>
        </SongHeaderItem>
        <SongHeaderItem fieldName="artist">Artist</SongHeaderItem>
        <SongHeaderItem fieldName="lastUsed">Last Use (weeks)</SongHeaderItem>
        <SongHeaderItem fieldName="preferredSlot">
          Most Common Slot
        </SongHeaderItem>
        <SongHeaderItem fieldName="useCount">
          Number of Times Played{" "}
          <div className="timestamp">
            (since <span className="dataStartDate">1/1/2020</span>)
          </div>
        </SongHeaderItem>
      </ul>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////

function SongHeaderItem({ fieldName, children }) {
  const { sortField, sortDirection, updateSort } =
    React.useContext(SongTableContext);

  const isActive = React.useMemo(() => {
    return fieldName === sortField;
  }, [fieldName, sortField]);
  console.log(isActive, sortField, sortDirection);
  return (
    <HeaderTitle
      sortable={!!fieldName}
      onClick={fieldName ? () => updateSort(fieldName) : () => {}}
    >
      {children}
      {isActive && <SortIcon icon="chevron-down" direction={sortDirection} />}
    </HeaderTitle>
  );
}

////////////////////////////////////////////////////////////////////////////////////////

const SortIcon = styled(Icon)`
  transform: rotateX(${({ direction }) => (direction === 1 ? "-180deg" : 0)});
  transition: all 150ms linear;
`;

const HeaderTitle = styled.li`
  cursor: ${({ sortable }) => (sortable ? "pointer" : "default")};
`;
