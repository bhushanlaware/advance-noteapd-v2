import { Box, makeStyles, Typography } from "@material-ui/core";

export interface SectionInfoProps {
  title: string;
  description: string;
  subtitle?: string;
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
  subtitle: {
    color: theme.palette.text.secondary,
    fontStyle: "Inter",
  },
}));
const SectionInfo: React.FC<SectionInfoProps> = ({
  title,
  description,
  subtitle,
}) => {
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
      {subtitle && (
        <Box>
          <Typography className={classes.subtitle} variant="h6">
            Improve your and team productive with beautiful, fast, intetive
            tools form today.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SectionInfo;
