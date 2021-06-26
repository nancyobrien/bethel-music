import React from "react";
import styled from "@emotion/styled/macro";

import * as iconPaths from "./icons.json"; // the file exported from IcoMoon

export function getIconNames() {
  return iconPaths.icons.map((i) =>
    i.properties.name.replace("icon", "").toLowerCase()
  );
}

function getIcon(iconName) {
  const iconInfo =
    iconPaths.icons.find(
      (i) => i.properties.name.toLowerCase() === iconName.toLowerCase()
    ) ||
    iconPaths.icons.find(
      (i) => i.properties.name.toLowerCase() === "icon" + iconName.toLowerCase()
    ) ||
    iconPaths.icons.find(
      (i) =>
        i.properties.aliases &&
        i.properties.aliases.indexOf(iconName.toLowerCase()) > -1
    );
  const icon = iconInfo && iconInfo.icon;

  let props = {};
  let iconElement = null;
  if (icon) {
    if (icon.paths) {
      iconElement = <path d={icon.paths.join(" ")} />;
    } else if (icon.polygon) {
      iconElement = <polygon points={icon.polygon}></polygon>;
    }

    props = { ...iconInfo.properties };
    delete props.prevSize;
    delete props.name;
  }

  return (
    <g className={iconName} {...props}>
      {iconElement}
    </g>
  );
}

export function isValidIcon(iconName) {
  return getIconNames().indexOf(iconName.toString().trim()) > -1;
}

export function Icon({ icon, className, color, iconSize = 24, ...props }) {
  return React.isValidElement(icon) ? (
    <span className="custom-icon">
      {React.cloneElement(icon, {
        style: {
          fontSize: iconSize ? `${iconSize}px` : "1em",
          width: "1em",
          height: "1em",
          minWidth: "1em",
          minHeight: "1em",
          color: color || "currentColor",
        },
        ...props,
      })}
    </span>
  ) : isValidIcon(icon) ? (
    <IconSVG
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 1024 1024"
      className={`custom-icon custom-icon-${icon} ${className}`}
      style={{ color }}
      {...props}
    >
      {getIcon(icon.toString().trim())}
    </IconSVG>
  ) : (
    <> {icon}</>
  );
}

export default Icon;

export function AllIcons({ color, className }) {
  const iconNames = getIconNames();
  return (
    <IconList>
      {iconNames
        .sort((a, b) => (a < b ? -1 : b < a ? 1 : 0))
        .map((i, idx) => {
          return (
            <IconDisplay
              key={idx}
              onClick={() => {
                navigator.clipboard.writeText(i);
              }}
            >
              <Icon color={color} className={className} icon={i} />
              <label>{i}</label>
            </IconDisplay>
          );
        })}
    </IconList>
  );
}

////////////////////////////////////////////////////////////////
/* export function LoadingSpinner({ opacity = 1, color, ...props }) {
  return <Loading icon="spinner" opacity={opacity} color={color} {...props} />;
} */
////////////////////////////////////////////////////////////////

const IconSVG = styled.svg`
  width: 1em;
  height: 1em;
  position: relative;
  color: ${(p) => (p.color ? p.color : "currentColor")};
  path {
    fill: currentColor;
  }
`;

const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconDisplay = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 0.4rem;
  margin: 0.5rem;
  padding: 1rem;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.4rem;
  cursor: pointer;
  transition: background 250ms linear;
  transition-delay: 0.15s;

  label {
    margin-top: 0.5rem;
    word-break: break-all;
    font-size: 1.4rem;
    cursor: pointer;
  }

  &:active {
    background: rgba(255, 255, 255, .25);
    transition-delay: 0s;
    transition: background 20ms linear;
  }
`;

/* const Loading = styled(Icon)`
  opacity: ${({ opacity }) => opacity || 0.5};
  animation: ${spinAnimation} 1s linear infinite;
  font-size: 1rem;
`;
 */