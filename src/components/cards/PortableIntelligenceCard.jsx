import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import PIDemoImage from "../images/Demo.JPG";
import Chip from '@material-ui/core/Chip';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faDrawPolygon, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import SearchIcon from '@material-ui/icons/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PIStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 650,
    zIndex: 5
  },
  media: {
    minHeight: "259px",
    width: '100%',
  },
  contentHeight: {
    maxHeight: 500,
    minHeight: 500,
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
  const PI = PIStyles();

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });
  const chipIconStyle = { marginTop: "4px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  color: "#04132c",
  overflow: 'hidden',
  fontSize: '14px',
  }

  const chipStyle = {
    backgroundColor: "#FFCD33",
    paddingRight: "6px",
    paddingLeft: "10px",
    overflow: "hidden",
    color: "#04132c",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "500"
  }

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Card className={PI.root} id = "card">
          <CardActionArea href = "https://portable-intelligence.com/" target = "_blank" rel = "noreferrer">
            <CardMedia 
              className={PI.media}
              alt="Portable Intelligence"
              image={PIDemoImage}
              title="Portable Intelligence"
            />
            <CardContent className = {PI.contentHeight} id = "cardContent">
              <Typography gutterBottom variant="h5" component="h2">
              <div style= {{color:"white", fontWeight: "600", fontFamily: "Poppins, sans-serif", overflow: 'hidden'}}>Portable Intelligence Inc.</div>
                <div style={{fontSize: "14px", marginTop: "3px", fontFamily: "Poppins, sans-serif", overflow: 'hidden'}}>
                Software Developer
                </div>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style = {{fontSize: "15px", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>
              Portable Intelligence's mission is to eliminate the inefficiencies associated with inventory management and turn warehouses into a competitive advantage. They offer warehouse management solutions are built specifically for manufacturers who want to optimize their warehouse processes without adding more labor or space.
              </Typography>
              <div className={PI.chip}>
              <Chip
                    icon= {<i className = {"fas fa-briefcase"} style={chipIconStyle}/>}
                    label="Full Time Job"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<PersonAddIcon style={{fill: '#04132c'}} />}
                    label="Networking"
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
              </div>        
              <Typography variant="body2" color="textSecondary" component="p" style={{paddingTop: "16px", fontSize: "15px", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>
              As a software developer, I learned to use a technical partner's SDK, and expanded the tracking capability of our prototype. I created a new positional tracking floor plan with a fellow co-worker and introduced serveral new UI features which enhanced the overall utility of the solution. I also contributed in presenting the product demo to the Ontario Minister of Economic Development and international 
attendees from the Collision Tech Conference. 
              </Typography>
              <div className={PI.chip}>
                <Chip
                    icon= {<FontAwesomeIcon icon={faAngular} style={  {display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    color: "#04132c",
                    overflow: 'hidden',
                    fontSize: '16px'}}/>}
                    label="AngularJS"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />     
                <Chip
                    icon = {<FontAwesomeIcon icon={faDatabase} style = {{display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    color: "#04132c",
                    overflow: 'hidden',
                    fontSize: '14px'}} />}
                    label="SQL Server"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<i className={"fas fa-hashtag"} style={chipIconStyle}/>}
                    label="C#"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<FontAwesomeIcon icon={faPersonChalkboard} style={{display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    color: "#04132c",
                    overflow: 'hidden',
                    fontSize: '14px'}}/>}
                    label="Presentation"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                {/* <Chip
                    icon= {<PeopleIcon style={{fill: '#04132c'}} />}
                    label="Teamwork"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<SearchIcon style={{fill: '#04132c'}} />}
                    label="Research"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                /> */}
              </div>                                   
            </CardContent>

          </CardActionArea>
          <CardActions style={{height: "50px"}}>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div> 
  );
}

