import React from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import styled from "@emotion/styled/macro";
import axios from "axios";

import Colors from "styles/colors";
import Icon from "widgets/Icon";
import { StandardTransition } from "styles/global";
import ReactDatePicker from "react-datepicker";
import { formatDate } from "contexts/songStats";
import { useSongData } from "contexts/songs";

export const SongTableContext = React.createContext();

export default function Plans() {
  const { planDate } = useParams();
  const history = useHistory();
  const [refreshing, setRefreshing] = React.useState(false);
  const timer = React.useRef();
  const fetchList = React.useRef([]);
  const { currentVenue, plans, refetchPlans } = useSongData();

  const venuePlans = React.useMemo(
    () =>
      plans
        ?.filter((p) => p.venue.id === currentVenue?.id)
        .sort((a, b) => a.planDate - b.planDate),
    [currentVenue?.id, plans]
  );

  const lastDate = React.useMemo(() => {
    const songPlans = venuePlans?.filter((p) => p.songs?.length);
    if (!planDate && venuePlans?.filter((p) => p.songs?.length).length) {
      //Get last plan with songs
      return formatDate(songPlans[songPlans.length - 1].planDate, "-");
    } else {
      return null;
    }
  }, [planDate, venuePlans]);

  const currentDate = React.useMemo(() => {
    return new Date(planDate).getTime();
  }, [planDate]);
  const currentPlan = React.useMemo(
    () => [...venuePlans].reverse().find((p) => p.planDate <= currentDate),
    [currentDate, venuePlans]
  );

  const refreshPlan = React.useCallback(
    (plan) => {
      if (!fetchList.current.includes(plan.pcoID)) {
        fetchList.current.push(plan.pcoID);
        setRefreshing(true);
        clearTimeout(timer.current);
        axios
          .get(`/getPlanItemsForID/${plan.venue.pcoID}/${plan.pcoID}`)
          .then((res) => {
            timer.current = setTimeout(() => {
              refetchPlans();
              setRefreshing(false);
            }, 3000);
          });
      }
    },
    [refetchPlans]
  );

  const updateIndex = React.useCallback(
    (indexChange) => {
      const currentIndex = venuePlans.findIndex((p) => p.id === currentPlan.id);
      const newIndex = Math.min(
        Math.max(currentIndex + indexChange, 0),
        venuePlans.length - 1
      );
      //setPlanDate(venuePlans[newIndex].planDate);
      refreshPlan(venuePlans[newIndex]);
      history.push(`/plans/${formatDate(venuePlans[newIndex].planDate, "-")}`);
    },
    [currentPlan?.id, history, refreshPlan, venuePlans]
  );

  const setPlanDate = React.useCallback((newDate) => {
    history.push(`/plans/${formatDate(newDate, "-")}`);
  }, [history]);

  return !planDate && lastDate ? (
    <Redirect to={`/plans/${lastDate}`} />
  ) : (
    <ContentContainer>
      <Controls>
        <StartDate planDate={currentDate} setPlanDate={setPlanDate} />
      </Controls>
      <PlanView
        currentPlan={currentPlan}
        updateIndex={updateIndex}
        refreshing={refreshing}
        refreshPlan={refreshPlan}
      />
    </ContentContainer>
  );
}

/////////////////////////////////////////////////////////////

function PlanView({ currentPlan, updateIndex, refreshing, refreshPlan }) {
  const { archivePlan, archiveSong } = useSongData();

  return currentPlan ? (
    <PlanDisplay>
      <NavColumn>
        <NavButton onClick={() => updateIndex(-1)}>
          <Icon icon="chevron-left" />
        </NavButton>
      </NavColumn>
      <PlanContentColumn>
        <PlanHeader>
          <div>
            <div>{formatDate(currentPlan.planDate)}</div>
          </div>
        </PlanHeader>
        <div>
          {currentPlan.songs.length === 0 && <NoSongs>No Songs Found</NoSongs>}
          {[...currentPlan.songs]
            .sort((a, b) => a.slot - b.slot)
            .map((s) => (
              <PlanItem key={s.id}>
                <div>{s.slot}</div>
                <div>
                  <PlanTitle>{s.song.title}</PlanTitle>
                  <PlanAuthor>{s.song.author}</PlanAuthor>
                </div>
                <div>{s.song_key}</div>
                <div>{s.leader?.fullName}</div>
                <div>
                  <IconButton
                    title={s.archived ? "Unarchive" : "Archive"}
                    onClick={() => {
                      archiveSong({
                        variables: {
                          id: s.id,
                          archived: !s.archived,
                        },
                      });
                    }}
                  >
                    {s.archived ? <Icon icon="box1" /> : <Icon icon="box2" />}
                  </IconButton>
                </div>
              </PlanItem>
            ))}
        </div>
        <PlanActions>
          <div>
            <IconButton
              title={currentPlan.archived ? "Unarchive" : "Archive"}
              onClick={() => {
                archivePlan({
                  variables: {
                    id: currentPlan.id,
                    archived: !currentPlan.archived,
                  },
                });
              }}
            >
              {currentPlan.archived ? (
                <Icon icon="box1" />
              ) : (
                <Icon icon="box2" />
              )}
            </IconButton>
          </div>
          <div>
            <a href={currentPlan.url} target="_blank" rel="noreferrer">
              View in PCO
            </a>
          </div>
          <div>
            <IconButton
              spin={refreshing}
              title={refreshing ? "Loading" : "Refresh"}
              disabled={refreshing}
              onClick={() => refreshPlan(currentPlan)}
            >
              <Icon icon="sync" />
            </IconButton>
          </div>
        </PlanActions>
      </PlanContentColumn>
      <NavColumn>
        <NavButton onClick={() => updateIndex(1)}>
          <Icon icon="chevron-right" />
        </NavButton>
      </NavColumn>
    </PlanDisplay>
  ) : null;
}
/////////////////////////////////////////////////////////////

function StartDate({ planDate, setPlanDate }) {
  const isSunday = (date) => {
    const day = date.getDay();
    return day === 0;
  };

  return (
    <div>
      <ReactDatePicker
        filterDate={isSunday}
        selected={planDate}
        onChange={(date) => setPlanDate(date)}
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

const PlanDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50rem;
  width: 100%;
  margin: 1rem auto;
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

  &:last-of-type {
    border-color: transparent;
  }

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
  justify-content: center;
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
`;

const PlanContentColumn = styled.div`
  flex: 1;
  padding: 0 1rem;
`;

const NavColumn = styled.div`
  flex: 0;
  padding: 0 0.5rem;
  align-self: center;
`;

const NavButton = styled.button`
  border: 1px solid #ccc;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  ${StandardTransition};
  &:hover {
    background: #eee;
  }
`;

const PlanActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 50rem;
  width: 100%;
  margin: 1rem auto;
  border-top: 1px solid ${Colors.secondary};
  padding-top: 1rem;
  a {
    font-size: 0.75rem;
  }
`;

const IconButton = styled.button`
  border: none;
  background: none;
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 100%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #eee;
  }

  svg {
    animation-name: ${({ spin }) => (spin ? "spin" : "none")};
    animation-duration: 1s;
    animation-iteration-count: ${({ spin }) => (spin ? "infinite" : 0)};
  }
`;

const NoSongs = styled.div`
  font-size: 1.25rem;
  padding: 1rem;
  color: ${Colors.primary};
`;

const PlanTitle = styled.div``;

const PlanAuthor = styled.div`
  font-size: 0.75rem;
  font-style: italic;
  color: ${Colors.darktext};
`;
