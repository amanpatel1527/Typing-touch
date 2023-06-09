import React from "react";
import { Snackbar } from "@mui/material";

const MusicPlayerSnackbar = ({isMusicMode, isFocusedMode, onMouseLeave }) => {

  return (
    <Snackbar
    open={isMusicMode}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
  >
  </Snackbar>
  );
};

export default MusicPlayerSnackbar;