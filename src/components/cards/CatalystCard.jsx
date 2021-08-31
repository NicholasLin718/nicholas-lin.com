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
import catalystImage from "../images/catalyst.png";
import Chip from '@material-ui/core/Chip';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import "./cards.scss"
const catalystStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 650,
    zIndex: 5
  },
  media: {
    minHeight: "259px",
    width: '100%',
  },
  contentHeight: {
    maxHeight: 575,
    minHeight: 575,
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
  const catalyst = catalystStyles();

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

  const chipStyle = {
    backgroundColor: "#FFCD33",
    paddingRight: "6px",
    paddingLeft: "10px",
    overflow: "hidden"
  }

  const textDescriptionStyle = {fontSize:"15px"};
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Card className={catalyst.root}>
          <CardActionArea href = "https://uwaterloo.ca/catalyst/catalyst-summer-program" target = "_blank" rel = "noreferrer">
            <CardMedia 
              className={catalyst.media}
              alt="Catalyst"
              image={catalystImage}
              title="Catalyst"
            />
            <CardContent className = {catalyst.contentHeight} id = "card">
              <Typography gutterBottom variant="h5" component="h2">
                Catalyst
                <br></br>
                <div style={{fontSize: "14px", marginTop: "3px"}}>
                University of Waterloo (July 2020)
                </div>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style = {{fontSize: "15px"}}>
              Catalyst is a two-week enrichment program from the University of Waterloo that provides high school students an opportunity to develop leadership skills and collaborate with like-minded peers to explore engineering, science, and innovation.
              </Typography>
              <div className={catalyst.chip}>
                <Chip
                    icon= {<PeopleIcon style={{fill: 'white'}} />}
                    label="Teamwork"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<PersonAddIcon style={{fill: 'white'}} />}
                    label="Networking"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<PersonIcon style={{fill: 'white'}} />}
                    label="Leadership"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<i className = {"fas fa-tools"} style={chipIconStyle}/>}
                    label="Workshops"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
              </div>
              <Typography variant="body2" color="textSecondary" component="p" style={{paddingTop: "16px", fontSize: "15px"}}>
                <b>Projects:</b> 
                <br></br>
                Collaborated with 5 individuals to devise a concept of a water tank that can filtrate and purify water for communal use as a means to tackle UN’s SDG #6.
              </Typography>
              <div className={catalyst.chip}>
                <Chip
                    icon= {<i className = {"fas fa-brain"} style={chipIconStyle}/>}
                    label="Problem Solving"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<i className = {"fas fa-user-tie"} style={chipIconStyle}/>}
                    label="Professionalism"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<i className = {"fas fa-hammer"} style={chipIconStyle}/>}
                    label="Prototyping"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />          
              </div>
              <Typography variant="body2" color="textSecondary" component="p" style={{paddingTop: "16px", fontSize: "15px"}}>
                Created a sequence memory game using Arduino and breadboarding. A pattern will be displayed using LEDs and the user will have to press the corresponding buttons in order. The number of lights in the pattern increments by one for each successful round, up to 10 rounds where the user will receive some nice victory music!
              </Typography>
              <div className={catalyst.chip}>
                <Chip
                    icon= {<i className = {"fas fa-wrench"} style={chipIconStyle}/>}
                    label="Breadboard"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<i className = {"fas fa-infinity"} style={chipIconStyle}/>}
                    label="Arduino"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />      
              </div>                                                   
            </CardContent>
          </CardActionArea>
          <CardActions style={{height: "50px"}}>
              <a href="https://www.youtube.com/watch?v=2-LoJipgtxU" 
              target= "_blank" rel = "noreferrer"><i class="fas fa-link" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i>
              <span style={{color: "#FFCD33", fontSize: "12px", display: 'inline-block', paddingLeft: "7px", paddingBottom: "2px"}}>Sequence Memory Game Demo</span></a>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div> 
  );
}

