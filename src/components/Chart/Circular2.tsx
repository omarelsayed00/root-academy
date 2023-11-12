// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Circular2 = (props: any) => {
  return (
    <div>
      <CircularProgressbar
        strokeWidth={15}
        value={props.percentage}
        styles={buildStyles({
          strokeLinecap: "butt",
          textColor: "black",
          pathColor: "#4BAD60",
          trailColor: "#D9D9D9",
        })}
      />
    </div>
  );
};

export default Circular2;
