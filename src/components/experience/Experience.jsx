import React from 'react'
import ShadCard from "../cards/ShadCard";
import CatalystCard from "../cards/Catalyst";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import "./experience.scss";
const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "2vw",
        paddingRight: "2vw",
    }
});
export default function Experience() {
    const classes = useStyles();
    return (
        <section className="experience" id="experience">
            <Grid container spacing={4} className = {classes.gridContainer} justify="center">
                <Grid item xs = {12} sm ={6} md={4}>
                    <ShadCard className = "cards"/>
                </Grid>
                <Grid item xs = {12} sm ={6} md={4}>
                    <CatalystCard className = "cards"/>
                </Grid>
            </Grid>
        </section>
        
    )
}
