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
import LinkECMLogo from "../images/LinkECMLogo.png";
import Chip from '@material-ui/core/Chip';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const linkECMStyles = makeStyles((theme) => ({
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
  const linkECM = linkECMStyles();

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
        <Card className={linkECM.root}>
          <CardActionArea>
            <CardMedia 
              className={linkECM.media}
              alt="LinkECM"
              image={LinkECMLogo}
              title="LinkECM"
            />
            <CardContent className = {linkECM.contentHeight} id = "card">
              <Typography gutterBottom variant="h5" component="h2">
                LinkECM Consulting Inc.
                <br></br>
                <div style={{fontSize: "14px", marginTop: "3px"}}>
                Data Analyst (Jan 2019 - Jan 2021)
                </div>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style = {{fontSize: "15px"}}>
              Founded in 2005, LINKECM consulting Inc is specialized in Open Text Content Server (OTCS) solution design and module development. OTCS is the flagship product from Open Text Corporation who offers content services; digital process automation, which enables organizations to transform into digital and data-driven businesses through automation; and discovery suite that provides forensics and unstructured data analytics for searching, collecting, and investigating enterprise data to manage legal obligations and risk.
              </Typography>
              <div className={linkECM.chip}>
                <Chip
                    icon= {<i className = {"fas fa-business-time"} style={chipIconStyle}/>}
                    label="Part Time Job"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
              </div>
              <Typography variant="body2" color="textSecondary" component="p" style={{paddingTop: "16px", fontSize: "15px"}}>
              As a data analyst, I managed their stock option trade through downloading data from the internet and creating perspectives using the VLookUp function, and then analyzed and edited Excel files accordingly to share with the team in Microsoft's OneDrive.
              </Typography>
              <div className={linkECM.chip}>
                <Chip
                    icon= {<i className = {"fas fa-user-cog"} style={chipIconStyle}/>}
                    label="Independent Work"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<i className="far fa-file-excel" style={chipIconStyle}/>}
                    label="Microsoft Excel"
                    size="small"
                    variant="outlined"
                    style={chipStyle}
                />
                <Chip
                    icon= {<LocalAtmIcon style={{fill: 'white'}} />}
                    label="Stock Transactions"
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

