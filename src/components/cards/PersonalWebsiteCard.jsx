import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import timelineImage from "../images/timeline-banner.png";

const websiteStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "259px",
    width: '100%',
  }
});

export default function ImgMediaCard() {
  const timeLine = websiteStyles();

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Card className={timeLine.root}>
          <CardActionArea>
            <CardMedia 
              className={timeLine.media}
              alt="Personal Website"
              image={timelineImage}
              title="Personal Website"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Personal Website
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div> 
  );
}

