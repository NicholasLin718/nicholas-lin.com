import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import countdownImage from "../images/countdownBuddyDemo.png";

const countdownBuddyStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
  media: {
    height: "259px",
    width: '100%',
  },
  chip: {
    marginTop: "16px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function ImgMediaCard() {
  const countdownBuddy = countdownBuddyStyles();

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  const chipIconStyle = { marginTop: "4px",
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: "wrap",
                          color: "white",
                          overflow: 'hidden',
                          fontSize: '14px',
  }
  return (

    <ThemeProvider theme={darkTheme}>
        <Card className={countdownBuddy.root}>
        <CardActionArea>
            <CardMedia 
            className={countdownBuddy.media}
            alt="Countdown Buddy"
            image={countdownImage}
            title="Countdown Buddy"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Countdown Buddy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            <div className={countdownBuddy.chip}>
                <Chip
                    icon= {<i className = {"fab fa-python"} style={chipIconStyle}/>}
                    label="Python"
                    size="small"
                    variant="outlined"
                    style={{ backgroundColor: "#FFCD33",
                             paddingRight: "6px",
                             paddingLeft: "10px",
                             overflow: "hidden" }}
                />
                <Chip
                    icon= {<i className = {"fab fa-discord"} style={chipIconStyle}/>}
                    label="Discord.py"
                    size="small"
                    variant="outlined"
                    style={{ backgroundColor: "#FFCD33",
                             paddingRight: "6px",
                             paddingLeft: "10px",
                             overflow: "hidden" }}
                />
                <Chip
                    icon= {<i className = {"fas fa-file"} style={chipIconStyle}/>}
                    label="JSON"
                    size="small"
                    variant="outlined"
                    style={{ backgroundColor: "#FFCD33",
                             paddingRight: "6px",
                             paddingLeft: "10px",
                             overflow: "hidden" }}
                />
              </div>
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
    
    
  );
}

