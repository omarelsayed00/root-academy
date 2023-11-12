import { useState, useEffect, useRef } from "react";

import Option from "./Option";
import { Hidden, Select, Value, Dropdown, List } from "./styles";

const SelectDropdown = ({ data, settings }) => {
  const [choice, setChoice] = useState({
    isActive: false,
    value: "اختر...",
  });
  const { value, isActive } = choice;

  const theme = {
    arrowColor: "#000",
    bgColor: "#242424",
    borderColor: "#fff",
    height: "210px",
    inputColor: "#fff",
    optColor: "#fff",
    scrollColor: "gray",
    scrollTrack: "#f5f5f5",
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
    const excludedDiv = document.querySelector(".selectInput3");
    if (excludedDiv && excludedDiv.contains(event.target)) {
      return; // Click was inside the excluded div, do nothing
    }

    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setChoice({
        ...choice,
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
      value,
      isActive: false,
    });
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
        className="selectInput3"
        color={textColor}
        arrow={arrowColor}
        onClick={() => showSelect()}
      >
        {value}
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
                  value={`Option ${i + 1}`}
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
