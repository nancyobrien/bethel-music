import React from "react";
import styled from "@emotion/styled/macro";

import Colors from "styles/colors";
import Icon from "widgets/Icon";
import { StandardTransition } from "styles/global";
import ReactDatePicker from "react-datepicker";
import { formatDate, useSongList } from "contexts/songStats";
import { useSongData } from "contexts/songs";

export const SongTableContext = React.createContext();

export default function Plans() {
  return (
    <ContentContainer>
      <Controls>
        <StartDate />
      </Controls>
      <PlanView />
    </ContentContainer>
  );
}

/////////////////////////////////////////////////////////////

function PlanView() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const { currentVenue, plans, archivePlan, archiveSong } = useSongData();

  const venuePlans = React.useMemo(
    () =>
      plans
        ?.filter((p) => p.venue.id === currentVenue?.id)
        .sort((a, b) => a.planDate - b.planDate),
    [currentVenue?.id, plans]
  );

  const currentPlan = React.useMemo(
    () => venuePlans[currentIndex],
    [currentIndex, venuePlans]
  );

  return currentPlan ? (
    <div>
      <PlanHeader>
        <NavButton
          onClick={() =>
            setCurrentIndex((prevValue) => Math.max(prevValue - 1, 0))
          }
        >
          <Icon icon="chevron-left" />
        </NavButton>
        <div>
          <div>{formatDate(currentPlan.planDate)}</div>
          <div>
            <button
              onClick={() => {
                archivePlan({
                  variables: {
                    id: currentPlan.id,
                    archived: !currentPlan.archived,
                  },
                });
              }}
            >
              {currentPlan.archived ? "Unarchive" : "Archive"}
            </button>
          </div>
          <div>
            <a href={currentPlan.url} target="_blank" rel="noreferrer">
              View in PCO - {currentPlan.id}
            </a>
          </div>
        </div>
        <NavButton
          onClick={() =>
            setCurrentIndex((prevValue) =>
              Math.min(prevValue + 1, venuePlans.length - 1)
            )
          }
        >
          <Icon icon="chevron-right" />
        </NavButton>
      </PlanHeader>
      <div>
        {[...currentPlan.songs]
          .sort((a, b) => a.slot - b.slot)
          .map((s) => (
            <PlanItem key={s.id}>
              <div>{s.slot}</div>
              <div>
                <div>{s.song.title}</div>
                <div>{s.song.author}</div>
              </div>
              <div>{s.song_key}</div>
              <div>{s.leader?.fullName}</div>
              <div>
                <button
                  onClick={() => {
                    archiveSong({
                      variables: {
                        id: s.id,
                        archived: !s.archived,
                      },
                    });
                  }}
                >
                  {s.archived ? "Unarchive" : "Archive"}
                </button>
              </div>
            </PlanItem>
          ))}
      </div>
      <div></div>
    </div>
  ) : null;
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

const PlanItem = styled.div`
  display: grid;
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: 3rem 1fr 3rem 10rem 3rem;
  grid-template-rows: 1fr;

  border-bottom: 1px solid #ccc;
  padding: 1rem;

  & > div {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
`;

const PlanHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
`;

const NavButton = styled.button`
  border: 1px solid #ccc;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  ${StandardTransition};
  &:hover {
    background: #eee;
  }
`;
