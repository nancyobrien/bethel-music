import React from "react";
import styled from "@emotion/styled/macro";

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
        <li class="nav_item js-nav-item selected" data-nav="songs">
          <a>Song Usage</a>
        </li>
        <li class="nav_item js-nav-item" data-nav="pickSongs">
          <a>Pick Songs</a>
        </li>
        <li class="nav_item js-nav-item" data-nav="export">
          <a>Export Data (Venues)</a>
        </li>
        <li class="nav_item ">
          <a href="/API/CCLIExport.ashx">Export Data</a>
        </li>
      </NavMenu>
      <VenueSelect class="location-select">
        <option value="richland">Richland (Live)</option>
        <option value="pasco">West Pasco</option>
      </VenueSelect>
    </HeaderContainer>
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

const NavMenu = styled.ul`
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
