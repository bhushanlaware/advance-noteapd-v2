import { Slide, Tooltip, useScrollTrigger } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DarkIcon from "@material-ui/icons/Brightness4";
import LightIcon from "@material-ui/icons/Brightness7";
import React from "react";
import Logo from '../../svgs/Logo';
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
    color: theme.palette.type === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main,
  },
  AppBar: {
    background: theme.palette.background.paper,
    boxShadow: `0 0 8px rgb(0 0 0 / 17%)`
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
export default function ButtonAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  // console.log(theme)
  const [openInfo, setOpenInfo] = React.useState(false);

  const handleClickOpen = () => {
    setOpenInfo(true);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll>
      <AppBar position="fixed" className={classes.AppBar}>
          <Toolbar>
            <span style={{ transform: 'rotate(330deg)' }}>
              <Logo></Logo>
            </span>
            <Typography variant='h6' className={classes.title}>
              {props.title}
            </Typography>
            <Tooltip title="Change Theme">
              <IconButton color="inherit" onClick={props.changeTheme} className={classes.icon}>
                {!props.isDark ? <DarkIcon></DarkIcon> : <LightIcon></LightIcon>}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
