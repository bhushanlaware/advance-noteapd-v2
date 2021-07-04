import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import * as React from "react";
import FixedDrawer from "./components/FixedDrawer";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
export interface DynamicDrawerProps {
  menu: any;
  children: any;
}
const DynamicDrawer: React.FC<DynamicDrawerProps> = (props) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  // console.log(isDesktop);
  return isDesktop ? (
    <FixedDrawer {...props} />
  ) : (
    <ResponsiveDrawer {...props} />
  );
};

export default DynamicDrawer;
