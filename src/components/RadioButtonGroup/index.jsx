/* eslint-disable react/jsx-key */
import React, {
  useMemo,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import styled, { css } from "styled-components";
import { useSpring, config } from "react-spring";

const RadioGroupContext = React.createContext(null);

const StyledRadioGroup = styled.div`
  background-color: #faf9fc;
  border-radius: 10px;
  display: inline-block;
  text-align: center;
  position: relative;
  overflow: visible;
  white-space: nowrap;
`;

const WhiteBackground = styled.div`
  position: absolute;
  top: -1px;
  bottom: -1px;
  /* left: ${(props) => props.left || 0}px;
    width: ${(props) => props.width || 0}px; */
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 2px 0px 0px rgb(229, 231, 235);
  /* transition: left 300ms; */
`;

const RadioLabel = styled.label`
  cursor: pointer;
  min-width: 60px;
  color: #b4b4b4;
  padding: 8px 6px;
  display: inline-block;
  position: relative;
  border-radius: 6px;
  transition: color 300ms;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1rem;
  ${(props) =>
    !props.selected &&
    css`
      :first-child::before {
        content: none;
      }
      :not(:nth-child(2)):not(:hover)::before {
        content: "";
        position: absolute;
        left: 0;
        top: 13px;
        //bottom: 13px;
        width: 1px;
        background-color: #d8dbe1;
      }
    `}
  :hover {
    /* background-color: white; */
    color: #444444;
  }

  &&&:hover + & {
  }

  ${(props) =>
    props.selected
      ? css`
          background-color: white;
          color: #444444;
          ::before {
            background-color: transparent;
          }
          &&& + & {
            ::before {
              background-color: transparent;
            }
          }
        `
      : ""}
`;

const RadioInput = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;

const RadioButton = ({ children, value }) => {
  const {
    name,
    value: selectedValue,
    onChange,
    onMouseOver,
  } = useContext(RadioGroupContext);
  return (
    <RadioLabel
      selected={value && selectedValue === value}
      onMouseOver={onMouseOver}
    >
      <RadioInput
        name={name}
        value={value}
        checked={value && value === selectedValue}
        onChange={onChange}
        type="radio"
      />
      {children}
    </RadioLabel>
  );
};

const RadioGroup = ({ name, value, onChange, children, options }) => {
  const [active, setActive] = useState();
  const [current, setCurrent] = useState();
  const groupRef = useRef();
  const onMouseOut = useCallback(() => {
    if (active) {
      setCurrent(active);
    } else {
      // setCurrent((cur) => ({ left: cur.left }));
      setCurrent(null);
    }
  }, [active, setCurrent]);
  const animations = useSpring({
    left: current?.left || 0,
    width: current?.width || 0,
    config: { ...config.stiff },
  });
  const onMouseOver = useCallback(
    (e) => {
      const leftRect = e.target.getBoundingClientRect();
      const targetLeft = leftRect.left;
      const containerLeft = groupRef.current.getBoundingClientRect().left;
      setCurrent({ left: targetLeft - containerLeft, width: leftRect.width });
    },
    [groupRef]
  );
  const wrappedOnChange = useCallback(
    (e) => {
      const rect = e.target.parentNode.getBoundingClientRect();
      const containerLeft = groupRef.current.getBoundingClientRect().left;
      setActive({ left: rect.left - containerLeft, width: rect.width });
      setCurrent({ left: rect.left - containerLeft, width: rect.width });
      e.persist();
      onChange(e);
    },
    [onChange]
  );
  const values = useMemo(
    () => ({ name, value, onChange: wrappedOnChange, onMouseOver }),
    [name, value, wrappedOnChange, onMouseOver]
  );
  return (
    <StyledRadioGroup ref={groupRef} onMouseOut={onMouseOut}>
      <WhiteBackground {...current} style={animations} />
      <RadioGroupContext.Provider value={values}>
        {options.map(({ label, value }) => (
          <RadioButton value={value}>{label}</RadioButton>
        ))}
      </RadioGroupContext.Provider>
    </StyledRadioGroup>
  );
};

export default function RadioButtonGroup(props) {
  const [value, setValue] = useState("events");

  const handleChange = (value) => {
    props.setCurrentPage(1);
    if (value === "another") {
      props.setAllOrFiltered(0);
      props.setFilter("0");
      props.setSelectedFilter("0", 1);
    } else if (value === "done") {
      props.setAllOrFiltered(0);
      props.setFilter("1");
      props.setSelectedFilter("1", 1);
    } else {
      props.setAllOrFiltered(1);
      props.setFilter("");
      props.setSelectedFilter("", 1);
    }

    setValue(value);
  };

  return (
    <div
      style={{
        padding: "4px",
        backgroundColor: "#FAF9FC",
        borderRadius: "8px",
      }}
    >
      <RadioGroup
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        name="duration"
        options={[
          { label: "الكل", value: "events" },
          { label: "النشطة", value: "another" },
          { label: "تم التوصيل", value: "done" },
        ]}
      ></RadioGroup>
    </div>
  );
}
