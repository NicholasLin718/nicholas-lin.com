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
import shadImage from "../images/shadImage.png";
import Chip from '@material-ui/core/Chip';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';

const shadStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 650,
    zIndex: 5,
  },
  media: {
    height: "259px",
    width: '100%',
    objectFit: "cover"
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
  const shad = shadStyles();

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
  }

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Card className={shad.root}>
          <CardActionArea href = "https://www.shad.ca/about-shad/" target = "_blank" rel = "noreferrer">
            <CardMedia 
              className={shad.media}
              alt="Shad Canada"
              image={shadImage}
              title="Shad Canada"
            />
            <CardContent className = {shad.contentHeight} id = "card">
              <Typography gutterBottom variant="h5" component="h2">
                <div style={{fontWeight: "450"}}>Shad Canada</div>
                <div style={{fontSize: "14px", marginTop: "3px"}}>
                Ryerson University (July 2019)
                </div>
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: "15px"}}>
                Participated in Canada’s premier month-long STEAM and entrepreneurship program, featuring hands-on workshops, 
                engaging seminars, team building events, and opportunities to network with amazing people. 
              </Typography>
              <div className={shad.chip}>
                <Chip
                    icon= {<PeopleIcon style={{fill: '#04132c'}} />}
                    label="Teamwork"
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
                    icon= {<PersonIcon style={{fill: '#04132c'}} />}
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
                <b>Project:</b>
                <br></br>
                Collaborated with 7 individuals to formulate the business concept <i>Furnitire</i> as a solution to impactfully reduce Canada’s waste. Furnitire’s goal is to take old tires and repurpose them into sustainable and visually appealing furniture. We created a prototype for the product as well as a business report highlighting its impact, functionality, and analyzing the market for our company’s vision. Our team was awarded with the Most Impactful Award on campus after we pitched our product to a panel of judges.
              </Typography>
              <div className={shad.chip}>
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

            </CardContent>
          </CardActionArea>
          <CardActions style={{height: "50px"}}>
              <a href="https://docs.google.com/presentation/d/1k_6jDZFNFLPTgoY51hii79riYn_GcU_QEu5IXVq6Su0/edit#slide=id.g5dd95b87a5_0_0" 
              target= "_blank" rel = "noreferrer"><i class="far fa-file-powerpoint" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i>
              <span style={{color: "#FFCD33", fontSize: "12px", display: 'inline-block', paddingLeft: "7px", paddingBottom: "2px"}}>Presentation</span></a>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div> 
  );
}

