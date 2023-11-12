import React from "react";
import { motion } from "framer-motion";

const containerStyle = {
  position: "relative",
  width: "3rem",
  height: "3rem",
  boxSizing: "border-box",
};

const circleStyle = {
  display: "block",
  width: "1.8rem",
  height: "1.8rem",
  border: "0.2rem solid #eeeeee99",
  borderTop: "0.2rem solid #E1E1E1",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: 0,
  left: 0,
  marginTop: "10px",
};

const spinTransition = {
  loop: 100,
  ease: "linear",
  duration: 150000,
};

export default function CircleLoader() {
  return (
    <div style={containerStyle}>
      <motion.span
        style={circleStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}
