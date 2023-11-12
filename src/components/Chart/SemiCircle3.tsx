import React from "react";
import { makeStyles } from "tss-react/mui";
// import { styled } from "@mui/material/styles";
// import LinearProgress, {
//   linearProgressClasses
// } from "@mui/material/LinearProgress";

const useStyles = makeStyles<{ height: number }>()((theme, { height }) => ({
  root: {
    position: "relative",
    // margin: theme.spacing(1),
    float: "left",
    textAlign: "center",
    height: height + "px",
  },
  inner: {
    /* Wraps the rotating .bar */
    position: "relative",
    overflow: "hidden" /* Comment this line to understand the trick */,
    width: height * 2 + "px",
    height: height + "px" /* Half circle (overflow) */,
  },

  bar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: height * 2 + "px",
    height: height * 2 + "px" /* full circle! */,
    borderRadius: "50%",
    boxSizing: "border-box",
    border: "22px solid #D9D9D9" /* half gray, */,
    borderBottomColor: "#4BAD60" /* half azure */,
    borderRightColor: "#4BAD60",
  },
}));

function HalfCircleLinearProgress3({
  progress,
  height,
}: {
  progress: number;
  height: number;
}) {
  const { classes } = useStyles({ height });
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div
          className={classes.bar}
          style={{ transform: "rotate(" + (45 + progress * 1.8) + "deg)" }}
        ></div>
        {/* <LinearProgress
          classes={classes.bar}
          variant="determinate"
          value={progress}
          /> */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          bottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "22px",
            fontWeight: "400",
            lineHeight: "24px",
            color: "#000000",
          }}
        >
          {" "}
          {progress}%
        </h1>
        <p style={{ fontSize: "14px", color: "#A1A1A1" }}>التقييم العام</p>
      </div>
    </div>
  );
}

export default HalfCircleLinearProgress3;
