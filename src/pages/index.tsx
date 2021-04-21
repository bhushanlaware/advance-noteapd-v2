import { AppBar, Box, Container, Grid, Typography } from "@material-ui/core";
import * as React from "react";
export interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <>
      <AppBar></AppBar>
      <Container>
        <Box p={2}>
          <Grid container>
            <Grid item>
              <Typography variant="h3">Welcome to home page!</Typography>
            </Grid>
            <Grid item>
              <img src="" alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default LandingPage;
