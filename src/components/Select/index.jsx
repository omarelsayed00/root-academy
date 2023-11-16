import { useState, useEffect, useRef } from "react";

import Option from "./Option";
import { Hidden, Select, Value, Dropdown, List } from "./styles";

const SelectDropdown = ({ data, settings, value, setValue }) => {
  const [choice, setChoice] = useState({
    isActive: false,
  });
  const { isActive } = choice;

  const theme = {
    arrowColor: "#000",
    bgColor: "#242424",
    borderColor: "#fff",
    height: "210px",
    inputColor: "#fff",
    optColor: "#fff",
    scrollColor: "gray",
    scrollTrack: "#0a0404",
    textColor: "#000",
    transparent: false,
    ...settings,
  };

  const {
    arrowColor,
    borderColor,
    bgColor,
    height,
    inputColor,
    scrollColor,
    scrollTrack,
    textColor,
    transparent,
  } = theme;

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    const excludedDiv = document.querySelector(".selectInput");
    if (excludedDiv && excludedDiv.contains(event.target)) {
      return; // Click was inside the excluded div, do nothing
    }

    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setChoice({
        isActive: false,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const changeState = (value) => {
    setChoice({
      isActive: false,
    });
    setValue(value);
  };

  const showSelect = () => {
    setChoice({
      ...choice,
      isActive: !choice.isActive,
    });
  };

  return (
    <Select
      borderColor={borderColor}
      inputColor={inputColor}
      transparent={transparent}
    >
      <Hidden
        tabindex="0"
        onFocus={() => showSelect()}
        onBlur={() => showSelect()}
      />
      <Value
        className="selectInput"
        color={textColor}
        arrow={arrowColor}
        onClick={() => showSelect()}
      >
        <span>{value}</span>
      </Value>
      <Dropdown ref={dropdownRef} bgColor={bgColor} isActive={isActive}>
        <List
          height={height}
          scrollColor={scrollColor}
          scrollTrack={scrollTrack}
        >
          {data &&
            data.map((item, i) => {
              return (
                <Option
                  bgColor={bgColor}
                  value={item}
                  current={value}
                  key={i}
                  handle={changeState}
                />
              );
            })}
        </List>
      </Dropdown>
    </Select>
  );
};

export default SelectDropdown;
