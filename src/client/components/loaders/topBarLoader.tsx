import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 12000,
    left: 0,
  },
});

export default function TopBarLoader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LinearProgress variant="indeterminate"/>
    </div>
  );
}
