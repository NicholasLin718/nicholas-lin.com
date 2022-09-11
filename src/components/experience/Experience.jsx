import React from 'react'
import ShadCard from "../cards/ShadCard";
import CatalystCard from "../cards/CatalystCard";
import OpportuniteensCard from "../cards/OpportuniteensCard";
import PortableIntelligenceCard from "../cards/PortableIntelligenceCard";
import LinkECM from "../cards/LinkECMCard";
import { Grid } from "@material-ui/core";
import "./experience.scss";

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="max-width">
                <div className= "header">
                    <h3 style = {{fontFamily: "Poppins, sans-serif"}}>Experience</h3>
                    <h6 style = {{fontFamily: "Open Sans, sans-serif"}}>I've had an opportunity to join many amazing organizations, below you can explore and dive in through some of my past experiences and the skills I've gained out of them!</h6>
                </div>
                <Grid container spacing={4} className = "grid" direction= "row">
                    <Grid item xs = {12} sm ={6} md = {6}>
                        <ShadCard className = "cards"/>
                    </Grid>
                    <Grid item xs = {12} sm ={6} md = {6}>
                        <CatalystCard className = "cards"/>
                    </Grid>
                    <Grid item xs = {12} sm ={6} md = {6}>
                        <PortableIntelligenceCard className = "cards"/>
                    </Grid>
                    <Grid item xs = {12} sm ={6} md = {6}>
                        <LinkECM className = "cards"/>
                    </Grid>
                </Grid>
            </div>
        </section>
        
    )
}
