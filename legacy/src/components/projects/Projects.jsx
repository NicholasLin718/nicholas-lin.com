import React from 'react'
import { Grid } from "@material-ui/core";
import { PROJECTS } from "./ProjectsList";
import ProjectCards from "../template/ProjectCards";
import "./projects.scss";
import { makeStyles } from '@material-ui/core/styles';
import balloon from "../images/balloon.png";
const projectCardStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 'auto',
    },
    media: {
      height: "259px",
      width: '100%',
    },
    contentHeight: {
      maxHeight: 275,
      minHeight: 275,
      '&::-webkit-scrollbar': {
        width: '16px',
      },
      '&::-webkit-scrollbar-track': {
          background: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#d6dee1',
          borderRadius: '16px',
          border: '5px solid transparent',
          backgroundClip: 'content-box',
          '&:hover': {
              backgroundColor: '#a8bbbf',
          },
      },
      [theme.breakpoints.down('xs')]: {
        maxHeight: 400, 
        minHeight: 'auto',
      },
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

export default function Projects(){
    const style = projectCardStyles();
    return(
        <section className="projects" id="projects">
            <div className="max-width">
                <div className= "header">
                    <h3 style = {{fontFamily: "Poppins, sans-serif"}}>Projects</h3>
                    <h6 style = {{fontFamily: "Open Sans, sans-serif"}}>Here you can check out some of my past tech related projects and the technical skills I developed, and you can also watch some of the demo videos available!</h6>
                </div>
                <Grid container spacing={4} className = "grid" >
                        {PROJECTS.map((project) => {
                            return (
                                <Grid  item xs = {12} sm ={6} md={4}>
                                    <ProjectCards
                                        className = "cards"
                                        key={project.name}
                                        project= {project}
                                        height="350px"
                                        demoLink={project.DemoLink}
                                        style = {style}
                                    />
                                </Grid>
                            );
                        })}
                </Grid>
            </div>
        <a className="button" href="#home"><img src={balloon} style={{marginLeft: "22px", height: "55px", width: "auto"}} alt="Back to Top"/></a>
        </section>
    );
}