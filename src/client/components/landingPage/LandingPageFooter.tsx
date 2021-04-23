import {
  Box,
  Container,
  Divider,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import * as React from "react";
export interface FooterProps {}
const useStyles = makeStyles((theme) => ({
  subtitle1: {
    color: theme.palette.text.secondary,
    fontStyle: "Inter",
    textAlign: "center",
  },
  subtitle2: {
    color: theme.palette.text.secondary,
    textAlign: "center",
  },
}));
const Footer: React.FC<FooterProps> = (props) => {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <Divider />
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Box p={3}>
          <Typography variant="subtitle1" className={classes.subtitle1}>
            © Fuse. {new Date().getFullYear()}. All rights reserved
          </Typography>
          <Typography variant="subtitle2" className={classes.subtitle2}>
            When you visit or interact with our sites, services or tools, we or
            our authorised service providers may use cookies for storing
            information to help provide you with a better, faster and safer
            experience.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
