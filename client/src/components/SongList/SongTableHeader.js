import React from "react";
import styled from "@emotion/styled/macro";
import { Icon } from "widgets/Icon";
import { formatDate, SortFields, useSongList } from "contexts/songStats";

 

export function SongTableHeader() {
  const { queryStartDate } = useSongList();
  return (
    <div className="data-head">
      <ul className="data-header-list drop-list zg-ul-select">
        <SongHeaderItem fieldName={SortFields.TITLE}>
          Title <span className="subtitle">(CCLI #)</span>
        </SongHeaderItem>
        <SongHeaderItem fieldName={SortFields.ARTIST}>Artist</SongHeaderItem>
        <SongHeaderItem fieldName={SortFields.LAST_USED}>
          Last Use (weeks)
        </SongHeaderItem>
        <SongHeaderItem fieldName={SortFields.PREFERRED_SLOT}>
          Most Common Slot
        </SongHeaderItem>
        <SongHeaderItem fieldName={SortFields.USE_COUNT}>
          Number of Times Played{" "}
          <div className="timestamp">
            (since <span className="dataStartDate">{formatDate(queryStartDate)}</span>)
          </div>
        </SongHeaderItem>
      </ul>
      <ul id="data-titles" className="data-header">
        <SongHeaderItem fieldName={SortFields.TITLE}>
          Title <span className="subtitle">(CCLI #)</span>
        </SongHeaderItem>
        <SongHeaderItem fieldName={SortFields.ARTIST}>Artist</SongHeaderItem>
        <SongHeaderItem fieldName={SortFields.LAST_USED}>
          Last Use (weeks)
        </SongHeaderItem>
        <SongHeaderItem fieldName={SortFields.PREFERRED_SLOT}>
          Most Common Slot
        </SongHeaderItem>
        <SongHeaderItem fieldName={SortFields.USE_COUNT}>
          Number of Times Played{" "}
          <div className="timestamp">
            (since <span className="dataStartDate">{formatDate(queryStartDate)}</span>)
          </div>
        </SongHeaderItem>
      </ul>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////

function SongHeaderItem({ fieldName, children }) {
  const { sortField, sortDirection, updateSort } = useSongList();

  const isActive = React.useMemo(() => {
    return fieldName === sortField;
  }, [fieldName, sortField]);
  return (
    <HeaderTitle
      sortable={!!fieldName}
      onClick={fieldName ? () => updateSort(fieldName) : () => {}}
    >
      <span>{children}</span>
      <SortIndicator>
        {isActive && <SortIcon icon="chevron-down" direction={sortDirection} />}
      </SortIndicator>
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
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const SortIndicator = styled.span`
  display: inline-block;
  width: 1.25rem;
  margin-left: 0.25rem;
`;
