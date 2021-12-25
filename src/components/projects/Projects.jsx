import React from 'react'
import TimeLineCard from "../cards/TimeLineCard";
import CountdownBuddyCard from "../cards/CountdownBuddyCard";
import PersonalWebsiteCard from "../cards/PersonalWebsiteCard";
import BoggleCard from "../cards/BoggleCard";
import EphphathaCard from "../cards/EphphathaCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import "./projects.scss";
// const useStyles = makeStyles({
//     gridContainer: {
//         paddingLeft: "4vw",
//         paddingRight: "2vw",
//     }
// });
export default function Projects() {
    // const classes = useStyles();
    return (
        <section className="projects" id="projects">
             <div className= "header"><h1>CHECK OUT MY PAST PROJECTS</h1></div>
            <Grid container spacing={4} className = "grid" justifyContent="center">
                <Grid item xs = {8} sm ={6} md={4} xl = {2}>
                    <TimeLineCard className = "cards"/>
                </Grid>
                <Grid item xs = {8} sm ={6} md={4} xl = {2}>
                    <CountdownBuddyCard className = "cards"/>
                </Grid>
                <Grid item xs = {8} sm ={6} md={4} xl = {2}>
                    <PersonalWebsiteCard className = "cards"/>
                </Grid>
                <Grid  item xs = {8} sm ={6} md={4} xl = {2}>
                    <BoggleCard className = "cards"/>
                </Grid>
                <Grid  item xs = {8} sm ={6} md={4} xl = {2}>
                    <EphphathaCard className = "cards"/>
                </Grid>
            </Grid>
        </section>
        
    )
}
