import {
  Box,
  Button,
  createMuiTheme,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  ThemeProvider,
  Tooltip,
  Grid,
} from "@material-ui/core";
import DarkIcon from "@material-ui/icons/Brightness4";
import DarkIcon2 from "@material-ui/icons/Brightness5";
import LightIcon from "@material-ui/icons/Brightness7";
import React, {
  Fragment,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ReactChildren } from "react";
import BluePink from "./BluePink";
import CyonYellow from "./CyonYellow";
import GreenYellow from "./GreenYellow";
import PinkPurple from "./PinkPurple";
import PurpleOrange from "./PurpleOrange";
import RedBlue from "./RedBlue";

const colorPalettes = [
  { title: "Green yellow", palette: { ...GreenYellow } },
  { title: "Blue pink", palette: { ...BluePink } },
  { title: "Pink purple", palette: { ...PinkPurple } },
  { title: "Cyon yellow", palette: { ...CyonYellow } },
  { title: "Purple orange", palette: { ...PurpleOrange } },
  { title: "Red blue", palette: { ...RedBlue } },
];
type themesType = "light" | "dark" | "darkblue";
const themeTypes: themesType[] = ["light", "dark", "darkblue"];

const ThemeContext = React.createContext([]);
const ColorPaletteContext = React.createContext([]);

export const useThemeType = () => useContext(ThemeContext);
export const useColorPalette = () => useContext(ColorPaletteContext);
export interface AppThemeProviderProps {
  children: any;
  defaultThemeType?: themesType;
  defaultThemeColor?: string;
}

const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
  defaultThemeType,
  defaultThemeColor,
}) => {
  const [themeType, setThemeType] = useState(defaultThemeType || themeTypes[0]);
  const defualtColorObj =
    (defaultThemeColor &&
      colorPalettes.find((x) => x.title === defaultThemeColor)) ||
    colorPalettes[0];

  const [colorPalette, setColorPalette] = useState(defualtColorObj);

  useEffect(() => {
    const localThemeType = localStorage.getItem("ThemeType");
    const localColorPalette = localStorage.getItem("colorPalette");

    if (localThemeType) {
      setThemeType(JSON.parse(localThemeType));
    } else {
      localStorage.setItem("ThemeType", JSON.stringify(themeType));
    }
    if (localColorPalette) {
      setColorPalette(JSON.parse(localColorPalette));
    } else {
      localStorage.setItem("colorPalette", JSON.stringify(colorPalette));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ThemeType", JSON.stringify(themeType));
  }, [themeType]);

  useEffect(() => {
    localStorage.setItem("colorPalette", JSON.stringify(colorPalette));
  }, [colorPalette]);

  const theme = useMemo(() => {
    const extraColors =
      themeType === "darkblue"
        ? {
            background: {
              paper: "#222b45",
              default: "#1a2138",
            },
            text: {
              primary: "#eeeeef",
              secondary: "#aeb0b4",
            },
          }
        : {};
    return createMuiTheme({
      palette: {
        ...colorPalette.palette,
        mode: themeType === "light" ? "light" : "dark",
        ...extraColors,
      },
    });
  }, [themeType, colorPalette]);

  return (
    <ThemeContext.Provider value={[themeType, setThemeType]}>
      <ColorPaletteContext.Provider value={[colorPalette, setColorPalette]}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorPaletteContext.Provider>
    </ThemeContext.Provider>
  );
};
export const ThemeTogglerButton = () => {
  const [themeType, setThemeType] = useThemeType();
  return (
    <IconButton
      onClick={() => {
        const index = themeTypes.findIndex((x) => x === themeType);
        const nextIndex = (index + 1) % themeTypes.length;
        console.log(nextIndex);
        setThemeType(themeTypes[nextIndex]);
      }}
    >
      <Tooltip title="Change theme">
        {themeType === "dark" ? (
          <DarkIcon color="secondary"></DarkIcon>
        ) : themeType === "darkblue" ? (
          <DarkIcon2 color="secondary"></DarkIcon2>
        ) : (
          <LightIcon color="primary"></LightIcon>
        )}
      </Tooltip>
    </IconButton>
  );
};

export const ThemeColorPalette = ({ type }) => {
  const [colorPalette, setColorPalette] = useColorPalette();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const buttonStyles = (x) => ({
    background: `linear-gradient(90deg, ${x.palette.primary.main}, ${x.palette.secondary.main} )`,
    // background: x.palette.primary.main,
    border: "none",
    margin: "5px",
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      {type === "buttons" ? (
        colorPalettes.map((x) => (
          <Tooltip title={x.title}>
            <Button style={buttonStyles(x)} onClick={() => setColorPalette(x)}>
              {x.title}
            </Button>
          </Tooltip>
        ))
      ) : (
        <Fragment>
          <IconButton style={buttonStyles(colorPalette)} onClick={handleClick}>
            {" "}
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {colorPalettes.map((x) => (
              <MenuItem
                onClick={() => {
                  handleClose();
                  setColorPalette(x);
                }}
                style={{ ...buttonStyles(x), height: "30px", width: "60px" }}
              ></MenuItem>
            ))}
          </Menu>
        </Fragment>
      )}
    </Fragment>
  );
};
export const ThemeController = (props) => {
  return (
    <Box {...props} p={1}>
      <Paper
        elevation={0}
        style={{
          borderRadius: "10px",
          padding: "2px",
        }}
      >
        <Grid
          container
          alignItems="center"
          direction={props.verticle ? "column" : "row"}
        >
          <Grid item>
            <ThemeColorPalette type="" />
          </Grid>
          <Grid item>
            <ThemeTogglerButton />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AppThemeProvider;
