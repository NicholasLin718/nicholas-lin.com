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

const opportuniteensStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 525,
    zIndex: 5
  },
  media: {
    minHeight: "259px",
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
  const opportuniteens = opportuniteensStyles();

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Card className={opportuniteens.root}>
          <CardActionArea>
            <CardMedia 
              className={opportuniteens.media}
              alt="Catalyst"
              image={catalystImage}
              title="Catalyst"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Catalyst
                <br></br>
                <div style={{fontSize: "14px", marginTop: "3px"}}>
                University of Waterloo
                </div>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
              <div className={opportuniteens.chip}>
                <Chip
                    icon= {<PeopleIcon style={{fill: 'white'}} />}
                    label="Teamwork"
                    size="small"
                    variant="outlined"
                    style={{ backgroundColor: "#FFCD33",
                             paddingRight: "6px",
                             paddingLeft: "10px", }}
                />
                <Chip
                    icon= {<PersonAddIcon style={{fill: 'white'}} />}
                    label="Networking"
                    size="small"
                    variant="outlined"
                    style={{ backgroundColor: "#FFCD33",
                             paddingRight: "6px",
                             paddingLeft: "10px", }}
                />
                <Chip
                    icon= {<PersonIcon style={{fill: 'white'}} />}
                    label="Leadership"
                    size="small"
                    variant="outlined"
                    style={{ backgroundColor: "#FFCD33",
                             paddingRight: "6px",
                             paddingLeft: "10px", }}
                />
                <Chip
                    icon= {<i className = {"fas fa-tools"} style={{ marginTop: "4px",
                                                                  display: "flex",
                                                                  justifyContent: "center",
                                                                  flexWrap: "wrap",
                                                                  color: "white",
                                                                  overflow: 'hidden',
                                                                  fontSize: '14px',
                                                                  }}/>}
                    label="Workshops"
                    size="small"
                    variant="outlined"
                    style={{ backgroundColor: "#FFCD33",
                             paddingRight: "6px",
                             paddingLeft: "10px",
                             overflow: "hidden" }}
                />
              </div>
              <Typography variant="body2" color="textSecondary" component="p" style={{paddingTop: "16px"}}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
              <div className={opportuniteens.chip}>
                <Chip
                    icon= {<i className = {"fas fa-brain"} style={{ marginTop: "4px",
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                    flexWrap: "wrap",
                                                                    color: "white",
                                                                    overflow: 'hidden',
                                                                    fontSize: '14px',
                                                                  }}/>}
                    label="Problem Solving"
                    size="small"
                    variant="outlined"
                    style={{ backgroundColor: "#FFCD33",
                             paddingRight: "6px",
                             paddingLeft: "10px",
                             overflow: "hidden" }}
                />
                <Chip
                    icon= {<i className = {"fas fa-user-tie"} style={{ marginTop: "4px",
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                    flexWrap: "wrap",
                                                                    color: "white",
                                                                    overflow: 'hidden',
                                                                    fontSize: '14px',
                                                                  }}/>}
                    label="Professionalism"
                    size="small"
                    variant="outlined"
                    style={{ backgroundColor: "#FFCD33",
                             paddingRight: "6px",
                             paddingLeft: "10px",
                             overflow: "hidden" }}
                />
                <Chip
                    icon= {<i className = {"fas fa-hammer"} style={{ marginTop: "4px",
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                    flexWrap: "wrap",
                                                                    color: "white",
                                                                    overflow: 'hidden',
                                                                    fontSize: '14px',
                                                                  }}/>}
                    label="Prototyping"
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
    </div> 
  );
}

