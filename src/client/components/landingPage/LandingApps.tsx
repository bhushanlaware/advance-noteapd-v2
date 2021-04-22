import { Container } from '@material-ui/core';
import * as React from 'react';
import SectionInfo from './SectionInfo';
export interface LandingAppsProps {
  
}
 
const LandingApps: React.FC<LandingAppsProps> = (props) => {
  return ( <Container>
    <SectionInfo title="APPLICATIONS" description='Be productive with your faviorite apps.'></SectionInfo>
  </Container> );
}
 
export default LandingApps;