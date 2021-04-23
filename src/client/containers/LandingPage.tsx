import { Box } from "@material-ui/core";
import Appbar from "@UI/components/landingPage/Appbar";
import LandingApps from "@UI/components/landingPage/LandingApps";
import LandingFeatures from "@UI/components/landingPage/LandingFeatures";
import LandingHero from "@UI/components/landingPage/LandingHero";
import * as React from "react";

export interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <>
      <Appbar title="Fuse" />
      <Box mt={10}>
        <LandingHero />
        <LandingApps/>
        <LandingFeatures />
      </Box>
    </>
  );
};

export default LandingPage;
