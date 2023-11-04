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


export default class ProjectCards extends React.Component {
    render(){
        const project = this.props.project;
        const style = this.props.style;

        let demoLink = project.DemoLink ? 
            (
                <a href={project.DemoLink} 
                target= "_blank" rel = "noreferrer"><i class="fas fa-link" style={{color: "#FFCD33", fontSize: "20px", marginLeft: 5}}></i>
                <span style={{color: "#FFCD33", fontSize: "12px", display: 'inline-block', paddingLeft: "7px", paddingBottom: "2px", fontFamily: "Open Sans, sans-serif", overflow: 'hidden'}}>Demo</span></a>          
            ) : <></>
          

        return (
            <ThemeProvider theme={darkTheme}>
                <Card className={style.root} id = "card">
                <CardActionArea href = {project.ActionAreaLink} target = "_blank" rel = "noreferrer">
                <CardMedia 
                    className={style.media}
                    alt={project.name}
                    image={project.image}
                    title={project.name}
                />
                <CardContent className = {style.contentHeight} id = "cardContent">
                <Typography gutterBottom variant="h5" component="h2" style = {{color:"white", fontWeight: "600", fontFamily: "Poppins, sans-serif", overflow: 'hidden'}}>
                    {project.name}
                </Typography>

                {project.descriptions.map((desc) => {
                    return(
                        <div className="body">
                            <Typography variant="body2" color="textSecondary" component="p" style = {{fontFamily: "Open Sans, sans-serif", overflow: 'hidden', fontSize: "14px"}}>
                                {desc.projectDescription}
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
                <a href = {project.githubLink} target="_blank" rel = "noreferrer"><i class="fab fa-github" style={{color: "#FFCD33", fontSize: "20px", marginLeft: 2 , paddingX: 5}}></i></a>
                {demoLink}
            </CardActions>
            </Card>
        </ThemeProvider>
        );
        
    }
}
