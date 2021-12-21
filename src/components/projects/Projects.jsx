import React from 'react'
import TimeLineCard from "../cards/TimeLineCard";
import CountdownBuddyCard from "../cards/CountdownBuddyCard";
import PersonalWebsiteCard from "../cards/PersonalWebsiteCard";
import BoggleCard from "../cards/BoggleCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import "./projects.scss";
const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "4vw",
        paddingRight: "2vw",
    }
});
export default function Projects() {
    const classes = useStyles();
    return (
        <section className="projects" id="projects">
            <Grid container spacing={4} className = {classes.gridContainer} justify="center">
                <Grid item xs = {12} sm ={6} md={4} xl = {3}>
                    <TimeLineCard className = "cards"/>
                </Grid>
                <Grid item xs = {12} sm ={6} md={4} xl = {3}>
                    <CountdownBuddyCard className = "cards"/>
                </Grid>
                <Grid item xs = {12} sm ={6} md={4} xl = {3}>
                    <PersonalWebsiteCard className = "cards"/>
                </Grid>
                <Grid  item xs = {12} sm ={6} md={4} xl = {3}>
                    <BoggleCard className = "cards"/>
                </Grid>
            </Grid>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </section>
        
    )
}
