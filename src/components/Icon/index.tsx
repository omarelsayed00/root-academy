import { IconWrapper } from "./styles";

type IconType = {
  children: JSX.Element;
  strokeColor?: string;
  fill?: string;
  strokeWidth: number;
  onClick?: () => void;
};

const Icon = ({ children, strokeColor, strokeWidth, fill, onClick }: any) => {
  return (
    <IconWrapper
      strokeColor={strokeColor}
      strokeWidth={strokeWidth}
      fill={fill}
      onClick={onClick}
    >
      {children}
    </IconWrapper>
  );
};

export default Icon;
