import { Box, makeStyles, Typography } from "@material-ui/core";

export interface SectionInfoProps {
  title: string;
  description: string;
}

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
  },
  sectionDescription: {
    fontStyle: "Inter",
    fontWeight: "bold",
  },
}));
const SectionInfo: React.FC<SectionInfoProps> = ({ title, description }) => {
  const classes = useStyles();
  return (
    <Box style={{ padding: 50, width: "100%", textAlign: "center" }}>
      <Box>
        <Typography variant="body1" className={classes.sectionTitle}>
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h3" className={classes.sectionDescription}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionInfo;
