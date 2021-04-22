import * as React from "react";

import Appbar from "@UI/components/landingPage/Appbar";
import LandingHero from "@UI/components/landingPage/LandingHero";
import LandingFeatures from "@UI/components/landingPage/LandingFeatures";
import { Box, Container } from "@material-ui/core";
export interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <>
      <Appbar title='Fuse'/>
      <Box mt={10}>
        <Container>
          <LandingHero />
        </Container>
        <LandingFeatures/>
      </Box>
    </>
  );
};

export default LandingPage;
