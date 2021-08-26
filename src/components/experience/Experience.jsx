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
        paddingLeft: "6vw",
        paddingRight: "6vw",
    }
});
export default function Experience() {
    const classes = useStyles();
    return (
        <section className="experience" id="experience">
            <Grid container spacing={4} className = {classes.gridContainer} justify="center">
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
