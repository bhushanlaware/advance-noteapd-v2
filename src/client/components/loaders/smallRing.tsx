import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "fixed",
      bottom: 0,
      right: 0,
      zIndex: 11111,
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

export default function SmallRing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CircularProgress /> */}
      <CircularProgress color="secondary" />
    </div>
  );
}
