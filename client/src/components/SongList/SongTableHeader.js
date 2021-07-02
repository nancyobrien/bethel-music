import React from "react";
import styled from "@emotion/styled/macro";
import { Icon } from "widgets/Icon";
import { formatDate, SortFields, useSongList } from "contexts/songStats";

export function SongTableHeader() {
  const { queryStartDate } = useSongList();
  return (
    <TableHeaderContainer>
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
          <Timestamp>
            (since <span>{formatDate(queryStartDate)}</span>)
          </Timestamp>
        </SongHeaderItem>
      </ul>
      <TableHeaders>
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
          <Timestamp>
            (since <span>{formatDate(queryStartDate)}</span>)
          </Timestamp>
        </SongHeaderItem>
      </TableHeaders>
    </TableHeaderContainer>
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
      <HeaderContent>
        <span>{children}</span>
        <SortIndicator>
          {isActive && (
            <SortIcon icon="chevron-down" direction={sortDirection} />
          )}
        </SortIndicator>
      </HeaderContent>
    </HeaderTitle>
  );
}

////////////////////////////////////////////////////////////////////////////////////////

const TableHeaderContainer = styled.div`
  @media (min-width: 800px) {
    display: table-header-group;
  }
`;

const TableHeaders = styled.ul`
  background-color: #f15b41;
  display: none;

  @media (min-width: 800px) {
    display: table-row;
  }
`;

const SortIcon = styled(Icon)`
  transform: rotateX(${({ direction }) => (direction === 1 ? "-180deg" : 0)});
  transition: all 150ms ease-in;
`;

const HeaderTitle = styled.li`
  cursor: ${({ sortable }) => (sortable ? "pointer" : "default")};
  padding: 1.5em;
  font-weight: bold;
  color: #fff;

  .subtitle {
    font-style: italic;
  }

  @media (min-width: 800px) {
    display: table-cell;
    width: auto;
  }
`;

const SortIndicator = styled.span`
  display: inline-block;
  width: 1.25rem;
  margin-left: 0.5rem;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Timestamp = styled.div`
  display: inline;

  font-style: italic;
  font-size: 90%;
  @media (min-width: 800px) {
    display: block;
  }
`;
