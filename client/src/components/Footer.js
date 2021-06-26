import React from "react";
import styled from "@emotion/styled/macro";
import Colors from "../styles/colors";

export default function Footer() {
  return (
    <FooterContainer class="l-footer">
      <FooterComponent class="footer">
        <Feedback class="footer_feedback">
          <a href="#" id="show-feedback">
            <span class="icon-chat-alt-stroke"></span> Send feedback
          </a>
        </Feedback>
        <LastUpdatedMsg class="footer_last-updated">
          Last updated on: <span id="lastUpdatedDate"></span>
        </LastUpdatedMsg>
      </FooterComponent>
    </FooterContainer>
  );
}

////////////////////////////////////////////////////////////

const FooterContainer = styled.div`
  width: 100%;
  flex: 0;
`;

const FooterComponent = styled.div`
  color: #919191;
  padding: 1em;
  font-size: 0.85rem;
  border-top: 1px solid ${Colors.subtle};
`;

const Feedback = styled.div`
  font-style: italic;
  text-align: center;
  font-size: 1em;
  margin-bottom: 0.5em;

  a {
    color: ${Colors.primary};
    text-decoration: none;
    padding: 0.5em 1em;
    border: thin dotted ${Colors.primary};
    &:hover {
      background-color: ${Colors.subtle};
    }
  }

  @media (min-width: 800px) {
    text-align: left;
    margin: 0.75em 0;
  }
`;

const LastUpdatedMsg = styled.div`
  text-align: center;
  font-style: italic;
  display: none;

  @media (min-width: 800px) {
    margin: 2.75em 1em;
  }
`;
