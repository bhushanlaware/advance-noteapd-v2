import { createStyles, Grid, makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import DarkIcon from "@material-ui/icons/Brightness4";
import LightIcon from "@material-ui/icons/Brightness7";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import * as React from "react";
import useDarkMode from "@UI/hooks/useDarkMode";

export interface AppBarContentProps {
  onMenuIconClick: () => void;
  isOpen?: boolean;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      color: theme.palette.text.primary,
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    primaryText: {
      color: theme.palette.text.primary,
    },
    secondaryText: {
      color: theme.palette.text.secondary,
    },
    icon: {
      height: "60px",
      width: "60px",
      color:
        theme.palette.mode === "dark"
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
    },
  })
);
const AppBarContent: React.FC<AppBarContentProps> = (props) => {
  const classes = useStyles();
  const { darkMode, setDarkMode } = useDarkMode();

  useDarkMode();
  return (
    <Grid container display="flex">
      <Toolbar style={{ flex: 1 }}>
        <IconButton
          color="primary"
          aria-label="open drawer"
          onClick={props.onMenuIconClick}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: props.isOpen,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.primaryText}>
          Dashboard
        </Typography>
      </Toolbar>
      <Tooltip title="Change Theme">
        <IconButton
          color="inherit"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className={classes.icon}
        >
          {darkMode ? (
            <DarkIcon color="secondary"></DarkIcon>
          ) : (
            <LightIcon color="primary"></LightIcon>
          )}
        </IconButton>
      </Tooltip>
    </Grid>
  );
};

export default AppBarContent;
