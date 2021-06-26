import React from "react";
import styled from "@emotion/styled/macro";
import ReactHintFactory from "react-hint";

import "react-hint/css/index.css";

const ReactHint = ReactHintFactory(React);

export const HINT_TYPES = {
  DEVICE: "device",
};

export default function ToolTips() {
  return (
    <ReactHint
      persist
      autoPosition
      events
      delay={{
        show: 100,
        hide: 0,
      }}
      onRenderContent={(target, content) => {
        const type = target?.dataset?.type;
        const data =
          (target?.dataset?.props && JSON.parse(target.dataset.props)) || {};
        switch (type) {
          case HINT_TYPES.DEVICE:
            return data?.meta && <Default>{target?.dataset?.rh}</Default>;
          default:
            return <Default>{target?.dataset?.rh}</Default>;
        }
      }}
    />
  );
}

const Default = styled.div`
  color: ${(props) => props.theme.text};
  border-radius: 3px;
  font-size: 0.8em;
  line-height: 1.5;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.primaryLight};
  border: 1px solid ${(props) => props.theme.primaryLight};
  white-space: pre-wrap;
  max-height: 200px;
  overflow-y: auto;
`;
