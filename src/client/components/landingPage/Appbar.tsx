import { Slide, useScrollTrigger } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeController } from "./../../themes";
import React from "react";
import Logo from "../../svgs/Logo";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
  logoimg: {
    // backgroundColor: theme.palette.background.default,
    // borderRadius:'1'
  },
  icon: {
    color:
      theme.palette.mode === "dark"
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
  },
  AppBar: {
    background: theme.palette.background.paper,
    boxShadow: `0 0 8px rgb(0 0 0 / 17%)`,
  },
}));
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
export interface AppbarProps {
  title?: string;
}

const Appbar: React.FC<AppbarProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HideOnScroll>
        <AppBar position="fixed" className={classes.AppBar}>
          <Toolbar>
              <Logo/>
            <Typography variant="h6" className={classes.title}>
              {props.title}
            </Typography>
            <ThemeController/>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default Appbar;
