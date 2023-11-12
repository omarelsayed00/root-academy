import { Item } from "../styles";

const Option = ({ handle, value, path, bgColor, optColor }) => {
  return (
    <Item optColor={optColor} bgColor={bgColor} onClick={() => handle(path)}>
      <span>{value}</span>
    </Item>
  );
};

export default Option;
