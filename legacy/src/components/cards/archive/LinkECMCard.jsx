import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
        <Card className={linkECM.root} id = "card">
          <CardActionArea>
            <CardMedia 
              className={linkECM.media}
              alt="LinkECM"
              image={LinkECMLogo}
              title="LinkECM"
            />
            <CardContent className = {linkECM.contentHeight} id = "cardContent">
              <Typography gutterBottom variant="h5" component="h2">
              <div style= {{color:"white", fontWeight: "600", fontFamily: "Poppins, sans-serif", overflow: 'hidden'}}>LinkECM Consulting Inc.</div>
                <div style={{fontSize: "14px", marginTop: "3px", fontFamily: "Poppins, sans-serif", overflow: 'hidden'}}>
                Data Analyst
                </div>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style = {{fontSize: "15px", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>
              Founded in 2005, LINKECM consulting Inc is specialized in Open Text Content Server (OTCS) solution design and module development.
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
              As a data analyst, I managed their stock option trade through downloading data from the internet and utilizing Excel functions such as VLookup to create perspectives. I then analyzed and edited Excel files within the required timeframe whilst maintaining high quality which is then shared on Microsoft's OneDrive.
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
                    icon= {<LocalAtmIcon style={{fill: '#04132c'}} />}
                    label="Stock Transactions"
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

