import { useState } from "react";
import { useRouter } from "next/router";

import Option from "./Option";
import { Hidden, Select, Value, Dropdown, List } from "./styles";

const SelectDropdown = ({ data, settings }) => {
  const router = useRouter();
  const [choice, setChoice] = useState({
    isActive: false,
    value: "الإدارة العامة",
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

  const changeState = (path) => {
    router.push(path);
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
      <Value color={textColor} arrow={arrowColor} onClick={() => showSelect()}>
        الإدارة العامة
      </Value>
      <Dropdown bgColor={bgColor} isActive={isActive}>
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
                  value={item.name}
                  path={item.path}
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
