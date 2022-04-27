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
// import boggleImage from "../images/boggle.png";
// import "./cards.scss";

// const boggleStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
    
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
//   const boggle = boggleStyles();

//   const darkTheme = createTheme({
//     palette: {
//       type: 'dark',
//     },
//   });

//   const chipIconStyle = { marginTop: "4px",
//                           display: "flex",
//                           justifyContent: "center",
//                           flexWrap: "wrap",
//                           color: "#04132c",
//                           overflow: 'hidden',
//                           fontSize: '14px',
//   }

//   const chipStyle = { 
//     backgroundColor: "#FFCD33",
//     paddingRight: "6px",
//     paddingLeft: "10px",
//     overflow: "hidden",
//     color: "#04132c",
//     fontFamily: "Open Sans, sans-serif",
//     fontWeight: "500"
// }
//   return (

//     <ThemeProvider theme={darkTheme}>
//         <Card className={boggle.root} id = "card">
//         <CardActionArea href = "https://en.wikipedia.org/wiki/Boggle" target = "_blank" rel = "noreferrer">
//             <CardMedia 
//             className={boggle.media}
//             alt="Boggle"
//             image={boggleImage}
//             title="Boggle"
//             />
//             <CardContent className = {boggle.contentHeight} id = "cardContent">
//             <Typography gutterBottom variant="h5" component="h2" style = {{color:"white", fontWeight: "600", fontFamily: "Poppins, sans-serif", overflow: 'hidden'}}>
//                 Boggle
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p" style = {{fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>
//             Created a Boggle Game (AKA Word Hunt) using java and java swing for the GUI. The game offers 3 modes, singleplayer, player vs player, and player vs computer. The computer has 3 difficulties, and can select certain words from a list of predetermined words that were calculated using a trie. This list is also used to check for the validity of the user's input word.
//             </Typography>
//             <div className={boggle.chip}>
//                 <Chip
//                     icon= {<i className = {"fab fa-java"} style={chipIconStyle}/>}
//                     label="Java"
//                     size="small"
//                     variant="outlined"
//                     style={chipStyle}
//                 />
//                 <Chip
//                     icon= {<i className = {"fab fa-java"} style={chipIconStyle}/>}
//                     label="Java Swing"
//                     size="small"
//                     variant="outlined"
//                     style={chipStyle}
//                 />
//               </div>
//             </CardContent>
//         </CardActionArea>
//         <CardActions style={{height: "50px"}}>
//         <a href = "https://github.com/NicholasLin718/Boggle" target="_blank" rel = "noreferrer"><i class="fab fa-github" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i></a>
//         <a href="https://youtu.be/VZ8jEPalEM8" 
//               target= "_blank" rel = "noreferrer"><i class="fas fa-link" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i>
//               <span style={{color: "#FFCD33", fontSize: "12px", display: 'inline-block', paddingLeft: "7px", paddingBottom: "2px", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>Demo</span></a>          
//         </CardActions>
//         </Card>
//     </ThemeProvider>
    
    
//   );
// }

