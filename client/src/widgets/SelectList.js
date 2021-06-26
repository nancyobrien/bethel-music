import React from "react";
import styled from "@emotion/styled/macro";
import Select from "react-select";

import { Colors } from "styles/colors";

export default function SelectList({
  value,
  onChange = () => {},
  data,
  valueField = "value",
  labelField = "label",
  showBorder = true,
  menuPlacement = "auto",
}) {
  const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      color: Colors.gray.grey1,
      fontSize: "11px",
    }),
    control: (provided, state) => ({
      ...provided,
      color: Colors.gray.grey1,
      background: showBorder ? Colors.black : "transparent",
      fontSize: "11px",
      border: `1px solid ${showBorder ? Colors.gray.grey3 : "transparent"}`,
      borderRadius: state.menuIsOpen ? "3px 3px 0 0" : "3px",
      minHeight: "20px",
      height: "20px",
      boxShadow: state.isFocused
        ? `0 0 0 1px ${Colors.gray.grey1}`
        : provided.boxShadow,
      ":hover": {
        borderColor: Colors.gray.grey2,
      },
      "> div:first-of-type": {
        padding: "2px 0 2px 0",
      },
    }),
    input: (provided) => ({
      ...provided,
      margin: 0,
    }),
    indicatorSeparator: (provided) => ({
      //nothing, don't want this thing
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: Colors.gray.grey2,
      padding: "0 8px",
      marginTop: "-3px",
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 100ms";

      return {
        ...provided,
        padding: "2px 0 2px 8px",
        position: "relative",
        top: "0",
        transform: "none,",
        maxWidth: "unset",
        marginTop: "-1px",
        opacity,
        transition,
        color: Colors.white,
      };
    },
    menu: (provided) => ({
      ...provided,
      color: Colors.gray.grey1,
      background: Colors.black,
      marginTop: "2px",
      border: `1px solid ${Colors.gray.grey3}`,
      padding: 0,
      borderRadius: "0 0 3px 3px",
      zIndex: 999,
    }),
    menuList: (provided) => ({
      ...provided,

      padding: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: `1px solid ${Colors.gray.grey3}`,
      color: Colors.white,
      padding: "4px",
      fontSize: "11px",
      paddingLeft: "8px",
      background: state.isFocused ? Colors.gray.grey5 : "transparent",
      ":last-of-type": {
        borderBottom: "none",
      },
      ":hover": {
        background: state.isFocused ? Colors.gray.grey5 : Colors.gray.grey5,
      },
    }),
  };

  const options = React.useMemo(() => {
    return data.map((d) => ({ label: d[labelField], value: d[valueField] }));
  }, [data, labelField, valueField]);

  return (
    <StyledSelect
      menuPortalTarget={document.body}
      className="selectList"
      menuPlacement={menuPlacement}
      value={options.find((o) => o.value === value) || value}
      styles={customStyles}
      options={options}
      onChange={onChange}
    />
  );
}

///////////////////////////////////////////////////////////////////

const StyledSelect = styled(Select)`
  z-index: 1;
`;
