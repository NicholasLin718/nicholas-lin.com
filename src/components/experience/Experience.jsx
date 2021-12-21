import React from 'react'
import ShadCard from "../cards/ShadCard";
import CatalystCard from "../cards/CatalystCard";
import OpportuniteensCard from "../cards/OpportuniteensCard";
import LinkECM from "../cards/LinkECMCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import "./experience.scss";
const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "50px",
        paddingRight: "50px",
    }
});
export default function Experience() {
    const classes = useStyles();
    return (
        <section className="experience" id="experience">
            <div className= "header"><h1>TAKE A LOOK AT THE COOL ORGANIZATIONS I JOINED</h1></div>
            <Grid container spacing={4} className = {classes.gridContainer} direction= "row" justifyContent="space-evenly">
                <Grid item xs = {12} sm ={6} md = {6} xl={3}>
                    <ShadCard className = "cards"/>
                </Grid>
                <Grid item xs = {12} sm ={6} md = {6} xl={3}>
                    <CatalystCard className = "cards"/>
                </Grid>
                <Grid item xs = {12} sm ={6} md = {6} xl={3}>
                    <OpportuniteensCard className = "cards"/>
                </Grid>
                <Grid item xs = {12} sm ={6} md = {6} xl={3}>
                    <LinkECM className = "cards"/>
                </Grid>
            </Grid>
        </section>
        
    )
}
