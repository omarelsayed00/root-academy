/* eslint-disable @next/next/no-img-element */
import { Backdrop } from "@mui/material";
import React, { useEffect, useState } from "react";

const Loading = () => {
  return (
    <Backdrop
      sx={{
        color: "#000",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999, // Increase the zIndex value as needed
      }}
      open={true}
      //onClick={handleCloseLoading}
    >
      <div className="loading"></div>
    </Backdrop>
  );
};

export default Loading;
