import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Rocket from "@UI/illustrator/Rocket";
import Team from "@UI/illustrator/Team";
import * as React from "react";
import ReactTypingEffect from "react-typing-effect";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "Inter",
    fontWeight: 700,
  },
  animationText: {
    fontFamily: "Inter",
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  subtitle: {
    color: theme.palette.text.secondary,
  },
}));

export interface LandingHeroProps {}

const LandingHero: React.FC<LandingHeroProps> = () => {
  const classes = useStyles();
  return (
    <>
      <Box p="3" mb={3}>
        <Grid container spacing={0}>
          <Grid
            item
            md={7}
            sm={7}
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h2" className={classes.heading}>
             Boost your productivity.<br/>
            </Typography>
            <Typography variant="h3" className={classes.heading}>
              Create Collaborate
            </Typography>
            <Typography variant="h2" className={classes.animationText}>
              <ReactTypingEffect
                speed={50}
                eraseSpeed={50}
                eraseDelay={2500}
                typingDelay={1000}
                text={[
                  "Todo's ✔.",
                  "Sticky Notes.",
                  "Workflows 🔥.",
                  "Rich Text Notes.",
                  "Notepad.",
                ]}
              />
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              Manage your work, efficiently and collborate it with colleges
              using our best productivity tools.
            </Typography>
            <Grid container spacing={2}>
              <Grid item><Button variant='contained'>Sign up</Button></Grid>
              <Grid item><Button variant='outlined'>Go to App</Button></Grid>
            </Grid>
          </Grid>
          <Grid item md={5} sm={5} xs={12}>
            <Rocket />
            {/* <Team /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  )
};

export default LandingHero;
