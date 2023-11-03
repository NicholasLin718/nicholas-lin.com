import React from 'react'
import { Grid } from "@material-ui/core";
import { EXPERIENCE } from './ExperienceLists';
import "./experience.scss";
import ExperienceCards from '../template/ExperienceCards';
import { makeStyles } from '@material-ui/core/styles';
const experienceCardStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 650,
    },
    media: {
        height: "259px",
        width: '100%',
    },
    contentHeight: {
        maxHeight: 300,
        minHeight: 300,
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
export default function Experience() {
    const style = experienceCardStyles();

    return (
        <section className="experience" id="experience">
            <div className="max-width">
                <div className= "header">
                    <h3 style = {{fontFamily: "Poppins, sans-serif"}}>Experience</h3>
                    <h6 style = {{fontFamily: "Open Sans, sans-serif"}}>I've had an opportunity to join many amazing organizations, below you can explore and dive in through some of my past experiences and the skills I've gained out of them!</h6>
                </div>
                <Grid container spacing={4} className = "grid" >
                        {EXPERIENCE.map((exp) => {
                            return (
                                <Grid  item xs = {12} sm ={6} md={6}>
                                    <ExperienceCards
                                        className = "cards"
                                        key={exp.name}
                                        experience= {exp}
                                        height="350px"
                                        demoLink={exp.DemoLink}
                                        style = {style}
                                        footer = {exp.footer}
                                    />
                                </Grid>
                            );
                        })}
                </Grid>
                {/* <Grid container spacing={4} className = "grid" direction= "row">
                    <Grid item xs = {12} sm ={6} md = {4}>
                        <LCBONext className = "cards"/>
                    </Grid>
                    <Grid item xs = {12} sm ={6} md = {4}>
                        <PortableIntelligenceCard className = "cards"/>
                    </Grid>
                    <Grid item xs = {12} sm ={6} md = {4}>
                        <ShadCard className = "cards"/>
                    </Grid>
                    <Grid item xs = {12} sm ={6} md = {4}>
                        <CatalystCard className = "cards"/>
                    </Grid>
                </Grid> */}
            </div>
        </section>
        
    )
}
