import { Box, Divider, Grid, Typography } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import AppCard from "@UI/components/AppCard";
import { appList } from "../routes/index";
import * as React from "react";
export interface MainAppProps {}

export interface MainAppState {}
class MainApp extends React.Component<MainAppProps, MainAppState> {
  state = { todos: [] };
  render() {
    return (
      <Box>
        {/* <SideBar menu={menuList as any}> */}
        <Box p={3} pt={0}>
          <Box pb={1}>
            <Typography variant={"body1"} color="textSecondary">
              <Apps style={{ float: "left" }} color="primary" /> &nbsp; Apps
            </Typography>
          </Box>
          <Divider style={{ background: "#0000001f" }} />
          <br />
          <Grid container spacing={3}>
            {appList.map((x) => (
              <AppCard {...x} />
            ))}
          </Grid>
        </Box>
        {/* </SideBar> */}
      </Box>
    );
  }
}

export default MainApp;
