import { Box, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  alpha,
  createStyles,
  makeStyles,
  Theme,
  useTheme,
  withStyles,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import DarkIcon from "@material-ui/icons/Brightness4";
import LightIcon from "@material-ui/icons/Brightness7";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import useDarkMode from "@UI/hooks/useDarkMode";
import Logo from "@UI/illustrator/Logo";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: theme.palette.background.paper,
      boxShadow: `0 0 8px rgb(0 0 0 / 17%)`,
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7),
      },
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
    // listItem: {
    //   padding: 3,
    //   paddingLeft: 10,
    //   fontFamily: "Inter, Robota",
    //   fontWeight: 600,
    //   "&$selected": {
    //     background: "red", // alpha(theme.palette.primary.light, 0.5),
    //     borderRight: `3px solid ${theme.palette.primary.main}`,
    //   },
    //   "&:hover": {
    //     background: "red", // alpha(theme.palette.primary.light, 0.5),
    //     borderRight: `3px solid ${theme.palette.primary.main}`,
    //   },
    // },
  })
);
const CListItem = withStyles((theme) => ({
  root: {
    padding: 3,
    paddingLeft: 10,
    fontFamily: "Inter, Robota",
    fontWeight: 600,
    "&$selected": {
      borderRight: `3px solid ${theme.palette.primary.main}`,
    },
  },
  selected: {},
}))(ListItem);
export interface AppList {
  menu: [
    {
      title: string;
      path: string;
      image: JSX.Element;
      icon: JSX.Element;
    }
  ];
  children: any;
}
export default function MiniDrawer(props: AppList) {
  const classes = useStyles();
  const theme = useTheme();
  // console.log(theme);
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const MyAppBar = () => {
    const { darkMode, setDarkMode } = useDarkMode();
    return (
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Grid container display="flex">
          <Toolbar style={{ flex: 1 }}>
            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
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
      </AppBar>
    );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MyAppBar />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Box style={{ flex: 1, display: "flex" }}>
            <Logo />
            <Typography variant="h6">Fuse</Typography>
          </Box>
          <IconButton onClick={handleDrawerClose} color="primary">
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider style={{ background: "#0000001f" }} />
        <List>
          {props.menu.map((x, i) => (
            <CListItem
              button
              key={i}
              selected={router.pathname.includes(x.path)}
            >
              <ListItemIcon className={classes.secondaryText}>
                {x.icon}
              </ListItemIcon>
              <ListItemText primary={x.title} />
            </CListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
