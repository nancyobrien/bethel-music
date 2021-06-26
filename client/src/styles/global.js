import { css } from "@emotion/react";

export const sidebarMinWidth = "3.5rem";
export const sidebarMaxWidth = "14.25rem";
export const StandardTransition = css`
  transition: all 150ms ease-out;
`;

/****** Elad Shechter's RESET *******/
/*** box sizing border-box for all elements ***/

export default css`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    font-size: 16px;
    font-family: "Ubuntu", sans-serif;
    color: black;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  input::-moz-focus-inner {
    border: 0;
    padding: 0;
    margin: 0;
  }

  ul,
  ol,
  dd {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Inter", "Ubuntu", sans-serif;
    font-weight: 500;
  }

  svg {
    fill: currentColor;
  }

  #root > div {
    width: 100%;
  }

  .eshighlight {
    background: rgba(255, 255, 0, 0.5);
  }

  @-moz-keyframes spin {
    0% {
      -moz-transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes movedown {
    from {
      top: -50px;
    }
    to {
      top: 100px;
    }
  }

  @-moz-keyframes movedown {
    from {
      top: -50px;
    }
    to {
      top: 100px;
    }
  }

  @-ms-keyframes movedown {
    from {
      top: -50px;
    }
    to {
      top: 100px;
    }
  }

  @-o-keyframes movedown {
    from {
      top: -50px;
    }
    to {
      top: 100px;
    }
  }

  @keyframes movedown {
    from {
      top: -50px;
    }
    to {
      top: 100px;
    }
  }
`;

export const hide = css`
  display: none;
`;
