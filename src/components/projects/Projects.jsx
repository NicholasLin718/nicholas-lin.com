import React from 'react'
import { Grid } from "@material-ui/core";
import { PROJECTS } from "./ProjectsList";
import ProjectCards from "../template/ProjectCards";
import "./projects.scss";
import { makeStyles } from '@material-ui/core/styles';

const projectCardStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 375,
    },
    media: {
      height: "259px",
      width: '100%',
    },
    contentHeight: {
      maxHeight: 305,
      minHeight: 305,
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
        <a className="button" href="#home"><i class="fas fa-chevron-up" id = "arrow"></i></a>
        </section>
    );
}