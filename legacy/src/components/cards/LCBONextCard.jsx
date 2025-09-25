import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import LCBONextImage from "../images/LCBONext.jpg"
import LCBODemoImage from "../images/LCBODemo.jpg" 
import Chip from '@material-ui/core/Chip';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { faAngular, faDocker, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBox, faBuilding, faBusinessTime, faChalkboardUser, faCircleNodes, faDatabase, faPersonChalkboard, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = makeStyles((theme) => ({
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
  const LCBO = styles();

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
        <Card className={LCBO.root} id = "card">
          <CardActionArea href = "https://www.lcbo.com/" target = "_blank" rel = "noreferrer">
            <CardMedia 
              className={LCBO.media}
              alt="LCBO|next"
              image={LCBODemoImage}
              title="LCBO|next"
            />
            <CardContent className = {LCBO.contentHeight} id = "cardContent">
              <Typography gutterBottom variant="h5" component="h2">
              <div style= {{color:"white", fontWeight: "600", fontFamily: "Poppins, sans-serif", overflow: 'hidden'}}>LCBO Next</div>
                <div style={{fontSize: "14px", marginTop: "3px", fontFamily: "Poppins, sans-serif", overflow: 'hidden'}}>
                  Full Stack Developer
                </div>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style = {{fontSize: "15px", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>
                LCBO|next operates as the innovation outpost for LCBO. They are all about bringing fresh ideas and creative thinking to enhance LCBO's technology initiatives. With the resources of LCBO's reach alongside a start-up culture, interns will have the opportunity to take their ideas and make lasting impact on LCBO's operations and customer experience.
              </Typography>
              <div className={LCBO.chip}>
              <Chip
                    icon= {<i className = {"fas fa-briefcase"} style={chipIconStyle}/>}
                    label="Full Time Job"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon = {<FontAwesomeIcon icon={faChalkboardUser} style = {{display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    color: "#04132c",
                    overflow: 'hidden',
                    fontSize: '14px'}} />}
                    label="Mentorship"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<FontAwesomeIcon icon={faBuilding} style={{display: "flex", justifyContent: "center", flexWrap: "wrap", color: "#04132c", overflow: 'hidden', fontSize: '16px'}}/>}
                    label="Startup"
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
              <Typography variant="body2" color="textSecondary" component="p" style={{paddingTop: "16px", fontSize: "15px", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>
                I developed an end-to-end web application that acts as a theft prevention tool for LCBO stores. I brainstormed with the Product Manager and Designer to design the application from scratch, and collaborated with the other Full Stack Developer to release an alpha version of the product within a month. The project was demoed to the CEO and the CRO of LCBO, which exceeded expectations and effectively showcased the product's capabilities before launch.
              </Typography>
              <div className={LCBO.chip}>
                <Chip
                    icon= {<FontAwesomeIcon icon={faReact} style={{display: "flex", justifyContent: "center", flexWrap: "wrap", color: "#04132c", overflow: 'hidden', fontSize: '16px'}}/>}
                    label="React"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />     
                <Chip
                    icon= {<FontAwesomeIcon icon={faJsSquare} style={{display: "flex", justifyContent: "center", flexWrap: "wrap", color: "#04132c", overflow: 'hidden', fontSize: '16px'}}/>}
                    label="TypeScript/Javascript"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />     
                <Chip
                    icon= {<FontAwesomeIcon icon={faPython} style={{display: "flex", justifyContent: "center", flexWrap: "wrap", color: "#04132c", overflow: 'hidden', fontSize: '16px'}}/>}
                    label="Python"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />     
                <Chip
                    icon= {<FontAwesomeIcon icon={faDatabase} style={{display: "flex", justifyContent: "center", flexWrap: "wrap", color: "#04132c", overflow: 'hidden', fontSize: '16px'}}/>}
                    label="PostgresQL"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<FontAwesomeIcon icon={faCircleNodes} style={{display: "flex", justifyContent: "center", flexWrap: "wrap", color: "#04132c", overflow: 'hidden', fontSize: '16px'}}/>}
                    label="GraphQL"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<FontAwesomeIcon icon={faDocker} style={{display: "flex", justifyContent: "center", flexWrap: "wrap", color: "#04132c", overflow: 'hidden', fontSize: '16px'}}/>}
                    label="Docker"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<FontAwesomeIcon icon={faServer} style={{display: "flex", justifyContent: "center", flexWrap: "wrap", color: "#04132c", overflow: 'hidden', fontSize: '16px'}}/>}
                    label="Kubernetes"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
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

