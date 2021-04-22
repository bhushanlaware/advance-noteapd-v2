import LandingPage from "@UI/containers/LandingPage";
import * as React from "react";
export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <LandingPage></LandingPage>
    </>
  );
};

export default HomePage;
