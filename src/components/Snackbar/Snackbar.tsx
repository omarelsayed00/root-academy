import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const styles = (theme: any) => ({
  content: {
    minWidth: 100,
  },
});

const SimpleSnackbar = (props: any) => {
  return (
    <div>
      <Snackbar
        open={props.open}
        autoHideDuration={2000}
        onClose={props.handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        style={{ width: "70%" }}
      >
        <Alert onClose={props.handleClose} severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default SimpleSnackbar;
