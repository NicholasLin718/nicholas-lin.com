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
import opportuniteensPost from "../images/opportuniteensPost.png";
import Chip from '@material-ui/core/Chip';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';

const opportuniteensStyles = makeStyles((theme) => ({
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
  const opportuniteens = opportuniteensStyles();

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

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Card className={opportuniteens.root}>
          <CardActionArea href = "https://opportuniteens.org/" target = "_blank" rel = "noreferrer">
            <CardMedia 
              className={opportuniteens.media}
              alt="opportuniteens"
              image={opportuniteensPost}
              title="opportuniteens"
            />
            <CardContent className = {opportuniteens.contentHeight} id = "card">
              <Typography gutterBottom variant="h5" component="h2">
                OpportuniTeens Canadian Branch
                <br></br>
                <div style={{fontSize: "14px", marginTop: "3px"}}>
                Researcher (July 2021 - Present)
                </div>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style = {{fontSize: "15px"}}>
              OpportuniTeens is a database of internships, volunteering events and other programs compiled by highschool students in the United States. It focuses on several career fields such as STEM, Healthcare, and Civil Services. 
              </Typography>
              <div className={opportuniteens.chip}>
                <Chip
                    icon= {<i className = {"fas fa-sitemap"} style={chipIconStyle}/>}
                    label="Organization"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<i className= {"fas fa-hand-helping"} style={chipIconStyle}/>}
                    label="Volunteering"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
              </div>        
              <Typography variant="body2" color="textSecondary" component="p" style={{paddingTop: "16px", fontSize: "15px"}}>
              Founded the OpportuniTeens Canadian Branch with two other Canadian highschool students. My role as a researcher is to compile valuable opportunities that I obtain from social media and websites onto a shared spreadsheet, in which the information is then converted into a visually appealing Instagram graphic. Within the first few weeks of this new branch, we have garnered over 140 new followers.
              </Typography>
              <div className={opportuniteens.chip}>
                <Chip
                    icon= {<PeopleIcon style={{fill: 'white'}} />}
                    label="Teamwork"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<SearchIcon style={{fill: 'white'}} />}
                    label="Research"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
              </div>                                   
            </CardContent>

          </CardActionArea>
          <CardActions style={{height: "50px"}}>
          <a href="https://www.instagram.com/opportuniteens.can/" 
              target= "_blank" rel = "noreferrer"><i class="fab fa-instagram" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i>
              <span style={{color: "#FFCD33", fontSize: "12px", display: 'inline-block', paddingLeft: "7px", paddingBottom: "2px"}}>OpportuniTeens Canada</span></a>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div> 
  );
}

