import {
  alpha,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import TodoIcon from "@UI/illustrator/Todo";
import CodeIcon from "@UI/illustrator/Code";
import ImageCompressIcon from "@UI/illustrator/ImageCompress";
import NotebookIcon from "@UI/illustrator/Notebook";
import FileComparerIcon from "@UI/illustrator/FileComparer";
import * as React from "react";
import SectionInfo from "./SectionInfo";
import ScrollAnimation from "react-animate-on-scroll";
import Tilt from "react-parallax-tilt";

export interface LandingAppsProps {}
export interface AppCardProps {
  logo: any;
  title: string;
  description: string;
}

const useStyle = makeStyles((theme) => ({
  container: {
    position: "relative !important" as any,
    background: theme.palette.background.default,

    "&::before": {
      content: "' '",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      opacity: "0.5",
      height: "100%",
      background: `linear-gradient(#f00, #f0a)`,
      // background: `linear-gradient(#3aa0b4, #53fc45)`,
      // background: `linear-gradient(#0bd6cb, #fc45ea) !important`,
      clipPath: "circle(27% at 94% 66%)",
      zIndex: 0,
    },
    "&::after": {
      content: "' '",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `linear-gradient(#0bd6cb, #fc45ea) !important`,
      // background: `linear-gradient(#2196f3, #e91e63) !important`,
      opacity: "0.5",
      clipPath: "circle(13% at 29% 51%)",
      zIndex: 0,
    },
  },
  appLogo: {
    width: 100,
    height: 100,
  },
  appCard: {
    // transition: "0.5s",
    // boxShadow: "20px 20px 50px rbga(0 0 0 0.5)",
    // transform: "translateZ(60px)",
    borderRadius: "5px",
    background: alpha(theme.palette.background.paper, 0.5),
    // borderTop:'1px solid rbga(255,255,255,0.5)',
    // borderLeft:'1px solid rbga(255,255,255,0.5)',
    backdropFilter: "blur(5px)",
    // "&:hover": {
    //   transform: "translateY(-7px)",
    // },
  },
  appDescription: {
    color: theme.palette.text.secondary,
    fontStyle: "Inter",
  },
  appCardContent: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const AppCard: React.FC<AppCardProps> = ({ title, description, logo }) => {
  const classes = useStyle();
  return (
    <Grid item xs={12} sm={6} md={2}>
      <ScrollAnimation animateIn="flipInY" duration={1} animateOnce>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          perspective={500}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Card className={classes.appCard}>
            <CardContent className={classes.appCardContent}>
              <Box className={classes.appLogo}>{logo}</Box>
              <Typography variant="h6">{title}</Typography>
              <Typography variant="body1" className={classes.appDescription}>
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button fullWidth variant="outlined">
                Lauch App
              </Button>
            </CardActions>
          </Card>
        </Tilt>
      </ScrollAnimation>
    </Grid>
  );
};
const apps = [
  {
    title: "Todo",
    description: "Create and Share todos.",
    logo: <TodoIcon />,
  },
  {
    title: "JSON Viewer",
    description: "Offline JSON viewer for developers.",
    logo: <CodeIcon />,
  },
  {
    title: "Compressor",
    description: "Compressor image without uploading.",
    logo: <ImageCompressIcon />,
  },
  {
    title: "Notes",
    description: "Create and Share rich text notes.",
    logo: <NotebookIcon />,
  },
  {
    title: "File Comparer",
    description: "Compare files without uploading online.",
    logo: <FileComparerIcon />,
  },
];
const LandingApps: React.FC<LandingAppsProps> = (props) => {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Container style={{ position: "relative", zIndex: 1 }}>
        <Box pb="80px">
          <SectionInfo
            title="APPLICATIONS"
            // subtitle="Best of all in one internet productivity apps are available here for free, with more advanced features."
            description="Be productive with your favorite tools."
          ></SectionInfo>
          <Box>
            <Grid container spacing={2} justifyContent="center">
              {apps.map(({ title, description, logo }) => (
                <AppCard
                  title={title}
                  description={description}
                  logo={logo}
                ></AppCard>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingApps;
