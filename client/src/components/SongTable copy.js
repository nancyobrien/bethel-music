import React from "react";
import styled from "@emotion/styled/macro";

export default function SongTable() {
  return (
    <div id="songList" className="data-table">
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

          <li className="no-sort voting">Vote</li>
        </ul>
        <ul id="data-titles" className="data-header">
          <li className="sort active" data-sort="title">
            <a>
              Title <span className="subtitle">(CCLI #)</span>
            </a>
            <span id="ul-arrow" className="arrow"></span>
          </li>
          <li className="sort" data-sort="artist">
            <a>Artist</a>
          </li>
          <li className="sort desc" data-sort="lastUsed">
            <a className="sort-down">Last Use (weeks)</a>
          </li>
          <li className="sort" data-sort="preferredSlot">
            <a>Most Common Slot</a>
          </li>
          <li className="sort" data-sort="useCount">
            <a>Number of Times Played</a>{" "}
            <div className="timestamp">
              (since <span className="dataStartDate">1/1/2020</span>)
            </div>
          </li>
          <li className="no-sort voting">Vote</li>
        </ul>
      </div>

      <div id="songBody" className="data-content list">
        <ul className="data-row">
          <li className="title" data-songid="15079625">
            <span className="constraint-width tooltip tooltipstered">
              Glorious Day <span className="ccliNumber">(7081388)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Jason Ingram, Jonathan Smith, Kristian Stanfill, and Sean Curran"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Jason Ingram, Jonathan Smith, Kristian Stanfill, and Sean Curran
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/30/2021 (4)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>

          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">5</span>{" "}
            <div className="meter">
              <span style={{ width: "72%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="11893959">
            <span className="constraint-width tooltip tooltipstered">
              King Of My Heart <span className="ccliNumber">(7046145)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="John Mark McMillan and Sarah McMillan">
            <span className="constraint-width overflow-ellipsis artist-name">
              John Mark McMillan and Sarah McMillan
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/30/2021 (4)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            3<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">3</span>{" "}
            <div className="meter">
              <span style={{ width: "43%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="19528325">
            <span className="constraint-width tooltip tooltipstered">
              Battle Belongs <span className="ccliNumber">(7148126)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Brian Johnson and Phil Wickham">
            <span className="constraint-width overflow-ellipsis artist-name">
              Brian Johnson and Phil Wickham
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/30/2021 (4)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">6</span>{" "}
            <div className="meter">
              <span style={{ width: "86%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="20607863">
            <span className="constraint-width tooltip tooltipstered">
              You're The Fire <span className="ccliNumber">(7073835)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Sean Hill and Shelly E. Johnson">
            <span className="constraint-width overflow-ellipsis artist-name">
              Sean Hill and Shelly E. Johnson
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/30/2021 (4)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>

          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">2</span>{" "}
            <div className="meter">
              <span style={{ width: "29%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="2623248">
            <span className="constraint-width tooltip tooltipstered">
              You Are Good <span className="ccliNumber">(5191806)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Brian Johnson">
            <span className="constraint-width overflow-ellipsis artist-name">
              Brian Johnson
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/23/2021 (5)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">6</span>{" "}
            <div className="meter">
              <span style={{ width: "86%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="15809014">
            <span className="constraint-width tooltip tooltipstered">
              Way Maker <span className="ccliNumber">(7115744)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Osinachi Kalu Okoro Egbu">
            <span className="constraint-width overflow-ellipsis artist-name">
              Osinachi Kalu Okoro Egbu
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/23/2021 (5)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">4</span>{" "}
            <div className="meter">
              <span style={{ width: "58%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="4325271">
            <span className="constraint-width tooltip tooltipstered">
              One Thing Remains <span className="ccliNumber">(5508444)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Christa Black, Brian Johnson, and Jeremy Riddle"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Christa Black, Brian Johnson, and Jeremy Riddle
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/23/2021 (5)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">2</span>{" "}
            <div className="meter">
              <span style={{ width: "29%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="2598037">
            <span className="constraint-width tooltip tooltipstered">
              Amazing Grace <span className="ccliNumber">(1037882)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="John Newton">
            <span className="constraint-width overflow-ellipsis artist-name">
              John Newton
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/16/2021 (6)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">5</span>{" "}
            <div className="meter">
              <span style={{ width: "72%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="2789336">
            <span className="constraint-width tooltip tooltipstered">
              Be Thou My Vision <span className="ccliNumber">(30639)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Mary Elizabeth Byrne and Eleanor Henrietta Hull"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Mary Elizabeth Byrne and Eleanor Henrietta Hull
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/16/2021 (6)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            4<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">4</span>{" "}
            <div className="meter">
              <span style={{ width: "58%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="17669186">
            <span className="constraint-width tooltip tooltipstered">
              Goodness Of God <span className="ccliNumber">(7117726)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Ed Cash and Jenn Johnson">
            <span className="constraint-width overflow-ellipsis artist-name">
              Ed Cash and Jenn Johnson
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/16/2021 (6)<span className="data-label"></span>
          </li>

          <li className="preferredSlot">
            3<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">6</span>{" "}
            <div className="meter">
              <span style={{ width: "86%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="13450130">
            <span className="constraint-width tooltip tooltipstered">
              Red Sea Road <span className="ccliNumber">(7065846)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Christa Wells, Ellie Holcomb, and Nicole Witt"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Christa Wells, Ellie Holcomb, and Nicole Witt
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/16/2021 (6)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="9402321">
            <span className="constraint-width tooltip tooltipstered">
              All The Earth <span className="ccliNumber">(7035179)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Andi Rozier, Jason Ingram, Jonathan Smith, and Meredith Andrews"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Andi Rozier, Jason Ingram, Jonathan Smith, and Meredith Andrews
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/9/2021 (7)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">7</span>{" "}
            <div className="meter">
              <span style={{ width: "100%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="2752608">
            <span className="constraint-width tooltip tooltipstered">
              Nothing But The Blood <span className="ccliNumber">(21332)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Robert Lowry">
            <span className="constraint-width overflow-ellipsis artist-name">
              Robert Lowry
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/9/2021 (7)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            3<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">7</span>{" "}
            <div className="meter">
              <span style={{ width: "100%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="4986565">
            <span className="constraint-width tooltip tooltipstered">
              Cornerstone <span className="ccliNumber">(6158927)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="William Batchelder Bradbury, Eric Liljero, Reuben Morgan, Edward Mote, and Jonas Myrin"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              William Batchelder Bradbury, Eric Liljero, Reuben Morgan, Edward
              Mote, and Jonas Myrin
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/9/2021 (7)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">4</span>{" "}
            <div className="meter">
              <span style={{ width: "58%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="3380772">
            <span className="constraint-width tooltip tooltipstered">
              How Deep The Father's Love For Us{" "}
              <span className="ccliNumber">(1558110)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Stuart Townend">
            <span className="constraint-width overflow-ellipsis artist-name">
              Stuart Townend
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/9/2021 (7)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            4<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">2</span>{" "}
            <div className="meter">
              <span style={{ width: "29%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="5793003">
            <span className="constraint-width tooltip tooltipstered">
              This Is Amazing Grace{" "}
              <span className="ccliNumber">(6333821)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Josh Farro, Jeremy Riddle, and Phil Wickham"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Josh Farro, Jeremy Riddle, and Phil Wickham
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/2/2021 (8)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">3</span>{" "}
            <div className="meter">
              <span style={{ width: "43%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="19121440">
            <span className="constraint-width tooltip tooltipstered">
              The Name We're Running To{" "}
              <span className="ccliNumber">(7123472)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Jess Cates and Jon Egan">
            <span className="constraint-width overflow-ellipsis artist-name">
              Jess Cates and Jon Egan
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/2/2021 (8)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">5</span>{" "}
            <div className="meter">
              <span style={{ width: "72%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="9402361">
            <span className="constraint-width tooltip tooltipstered">
              Lamb Of God <span className="ccliNumber">(126141)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Scott Allen, Trent Argante, Kenneth Bentley, Joe Hardy, Ben Hewitt, Paul Joseph, and Mylon Lefevre"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Scott Allen, Trent Argante, Kenneth Bentley, Joe Hardy, Ben
              Hewitt, Paul Joseph, and Mylon Lefevre
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/2/2021 (8)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            4<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="2855674">
            <span className="constraint-width tooltip tooltipstered">
              Great Is Thy Faithfulness{" "}
              <span className="ccliNumber">(18723)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>

          <li
            className="artist"
            title="Thomas Obediah Chisholm and William Marion Runyan"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Thomas Obediah Chisholm and William Marion Runyan
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/25/2021 (9)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">3</span>{" "}
            <div className="meter">
              <span style={{ width: "43%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="12430854">
            <span className="constraint-width tooltip tooltipstered">
              Center My Life <span className="ccliNumber">(7051445)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Aaron Ivey and Brett Land">
            <span className="constraint-width overflow-ellipsis artist-name">
              Aaron Ivey and Brett Land
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/25/2021 (9)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">4</span>{" "}
            <div className="meter">
              <span style={{ width: "58%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="14455007">
            <span className="constraint-width tooltip tooltipstered">
              O Come To The Altar <span className="ccliNumber">(7051511)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Christopher Brown, Mack Brock, Steven Furtick, and Wade Joye"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Christopher Brown, Mack Brock, Steven Furtick, and Wade Joye
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/25/2021 (9)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            3<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">3</span>{" "}
            <div className="meter">
              <span style={{ width: "43%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="15937764">
            <span className="constraint-width tooltip tooltipstered">
              Great Things <span className="ccliNumber">(7111321)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Jonas Myrin and Phil Wickham">
            <span className="constraint-width overflow-ellipsis artist-name">
              Jonas Myrin and Phil Wickham
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/18/2021 (10)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">4</span>{" "}
            <div className="meter">
              <span style={{ width: "58%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="16234805">
            <span className="constraint-width tooltip tooltipstered">
              Hallelujah For The Cross{" "}
              <span className="ccliNumber">(7107551)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Ben Glover, Chris McClarney, and Jeff Pardo"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Ben Glover, Chris McClarney, and Jeff Pardo
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/18/2021 (10)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">4</span>{" "}
            <div className="meter">
              <span style={{ width: "58%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="13237528">
            <span className="constraint-width tooltip tooltipstered">
              Never Gonna Stop Singing{" "}
              <span className="ccliNumber">(7054533)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Matt Vaughan, Randy Jackson, and Tom Smith"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Matt Vaughan, Randy Jackson, and Tom Smith
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/18/2021 (10)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="3654641">
            <span className="constraint-width tooltip tooltipstered">
              10,000 Reasons (Bless The Lord){" "}
              <span className="ccliNumber">(6016351)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Jonas Myrin and Matt Redman">
            <span className="constraint-width overflow-ellipsis artist-name">
              Jonas Myrin and Matt Redman
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/11/2021 (11)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            3<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">5</span>{" "}
            <div className="meter">
              <span style={{ width: "72%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="14970972">
            <span className="constraint-width tooltip tooltipstered">
              Champion <span className="ccliNumber">(7065984)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Bryan Torwalt and Katie Torwalt">
            <span className="constraint-width overflow-ellipsis artist-name">
              Bryan Torwalt and Katie Torwalt
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/11/2021 (11)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">4</span>{" "}
            <div className="meter">
              <span style={{ width: "58%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="13725030">
            <span className="constraint-width tooltip tooltipstered">
              Death Was Arrested <span className="ccliNumber">(7046448)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Adam Kersh, Brandon Coker, Heath Balltzglier, and Paul Taylor"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Adam Kersh, Brandon Coker, Heath Balltzglier, and Paul Taylor
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/4/2021 (12)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">6</span>{" "}
            <div className="meter">
              <span style={{ width: "86%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="16917813">
            <span className="constraint-width tooltip tooltipstered">
              Living Hope <span className="ccliNumber">(7106807)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Brian Johnson and Phil Wickham">
            <span className="constraint-width overflow-ellipsis artist-name">
              Brian Johnson and Phil Wickham
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/4/2021 (12)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            5<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">4</span>{" "}
            <div className="meter">
              <span style={{ width: "58%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>

          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="11580041">
            <span className="constraint-width tooltip tooltipstered">
              Resurrecting <span className="ccliNumber">(7051507)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Christopher Brown, Mack Brock, Matt Ntele, Steven Furtick, and Wade Joye"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Christopher Brown, Mack Brock, Matt Ntele, Steven Furtick, and
              Wade Joye
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/4/2021 (12)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">2</span>{" "}
            <div className="meter">
              <span style={{ width: "29%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="4558983">
            <span className="constraint-width tooltip tooltipstered">
              In Christ Alone <span className="ccliNumber">(3350395)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Keith Getty and Stuart Townend">
            <span className="constraint-width overflow-ellipsis artist-name">
              Keith Getty and Stuart Townend
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/4/2021 (12)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">4</span>{" "}
            <div className="meter">
              <span style={{ width: "58%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="17844915">
            <span className="constraint-width tooltip tooltipstered">
              King Of Kings <span className="ccliNumber">(7127647)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Brooke Ligertwood, Jason Ingram, and Scott Ligertwood"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Brooke Ligertwood, Jason Ingram, and Scott Ligertwood
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/4/2021 (12)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            4<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">3</span>{" "}
            <div className="meter">
              <span style={{ width: "43%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="14969803">
            <span className="constraint-width tooltip tooltipstered">
              Testimony <span className="ccliNumber">(7084245)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Charles Starling, Joy Starling, Mia Fieldes, and Seth Mosley"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Charles Starling, Joy Starling, Mia Fieldes, and Seth Mosley
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            3/28/2021 (13)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">4</span>{" "}
            <div className="meter">
              <span style={{ width: "58%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="13700371">
            <span className="constraint-width tooltip tooltipstered">
              What A Beautiful Name{" "}
              <span className="ccliNumber">(7068424)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Ben Fielding and Brooke Ligertwood">
            <span className="constraint-width overflow-ellipsis artist-name">
              Ben Fielding and Brooke Ligertwood
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            3/14/2021 (15)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">3</span>{" "}
            <div className="meter">
              <span style={{ width: "43%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="9290305">
            <span className="constraint-width tooltip tooltipstered">
              Worthy Worthy <span className="ccliNumber">(7005970)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Mia Fieldes and Jacob Sooter">
            <span className="constraint-width overflow-ellipsis artist-name">
              Mia Fieldes and Jacob Sooter
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            3/14/2021 (15)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            4<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">2</span>{" "}
            <div className="meter">
              <span style={{ width: "29%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="5552339">
            <span className="constraint-width tooltip tooltipstered">
              For The Sake Of The World{" "}
              <span className="ccliNumber">(6227030)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Brandon Aaronson, Brian Johnson, Jeremy Riddle, and Joel Taylor"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Brandon Aaronson, Brian Johnson, Jeremy Riddle, and Joel Taylor
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            3/7/2021 (16)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            3<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">4</span>{" "}
            <div className="meter">
              <span style={{ width: "58%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="14128383">
            <span className="constraint-width tooltip tooltipstered">
              God With Us <span className="ccliNumber">(7054539)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Bryan Torwalt and Katie Torwalt">
            <span className="constraint-width overflow-ellipsis artist-name">
              Bryan Torwalt and Katie Torwalt
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            3/7/2021 (16)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            4<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="14338166">
            <span className="constraint-width tooltip tooltipstered">
              Grace On Top Of Grace{" "}
              <span className="ccliNumber">(7040862)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Fellowship Church">
            <span className="constraint-width overflow-ellipsis artist-name">
              Fellowship Church
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            2/28/2021 (17)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">3</span>{" "}
            <div className="meter">
              <span style={{ width: "43%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="19325921">
            <span className="constraint-width tooltip tooltipstered">
              The Blessing <span className="ccliNumber">(7147007)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Chris Brown, Cody Carnes, Kari Jobe, and Steven Furtick"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Chris Brown, Cody Carnes, Kari Jobe, and Steven Furtick
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            2/28/2021 (17)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">3</span>{" "}
            <div className="meter">
              <span style={{ width: "43%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="9950289">
            <span className="constraint-width tooltip tooltipstered">
              Doxology <span className="ccliNumber">(56204)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Louis Bourgeois and Thomas Ken">
            <span className="constraint-width overflow-ellipsis artist-name">
              Louis Bourgeois and Thomas Ken
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            2/28/2021 (17)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            5<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="12768608">
            <span className="constraint-width tooltip tooltipstered">
              Open The Eyes Of My Heart{" "}
              <span className="ccliNumber">(2298355)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Paul Baloche">
            <span className="constraint-width overflow-ellipsis artist-name">
              Paul Baloche
            </span>
            <span className="data-label"></span>
          </li>

          <li className="lastUsed">
            2/21/2021 (18)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            4<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="5222325">
            <span className="constraint-width tooltip tooltipstered">
              Praise Him <span className="ccliNumber">(6177362)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Matt Crocker and Nathan Finochio">
            <span className="constraint-width overflow-ellipsis artist-name">
              Matt Crocker and Nathan Finochio
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            2/14/2021 (19)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">3</span>{" "}
            <div className="meter">
              <span style={{ width: "43%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="19033068">
            <span className="constraint-width tooltip tooltipstered">
              God Of Revival <span className="ccliNumber">(7133285)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Brian Johnson and Phil Wickham">
            <span className="constraint-width overflow-ellipsis artist-name">
              Brian Johnson and Phil Wickham
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            2/7/2021 (20)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">2</span>{" "}
            <div className="meter">
              <span style={{ width: "29%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="10647205">
            <span className="constraint-width tooltip tooltipstered">
              None Like You <span className="ccliNumber">(4861096)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Andy Cater">
            <span className="constraint-width overflow-ellipsis artist-name">
              Andy Cater
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            1/31/2021 (21)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="2607759">
            <span className="constraint-width tooltip tooltipstered">
              Jesus Paid It All <span className="ccliNumber">(4689508)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="John Thomas Grape, Elvina M. Hall, and Alex Nifong"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              John Thomas Grape, Elvina M. Hall, and Alex Nifong
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            1/24/2021 (22)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">2</span>{" "}
            <div className="meter">
              <span style={{ width: "29%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="2597714">
            <span className="constraint-width tooltip tooltipstered">
              How He Loves <span className="ccliNumber">(5032549)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="John Mark McMillan">
            <span className="constraint-width overflow-ellipsis artist-name">
              John Mark McMillan
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            1/24/2021 (22)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            6<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="8708411">
            <span className="constraint-width tooltip tooltipstered">
              Jesus Take All Of Me <span className="ccliNumber">(6366049)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Brenton Brown and Charlotte Elliott">
            <span className="constraint-width overflow-ellipsis artist-name">
              Brenton Brown and Charlotte Elliott
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            1/17/2021 (23)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">2</span>{" "}
            <div className="meter">
              <span style={{ width: "29%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="2540441">
            <span className="constraint-width tooltip tooltipstered">
              How Great Thou Art <span className="ccliNumber">(14181)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Stuart Wesley Keene Hine">
            <span className="constraint-width overflow-ellipsis artist-name">
              Stuart Wesley Keene Hine
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            1/17/2021 (23)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">2</span>{" "}
            <div className="meter">
              <span style={{ width: "29%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="3039809">
            <span className="constraint-width tooltip tooltipstered">
              Hark The Herald Angels Sing{" "}
              <span className="ccliNumber">(27738)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Felix Mendelssohn and Charles Wesley">
            <span className="constraint-width overflow-ellipsis artist-name">
              Felix Mendelssohn and Charles Wesley
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            12/20/2020 (27)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="3039801">
            <span className="constraint-width tooltip tooltipstered">
              Angels We Have Heard On High{" "}
              <span className="ccliNumber">(27721)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Edward Shippen Barnes and James Chadwick"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Edward Shippen Barnes and James Chadwick
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            12/20/2020 (27)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="3050506">
            <span className="constraint-width tooltip tooltipstered">
              O Come All Ye Faithful <span className="ccliNumber">(31054)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="C. Frederick Oakeley and John Francis Wade"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              C. Frederick Oakeley and John Francis Wade
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            12/20/2020 (27)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            3<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="3017525">
            <span className="constraint-width tooltip tooltipstered">
              Joy To The World <span className="ccliNumber">(24016)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>

          <li className="artist" title="George Frederic Handel and Isaac Watts">
            <span className="constraint-width overflow-ellipsis artist-name">
              George Frederic Handel and Isaac Watts
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            12/13/2020 (28)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="19897075">
            <span className="constraint-width tooltip tooltipstered">
              O Come O Come Emmanuel{" "}
              <span className="ccliNumber">(7121050)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Lauren Daigle, John Mason Neale, Thomas Helmore, Paul Mabury, and Jason Ingram"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Lauren Daigle, John Mason Neale, Thomas Helmore, Paul Mabury, and
              Jason Ingram
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            12/13/2020 (28)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="14622627">
            <span className="constraint-width tooltip tooltipstered">
              Come Thou Long-Expected Jesus{" "}
              <span className="ccliNumber">(31999)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Rowland Hugh Prichard and Charles Wesley"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Rowland Hugh Prichard and Charles Wesley
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            12/6/2020 (29)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="18900684">
            <span className="constraint-width tooltip tooltipstered">
              Raised With Christ <span className="ccliNumber">(7118133)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Jamie Thomson, Joy Horton, and Tom Read"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Jamie Thomson, Joy Horton, and Tom Read
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            11/22/2020 (31)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            3<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">2</span>{" "}
            <div className="meter">
              <span style={{ width: "29%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="10931991">
            <span className="constraint-width tooltip tooltipstered">
              Great Are You Lord <span className="ccliNumber">(6460220)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Leslie Jordan and David Leonard">
            <span className="constraint-width overflow-ellipsis artist-name">
              Leslie Jordan and David Leonard
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            11/15/2020 (32)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">2</span>{" "}
            <div className="meter">
              <span style={{ width: "29%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="18921302">
            <span className="constraint-width tooltip tooltipstered">
              When I Survey <span className="ccliNumber">(1625809)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Fred C. Mallory and Lowell Mason">
            <span className="constraint-width overflow-ellipsis artist-name">
              Fred C. Mallory and Lowell Mason
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            11/15/2020 (32)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">2</span>{" "}
            <div className="meter">
              <span style={{ width: "29%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="17459745">
            <span className="constraint-width tooltip tooltipstered">
              Build My Life <span className="ccliNumber">(7070345)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Brett Younker, Karl Martin, Kirby Kable, Pat Barrett, and Matt Redman"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Brett Younker, Karl Martin, Kirby Kable, Pat Barrett, and Matt
              Redman
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            11/8/2020 (33)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">5</span>{" "}
            <div className="meter">
              <span style={{ width: "72%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="18610370">
            <span className="constraint-width tooltip tooltipstered">
              Christ Be Magnified <span className="ccliNumber">(7139866)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Cody Carnes, Cory Asbury, and Ethan Hulse"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Cody Carnes, Cory Asbury, and Ethan Hulse
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            11/1/2020 (34)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">4</span>{" "}
            <div className="meter">
              <span style={{ width: "58%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="12974948">
            <span className="constraint-width tooltip tooltipstered">
              Just As I Am <span className="ccliNumber">(5717981)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="William Batchelder Bradbury, Daniel Doss, and Charlotte Elliott"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              William Batchelder Bradbury, Daniel Doss, and Charlotte Elliott
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            10/18/2020 (36)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            3<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="10617141">
            <span className="constraint-width tooltip tooltipstered">
              Love Shines <span className="ccliNumber">(6201685)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Matt Carter, Philip Edsel, and Aaron Ivey"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Matt Carter, Philip Edsel, and Aaron Ivey
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            10/4/2020 (38)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="2524164">
            <span className="constraint-width tooltip tooltipstered">
              From The Inside Out <span className="ccliNumber">(4705176)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>

          <li className="artist" title="Joel Houston">
            <span className="constraint-width overflow-ellipsis artist-name">
              Joel Houston
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            9/13/2020 (41)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            3<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="7332059">
            <span className="constraint-width tooltip tooltipstered">
              Christ Is Enough <span className="ccliNumber">(6514035)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Reuben Morgan and Jonas Myrin">
            <span className="constraint-width overflow-ellipsis artist-name">
              Reuben Morgan and Jonas Myrin
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            9/6/2020 (42)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            3<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">3</span>{" "}
            <div className="meter">
              <span style={{ width: "43%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="18578550">
            <span className="constraint-width tooltip tooltipstered">
              Freedom <span className="ccliNumber">(7078151)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Brett Younker, Kristian Stanfill, Hank Bentley, Jordan Frye, and Mia Fieldes"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Brett Younker, Kristian Stanfill, Hank Bentley, Jordan Frye, and
              Mia Fieldes
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            5/3/2020 (60)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="7740695">
            <span className="constraint-width tooltip tooltipstered">
              Forever <span className="ccliNumber">(7001228)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Christa Black Gifford, Kari Jobe, Brian Johnson, Jenn Johnson, Joel Taylor, and Gabriel Wilson"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Christa Black Gifford, Kari Jobe, Brian Johnson, Jenn Johnson,
              Joel Taylor, and Gabriel Wilson
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            4/12/2020 (63)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            4<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="2609094">
            <span className="constraint-width tooltip tooltipstered">
              Come Thou Fount Of Every Blessing{" "}
              <span className="ccliNumber">(1442738)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Robert Robinson">
            <span className="constraint-width overflow-ellipsis artist-name">
              Robert Robinson
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            2/16/2020 (71)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            3<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="12008987">
            <span className="constraint-width tooltip tooltipstered">
              Your Love Awakens Me <span className="ccliNumber">(7054720)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Chris Quilala and Phil Wickham">
            <span className="constraint-width overflow-ellipsis artist-name">
              Chris Quilala and Phil Wickham
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            2/9/2020 (72)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            2<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="7795741">
            <span className="constraint-width tooltip tooltipstered">
              Made Alive <span className="ccliNumber">(6534390)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li className="artist" title="Zach Bolen and Brian Eichelberger">
            <span className="constraint-width overflow-ellipsis artist-name">
              Zach Bolen and Brian Eichelberger
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            2/2/2020 (73)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            1<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
        <ul className="data-row">
          <li className="title" data-songid="10422489">
            <span className="constraint-width tooltip tooltipstered">
              No Longer Slaves <span className="ccliNumber">(7030123)</span>
            </span>
            <span className="tooltipster-icon"></span>
            <span className="tooltipster-icon mobile-only manual-tooltip"></span>
            <span className="song-ctrl ctrl1"></span>
            <span className="song-ctrl ctrl2"></span>
            <span className="data-label"></span>
          </li>
          <li
            className="artist"
            title="Jonathan David Helser and Melissa Helser"
          >
            <span className="constraint-width overflow-ellipsis artist-name">
              Jonathan David Helser and Melissa Helser
            </span>
            <span className="data-label"></span>
          </li>
          <li className="lastUsed">
            1/12/2020 (76)<span className="data-label"></span>
          </li>
          <li className="preferredSlot">
            4<span className="data-label"></span>
          </li>
          <li className="useCount" data-sincedate="1/1/2020">
            <span className="label">1</span>{" "}
            <div className="meter">
              <span style={{ width: "15%" }}></span>
            </div>
            <span
              className="data-label"
              data-sincedate="Times Played (since 1/1/2020)"
            ></span>
          </li>
          <li className="voting">
            &nbsp;<span className="data-label"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
