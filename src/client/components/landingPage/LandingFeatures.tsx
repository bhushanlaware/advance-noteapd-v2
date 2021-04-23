import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Code, GroupAdd, VpnKey, WifiOff } from "@material-ui/icons";
import { alpha } from "@material-ui/core/styles";
import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import SectionInfo from "./SectionInfo";
export interface LandingFeaturesProps {}

export interface CardFeatureProps {
  title: string;
  children: string;
  icon: any;
}
const useStyles = makeStyles((theme) => ({
  cardIcons: {
    background: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
    margin: "0 auto",
    height: 60,
    width: 60,
  },
  cardTitle: {
    padding: 2,
  },
  cardSubtitle: {
    padding: 2,
    color: theme.palette.text.secondary,
  },
}));

const CardFeature: React.FC<CardFeatureProps> = ({ title, children, icon }) => {
  const classes = useStyles();
  return (
    <Grid item md={4} sm={6} xs={12}>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <Card elevation={0}>
          <CardContent style={{ textAlign: "center", paddingTop: 25 }}>
            <Avatar alt={title} className={classes.cardIcons}>
              {icon}
            </Avatar>
            <Box p={1}>
              <Typography variant="h5" className={classes.cardTitle}>
                {title}
              </Typography>
              <Typography variant="subtitle1" className={classes.cardSubtitle}>
                {children}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </ScrollAnimation>
    </Grid>
  );
};

const LandingFeatures: React.FC<LandingFeaturesProps> = (props) => {
  return (
    <Paper elevation={0}>
      {/* <SectionInfo title="GREAT FEATURES" description="The features that makes the difference."></SectionInfo> */}
      <Container>
        <Grid container justifyContent="center">
          <CardFeature title="Work Offline" icon={<WifiOff />}>
            Use application without internet. All information will be stored
            offline and will get sync whenver you get online.
          </CardFeature>
          <CardFeature title="Built for Developers" icon={<Code />}>
            Built in tools like File Comparer, JSON viewer, image compressor to
            make life easy of developers.
          </CardFeature>
          <CardFeature title="Collborate with Team" icon={<GroupAdd />}>
            Sycn up with team on same task with the help of shared Todo's,
            Sticky Notes, Workflows and Notes.
          </CardFeature>
          <CardFeature title="Encrypted Everything" icon={<VpnKey />}>
            Privacy is our priority, Everything on database will be encrypted by
            default. Your sensetive information will be safe in our hand.
          </CardFeature>
          <CardFeature title="Free to use" icon={<VpnKey />}>
            We provide free tier as well, no card details required. so sign up
            and start. You can upgrade anytime to get the best experience.
          </CardFeature>
        </Grid>
      </Container>
    </Paper>
  );
};

export default LandingFeatures;
