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
// import EphphathaImage from "../images/EphphathaImage.png";
// import "./cards.scss";

// const ephphathaStyles = makeStyles((theme) => ({
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
//   const ephphatha = ephphathaStyles();

//   const darkTheme = createTheme({
//     palette: {
//       type: 'dark',
//     },
//   });

//   const chipIconStyle = { 
//     marginTop: "4px",
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     color: "#04132c",
//     overflow: 'hidden',
//     fontSize: '14px',
//   }

//   const chipTextStyle = { backgroundColor: "#FFCD33",
//   paddingRight: "6px",
//   paddingLeft: "10px",
//   overflow: "hidden",
//   color: "#04132c",
//   fontFamily: "Open Sans, sans-serif",
//   fontWeight: "500" }
//   return (
//     <div>
//       <ThemeProvider theme={darkTheme}>
//         <Card className={ephphatha.root} id = "card">
//           <CardActionArea href = "https://www.youtube.com/watch?v=Kypr42PMlr0" target = "_blank" rel = "noreferrer">
//           <CardMedia 
//               className={ephphatha.media}
//               alt="Ephphatha"
//               image={EphphathaImage}
//               title="Ephphatha"
//             />
//             <CardContent className = {ephphatha.contentHeight} id = "cardContent">
//               <Typography gutterBottom variant="h5" component="h2" style = {{color:"white", fontWeight: "600", fontFamily: "Poppins, sans-serif", overflow: 'hidden'}}>
//                 Ephphatha
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p" style = {{fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>
//               In the world of silence, it is challenging to learn written English without knowing the sounds of words and letters. This project is an ASL translator built from a Raspberry Pi that recognizes ASL hand signals from a captured image and translates the signals into written English. 
//               </Typography>
//               <div className={ephphatha.chip}>
//                 <Chip
//                     icon= {<i className = {"fab fa-python"} style={chipIconStyle}/>}
//                     label="Python"
//                     size="small"
//                     variant="outlined"
//                     style={chipTextStyle}
//                 />  
//                 <Chip
//                     icon= {<i className = {"fab fa-html5"} style={chipIconStyle}/>}
//                     label="HTML"
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
//                     icon= {<i className = {"fab fa-js-square"} style={chipIconStyle}/>}
//                     label="Javascript"
//                     size="small"
//                     variant="outlined"
//                     style={chipTextStyle}
//                 />
//                 <Chip
//                     icon= {<i className = {"fas fa-robot"} style={chipIconStyle}/>}
//                     label="Machine Learning"
//                     size="small"
//                     variant="outlined"
//                     style={chipTextStyle}
//                 />
//               </div>
              
//             </CardContent>
//           </CardActionArea>
//           <CardActions style={{height: "50px"}}>
//             <a href = "https://github.com/NicholasLin718/KNIVX-SE101-Project" target="_blank" rel = "noreferrer"><i class="fab fa-github" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i></a>
//             <a href="https://youtu.be/Kypr42PMlr0" 
//               target= "_blank" rel = "noreferrer"><i class="fas fa-link" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i>
//               <span style={{color: "#FFCD33", fontSize: "12px", display: 'inline-block', paddingLeft: "7px", paddingBottom: "2px", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>Demo</span></a>          
//           </CardActions>
//         </Card>
//       </ThemeProvider>
//     </div> 
//   );
// }

