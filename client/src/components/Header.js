import React from "react";
import styled from "@emotion/styled/macro";
import { useSongData } from "contexts/songs";
import Colors from "styles/colors";
import { StandardTransition } from "styles/global";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img
          alt="Bethel logo"
          src="https://www.bethel.ch/frontend/assets/img/logo-color-orange-v2.png"
        />
      </Logo>

      <MobileNav className="nav-icon" id="mobile-icon" />
      <NavMenu>
        <NavItem to="/" exact>Song Usage</NavItem>
        <NavItem to="/plans">View Plans</NavItem>
        <NavItem to="/pickSongs">Pick Songs</NavItem>
        <NavItem to="/export">Export Data</NavItem>
      </NavMenu>
      <VenueSelector />
    </HeaderContainer>
  );
}

///////////////////////////////////////////////////////
function VenueSelector() {
  const { venues, setVenueID } = useSongData();

  const selectVenue = React.useCallback(
    (e) => {
      setVenueID(e.target.value);
    },
    [setVenueID]
  );

  return (
    <VenueSelect className="location-select" onChange={selectVenue}>
      {venues.map((v) => (
        <option key={v.id} value={v.id}>
          {v.name}
        </option>
      ))}
    </VenueSelect>
  );
}

///////////////////////////////////////////////////////

const HeaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0;

  @media (min-width: 800px) {
    height: auto;
  }
`;

const Logo = styled.div`
  height: 3.58em;
  img {
    height: 100%;
  }
`;

const MobileNav = styled.span`
  display: block;

  @media (min-width: 800px) {
    display: none;
  }
`;

const NavMenu = styled.div`
  display: none;
  overflow: hidden;
  *zoom: 1;
  position: relative;
  margin-left: 0;
  z-index: 700;
  min-height: 41px;
  background-color: #f1f1f1;
  width: auto;
  padding: 1em;

  @media (min-width: 800px) {
    background-color: transparent;
    position: relative;
    width: auto;

    padding: 2em;
    display: inline-block;
  }
`;

const VenueSelect = styled.select`
  background-color: #ffffff;

  padding: 0.25rem 1rem 0.25rem 0.5rem;
  font-size: 0.9rem;
  border: 1px solid #cccccc;
  color: #f15b41;

  > h2 {
    margin-top: 0;
  }

  @media (min-width: 400px) {
    font-size: 1rem;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
  }
`;

const NavItem = styled(NavLink)`
  text-transform: uppercase;
  cursor: pointer;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: #666;
  font-size: 12px;
  display: block;
  padding: 0.5em 1em;
  border-bottom: 2px solid transparent;
  margin: 0 0.25em;
  width: 100%;
  text-decoration: none;
  ${StandardTransition};

  &:hover {
    border-bottom: 2px solid #ccc;
  }

  &.active {
    background: ${Colors.primary};
    color: white;
    border-bottom: 2px solid ${Colors.primary};

    @media (min-width: 800px) {
      color: #666;
      background: transparent;
    }
  }

  @media (min-width: 800px) {
    border-bottom: 2px solid #fff;
    width: auto;
    height: auto;
    display: table-cell;
    vertical-align: bottom;
    white-space: nowrap;
    text-align: center;
    font-size: 17px;
    padding: 0.5em 1.5em;
  }
`;
