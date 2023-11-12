import React from "react";
import { makeStyles } from "tss-react/mui";
// import { styled } from "@mui/material/styles";
// import LinearProgress, {
//   linearProgressClasses
// } from "@mui/material/LinearProgress";

const useStyles = makeStyles<{ height: number; progress: number }>()(
  (theme, { height, progress }) => ({
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
      border: "20px solid #D9D9D9" /* half gray, */,
      borderBottomColor:
        progress > 80
          ? "#1B914B"
          : progress > 50
          ? "#CAA700"
          : "#D03838" /* half azure */,
      borderRightColor:
        progress > 80 ? "#1B914B" : progress > 50 ? "#CAA700" : "#D03838",
    },
  })
);

function HalfCircleLinearProgress2({
  progress,
  height,
}: {
  progress: number;
  height: number;
}) {
  const { classes } = useStyles({ height, progress });
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
          bottom: "38px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "600",
            color: "#000000",
          }}
        >
          {progress}
        </h1>
      </div>
    </div>
  );
}

export default HalfCircleLinearProgress2;
