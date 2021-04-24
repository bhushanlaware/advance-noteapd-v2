import { CardActionArea, CardMedia, Grid, Zoom, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React from "react";

export interface AppCardProps {
  image: any;
  title: string;
  path: string;
}

const AppCard: React.FC<AppCardProps> = ({ title, path, image }) => {
  const router = useRouter();
  return (
    <Zoom in={true} mountOnEnter unmountOnExit>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={2}>
        <Card elevation={0}>
          <CardActionArea
            onClick={(e) => {
              router.push(path);
            }}
          >
            <CardMedia>
              <CardContent style={{ textAlign: "center" }}>
                <Box
                  style={{
                    width: 100,
                    height: 100,
                    margin: "0 auto",
                  }}
                >
                  {image}
                </Box>
                <Typography variant="h6">{title}</Typography>
              </CardContent>
            </CardMedia>
          </CardActionArea>
        </Card>
      </Grid>
    </Zoom>
  );
};
export default AppCard;
