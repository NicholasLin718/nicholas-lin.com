import React from 'react'
import Card from "./Cards";
import TimeLineCard from "../cards/TimeLineCard";
import CountdownBuddyCard from "../cards/CountdownBuddyCard";
import PersonalWebsiteCard from "../cards/PersonalWebsiteCard";

import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import "./projects.scss";
const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "2vw",
        paddingRight: "2vw",
    }
});
export default function Projects() {
    const classes = useStyles();
    return (
        <section className="projects" id="projects">
            <h1>My Projects</h1>
            <Grid container spacing={4} className = {classes.gridContainer} justify="center">
                <Grid item xs = {12} sm ={6} md={4}>
                    <TimeLineCard className = "cards"/>
                </Grid>
                <Grid item xs = {12} sm ={6} md={4}>
                    <CountdownBuddyCard className = "cards"/>
                </Grid>
                <Grid item xs = {12} sm ={6} md={4}>
                    <PersonalWebsiteCard className = "cards"/>
                </Grid>
            </Grid>
        </section>
        
    )
}
