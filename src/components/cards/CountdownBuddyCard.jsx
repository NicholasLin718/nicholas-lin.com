import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import countdownImage from "../images/countdownBuddyDemo.png";
import "./cards.scss";

const countdownBuddyStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    
  },
  media: {
    height: "259px",
    width: '100%',
  },
  contentHeight: {
    maxHeight: 305,
    minHeight: 305,
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
        <CardActionArea href = "https://github.com/NicholasLin718/TimeLine" target = "_blank" rel = "noreferrer">
            <CardMedia 
            className={countdownBuddy.media}
            alt="Countdown Buddy"
            image={countdownImage}
            title="Countdown Buddy"
            />
            <CardContent className = {countdownBuddy.contentHeight} id = "card">
            <Typography gutterBottom variant="h5" component="h2" style = {{color:"white", fontWeight: "bold"}}>
                Countdown Buddy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Countdown Buddy is a discord bot that allows you to create your own customizable countdown timer! Once you create your timer, it will update every few seconds and alert you with a customizable message when it reaches the preset end time.
            </Typography>
            <div className={countdownBuddy.chip}>
                <Chip
                    icon= {<i className = {"fab fa-python"} style={chipIconStyle}/>}
                    label="Python"
                    size="small"
                    variant="outlined"
                    style={{ backgroundColor: "#04132c",
                             paddingRight: "6px",
                             paddingLeft: "10px",
                             overflow: "hidden" }}
                />
                <Chip
                    icon= {<i className = {"fab fa-discord"} style={chipIconStyle}/>}
                    label="Discord.py"
                    size="small"
                    variant="outlined"
                    style={{ backgroundColor: "#04132c",
                             paddingRight: "6px",
                             paddingLeft: "10px",
                             overflow: "hidden" }}
                />
                <Chip
                    icon= {<i className = {"fas fa-file"} style={chipIconStyle}/>}
                    label="JSON"
                    size="small"
                    variant="outlined"
                    style={{ backgroundColor: "#04132c",
                             paddingRight: "6px",
                             paddingLeft: "10px",
                             overflow: "hidden" }}
                />
              </div>
            </CardContent>
        </CardActionArea>
        <CardActions style={{height: "50px"}}>
        <a href = "https://github.com/NicholasLin718/Countdown-Buddy" target="_blank" rel = "noreferrer"><i class="fab fa-github" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i></a>
        </CardActions>
        </Card>
    </ThemeProvider>
    
    
  );
}

