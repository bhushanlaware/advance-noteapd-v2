import * as React from "react";
import {
  Paper,
  Container,
  Box,
  Grid,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import SectionInfo from "./SectionInfo";

export interface GetStartedProps {}

const useStyle = makeStyles((theme) => ({
  subtitle: {
    color: theme.palette.text.secondary,
    fontStyle: "Inter",
  },
}));
const GetStarted: React.SFC<GetStartedProps> = (props) => {
  const classes = useStyle();
  return (
    <Paper elevation={0}>
      <Container>
        <Box p={2}>
          <SectionInfo
            title="GET STARTED"
            description="Get started with the Fuse today."
            subtitle=" Improve your and team productive with beautiful, fast, intuitive tools from today."
          ></SectionInfo>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box pb={6}>
              <Button size='large' variant="contained">Start using now ➜</Button>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
};

export default GetStarted;
