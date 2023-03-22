// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import Chip from '@material-ui/core/Chip';
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import timelineImage from "../images/timeline-banner.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./cards.scss";

// import {
//   faJsSquare,
//   faRaspberryPi,
//   faReact,
//   faPython,
//   faAws,
//   faJava,
//   faHtml5,
//   faCss3
// } from "@fortawesome/free-brands-svg-icons";

// const timeLineStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345
//   },
//   media: {
//     height: "259px",
//     width: '100%',
//   },
//   contentHeight: {
//     maxHeight: 305,
//     minHeight: 305,
//   },
//   chip: {
//     marginTop: "16px",
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     "& > *": {
//       margin: theme.spacing(0.5),
//     },
//   },
// }));

// export default function ImgMediaCard() {
//   const timeLine = timeLineStyles();

//   const darkTheme = createTheme({
//     palette: {
//       type: 'dark',
//     },
//   });

//   const chipIconStyle = {
//     paddingRight: "1px",
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     color: "#04132c",
//     overflow: 'hidden',
//     fontSize: '14px',
//   }

//   const chipTextStyle = { 
//     backgroundColor: "#FFCD33",
//     paddingRight: "6px",
//     paddingLeft: "10px",
//     overflow: "hidden",
//     color: "#04132c",
//     fontFamily: "Open Sans, sans-serif",
//     fontWeight: "500"
//   }

//   return (
//     <div>
//       <ThemeProvider theme={darkTheme}>
//         <Card className={timeLine.root} id = "card">
//           <CardActionArea href = "https://github.com/NicholasLin718/TimeLine" target = "_blank" rel = "noreferrer">
//           <CardMedia 
//               className={timeLine.media}
//               alt="TimeLine"
//               image={timelineImage}
//               title="TimeLine"
//             />
//             <CardContent className = {timeLine.contentHeight} id = "cardContent">
//               <Typography gutterBottom variant="h5" component="h2" style = {{color:"white", fontWeight: "bold", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>
//                 TimeLine
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p" style = {{fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>
//               As COVID-19 health restrictions begin to relax in many countries, public spaces now seem to be home to comically long lineups. TimeLine is a solution to that problem: a real-time, community-driven foot traffic indicator to help everyone avoid busy <b>times</b> and busy <b>lines</b> wherever they go.
//               </Typography>
//               <div className={timeLine.chip}>
//                 <Chip
//                     icon= {<FontAwesomeIcon icon={faHtml5} style = {chipIconStyle} />}
//                     label="HTML"
//                     size="small"
//                     variant="outlined"
//                     style={chipTextStyle}
//                 />
//                 <Chip
//                     icon= {<i className = {faCss3} style={chipIconStyle}/>}
//                     label="CSS"
//                     size="small"
//                     variant="outlined"
//                     style={chipTextStyle}
//                 />
//                 <Chip
//                     icon= {<i className = {"fab fa-js-square"} style={chipIconStyle}/>}
//                     label="Javascript"
//                     size="small"
//                     variant="outlined"
//                     style={chipTextStyle}
//                 />
//                 <Chip
//                     icon= {<i className = {"fas fa-pepper-hot"} style={chipIconStyle}/>}
//                     label="Flask"
//                     size="small"
//                     variant="outlined"
//                     style={chipTextStyle}
//                 />
//                 <Chip
//                     icon= {<i className = {"fas fa-map-marker-alt"} style={chipIconStyle}/>}
//                     label="Google Map APIs"
//                     size="small"
//                     variant="outlined"
//                     style={chipTextStyle}
//                 />
//               </div>
              
//             </CardContent>
//           </CardActionArea>
//           <CardActions style={{height: "50px"}}>
//             <a href = "https://github.com/NicholasLin718/TimeLine" target="_blank" rel = "noreferrer"><i class="fab fa-github" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i></a>
//             <a href="https://youtu.be/RT1EIRt_i2U" 
//               target= "_blank" rel = "noreferrer"><i class="fas fa-link" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i>
//               <span style={{color: "#FFCD33", fontSize: "12px", display: 'inline-block', paddingLeft: "7px", paddingBottom: "2px", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>Demo</span></a>          
//           </CardActions>
//         </Card>
//       </ThemeProvider>
//     </div> 
//   );
// }

