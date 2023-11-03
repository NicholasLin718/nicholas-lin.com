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
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// const darkTheme = createTheme({
//     palette: {
//     type: 'dark',
//     },
// });

// const chipIconStyle = { 
//     paddingRight: "1px",
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     color: "#04132c",
//     overflow: 'hidden',
//     fontSize: '14px',
// };

// const chipStyle = { 
//     backgroundColor: "#FFCD33",
//     paddingRight: "6px",
//     paddingLeft: "10px",
//     overflow: "hidden",
//     color: "#04132c",
//     fontFamily: "Open Sans, sans-serif",
//     fontWeight: "500"
// };


// export default class ExperienceCards extends React.Component {
//     render(){
//         const experience = this.props.experience;
//         const style = this.props.style;

//         let projectHeading;
//         let footerLink;
//         if (experience.name === "Shad Canada") {
//             footerLink = (
//                 <a href={experience.link}
//                 target= "_blank" rel = "noreferrer"><i class="far fa-file-powerpoint" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i>
//                 <span style={{color: "#FFCD33", fontSize: "12px", display: 'inline-block', paddingLeft: "7px", paddingBottom: "2px", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>Presentation</span></a>
//             );
//             projectHeading = (
//                 <Typography variant="body2" color="textSecondary" component="p" style={{paddingTop: "16px", fontSize: "15px"}}>
//                     <b>Project:</b>
//                     <br></br>
//                 </Typography>
//             );
//         }
//         else if(experience.name === "Catalyst"){
//             footerLink = (
//                 <a href={experience.link}
//               target= "_blank" rel = "noreferrer"><i class="fas fa-link" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i>
//               <span style={{color: "#FFCD33", fontSize: "12px", display: 'inline-block', paddingLeft: "7px", paddingBottom: "2px", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>Sequence Memory Game Demo</span></a>
//             );
//             projectHeading = (
//                 <Typography variant="body2" color="textSecondary" component="p" style={{paddingTop: "16px", fontSize: "15px"}}>
//                     <b>Projects:</b>
//                     <br></br>
//                 </Typography>
//             );
//         }

//         return (
//             <ThemeProvider theme={darkTheme}>
//                 <Card className={style.root} id = "card">
//                 <CardActionArea href = {experience.ActionAreaLink} target = "_blank" rel = "noreferrer">
//                 <CardMedia 
//                     className={style.media}
//                     alt={experience.name}
//                     image={experience.image}
//                     title={experience.name}
//                 />
//                 <CardContent className = {style.contentHeight} id = "cardContent">
//                 <Typography gutterBottom variant="h5" component="h2">
//                     <div style= {{color:"white", fontWeight: "600", fontFamily: "Poppins, sans-serif", overflow: 'hidden'}}>{experience.name}</div>
//                     <div style={{fontSize: "14px", marginTop: "3px", fontFamily: "Poppins, sans-serif", overflow: 'hidden'}}>{experience.subheading}</div>
//                 </Typography>

//                 {experience.descriptions.map((desc) => {
//                     return(
//                         <div className="body">
//                             <Typography variant="body2" color="textSecondary" component="p" style = {{fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>
//                                 {desc.experienceDescription}
//                             </Typography>
//                             <div className={style.chip}>
//                                 {desc.tools.map((tool) => {
//                                     return (
//                                         <Chip
//                                             icon = {<FontAwesomeIcon icon={tool.icon} style = {chipIconStyle} />}
//                                             label={tool.name}
//                                             size="small"
//                                             variant="outlined"
//                                             style={chipStyle}
//                                         />
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     );

//                 })}
                
//                 </CardContent>
//             </CardActionArea>
//             <CardActions style={{height: "50px"}}>
//             <a href = {experience.githubLink} target="_blank" rel = "noreferrer"><i class="fab fa-github" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i></a>
//                 {footerLink}
//             </CardActions>
//             </Card>
//         </ThemeProvider>
//         );
        
//     }
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const darkTheme = createTheme({
    palette: {
    type: 'dark',
    },
});

const chipIconStyle = { 
    paddingRight: "1px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    color: "#04132c",
    overflow: 'hidden',
    fontSize: '12px',
};

const chipStyle = { 
    backgroundColor: "#FFCD33",
    paddingRight: "6px",
    paddingLeft: "10px",
    overflow: "hidden",
    color: "#04132c",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: "500",
    fontSize: "12px"
};


export default class ExperienceCards extends React.Component {
    render(){
        const experience = this.props.experience;
        const style = this.props.style;
        const footer = this.props.footer ?? [];

        let demoLink = experience.DemoLink ? 
            (
                <a href={experience.DemoLink} 
                target= "_blank" rel = "noreferrer"><i class="fas fa-link" style={{color: "#FFCD33", fontSize: "22px", marginLeft: 5}}></i>
                <span style={{color: "#FFCD33", fontSize: "12px", display: 'inline-block', paddingLeft: "7px", paddingBottom: "2px", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>Demo</span></a>          
            ) : <></>
          

        return (
            <ThemeProvider theme={darkTheme}>
                <Card className={style.root} id = "card">
                <CardActionArea href = {experience.ActionAreaLink} target = "_blank" rel = "noreferrer">
                <CardMedia 
                    className={style.media}
                    alt={experience.name}
                    image={experience.image}
                    title={experience.name}
                />
                <CardContent className = {style.contentHeight} id = "cardContent">
                <Typography gutterBottom variant="h5" component="h2">
                    <div style= {{color:"white", fontWeight: "600", fontFamily: "Poppins, sans-serif", overflow: 'hidden'}}>{experience.name}</div>
                    <div style={{fontSize: "14px", marginTop: "3px", fontFamily: "Poppins, sans-serif", overflow: 'hidden'}}>{experience.subheading}</div>
                 </Typography>

                {experience.descriptions.map((desc) => {
                    return(
                        <div className="body">
                            <Typography variant="body2" color="textSecondary" component="p" style = {{fontFamily: "Open Sans, sans-serif", overflow: 'hidden', fontSize: "12px"}}>
                                {desc.experienceDescription}
                            </Typography>
                            <div className={style.chip}>
                                {desc.tools.map((tool) => {
                                    return (
                                        <Chip
                                            icon = {<FontAwesomeIcon icon={tool.icon} style = {chipIconStyle} />}
                                            label={tool.name}
                                            size="small"
                                            variant="outlined"
                                            style={chipStyle}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );

                })}
                
                </CardContent>
            </CardActionArea>
            <CardActions style={{height: "40px", overflow: 'hidden'}}>
                {footer.map((link) => (
                    <a href={link.target} 
                    target= "_blank" rel = "noreferrer"><i class={link.icon} style={{color: "#FFCD33", fontSize: "20px", marginLeft: 2 , paddingX: 5}}></i>
                    <span style={{color: "#FFCD33", fontSize: "12px", display: 'inline-block', paddingLeft: "7px", paddingBottom: "2px", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>{link.name}</span></a>
                ))}
            </CardActions>
            </Card>
        </ThemeProvider>
        );
        
    }
}
