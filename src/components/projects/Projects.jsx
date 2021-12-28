import React from 'react'
import TimeLineCard from "../cards/TimeLineCard";
import CountdownBuddyCard from "../cards/CountdownBuddyCard";
import PersonalWebsiteCard from "../cards/PersonalWebsiteCard";
import BoggleCard from "../cards/BoggleCard";
import EphphathaCard from "../cards/EphphathaCard";
import { Grid } from "@material-ui/core";
import "./projects.scss";

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className= "header">
                <h3 style = {{fontFamily: "Poppins, sans-serif"}}>Projects</h3>
                <h6 style = {{fontFamily: "Open Sans, sans-serif"}}>Here you can check out some of my past tech related projects and the technical skills I developed, and you can also watch some of the demo videos available!</h6>
            </div>
            <Grid container spacing={4} className = "grid" justifyContent="center">
                <Grid item xs = {12} sm ={6} md={4} xl = {2}>
                    <TimeLineCard className = "cards"/>
                </Grid>
                <Grid item xs = {12} sm ={6} md={4} xl = {2}>
                    <CountdownBuddyCard className = "cards"/>
                </Grid>
                <Grid item xs = {12} sm ={6} md={4} xl = {2}>
                    <PersonalWebsiteCard className = "cards"/>
                </Grid>
                <Grid  item xs = {12} sm ={6} md={4} xl = {2}>
                    <BoggleCard className = "cards"/>
                </Grid>
                <Grid  item xs = {12} sm ={6} md={4} xl = {2}>
                    <EphphathaCard className = "cards"/>
                </Grid>
            </Grid>
            <a className="button" href="#home"><i class="fas fa-chevron-up" id = "arrow"></i></a>
        </div>
        
    )
}
