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
import timelineImage from "../images/timeline-banner.png";

const timeLineStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
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
  const timeLine = timeLineStyles();

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  const chipIconStyle = { marginTop: "4px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  color: "black",
  overflow: 'hidden',
  fontSize: '14px',
  }

  const chipTextStyle = { backgroundColor: "#FFCD33",
                          paddingRight: "6px",
                          paddingLeft: "10px",
                          overflow: "hidden",
                          color: "black" }
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Card className={timeLine.root} id = "cards">
          <CardActionArea>
          <CardMedia 
              className={timeLine.media}
              alt="TimeLine"
              image={timelineImage}
              title="TimeLine"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                TimeLine
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
              <div className={timeLine.chip}>
                <Chip
                    icon= {<i className = {"fab fa-html5"} style={chipIconStyle}/>}
                    label="HTML"
                    size="small"
                    variant="outlined"
                    style={chipTextStyle}
                />
                <Chip
                    icon= {<i className = {"fab fa-css3-alt"} style={chipIconStyle}/>}
                    label="CSS"
                    size="small"
                    variant="outlined"
                    style={chipTextStyle}
                />
                <Chip
                    icon= {<i className = {"fab fa-js-square"} style={chipIconStyle}/>}
                    label="Javascript"
                    size="small"
                    variant="outlined"
                    style={chipTextStyle}
                />
                <Chip
                    icon= {<i className = {"fas fa-pepper-hot"} style={chipIconStyle}/>}
                    label="Flask"
                    size="small"
                    variant="outlined"
                    style={chipTextStyle}
                />
              </div>
              
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a href = "https://github.com/NicholasLin718/TimeLine" target="_blank" rel = "noreferrer"><i class="fab fa-github" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i></a>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div> 
  );
}

