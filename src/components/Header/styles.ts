import { style } from "@mui/system";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 100px;
  padding: 0px 90px;
  display: flex;

  align-items: center;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: var(--primary-color);
    padding-right: 3%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const MainImage = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 7%;
  width: 70%;
`;

export const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "0.6rem",
}))`
  color: black;
  font-size: 0.8rem;
  font-weight: normal;
  border-radius: 12px;
  background-color: #f8f8f8;
  border-width: 0;
  width: 260px;
  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #8b8b8b;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #8b8b8b;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #8b8b8b;
  }
`;

export const SearchButton = styled.button`
  line-height: 1;
  overflow: hidden;
  background-color: transparent;
  border: none;
  outline: none;
  color: #8b8b8b;
  cursor: pointer;
  margin-right: -45px;
  opacity: 0.9;

  /*  margin-bottom: 8px; */
`;

export const LeftCorner = styled.div`
  //align-items: center;
  display: flex;
`;

export const Signout = styled.div`
  margin-top: 5px;
  a {
    cursor: pointer;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
  margin-left: 650px;

  img {
    /* padding-left: 16px;
    padding-right: 16px; */
  }

  input {
    padding: 8px;
    width: 300px;
    color: #5e5e5e;
    border: 0;
    font-size: 16px;
    border-radius: 5px;
    //border: 1px solid #b9bfd2;
    transition: all 0.2s ease-out;

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }

    &:focus {
      // outline: .5px solid #aaacb6;
      outline: none;
    }
    ::placeholder {
      font-size: 12px;
      color: #aaacb6;
      padding-bottom: 8px;
    }
  }
`;
