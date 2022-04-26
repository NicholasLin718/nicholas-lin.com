import React from 'react'
import TimeLineCard from "../cards/TimeLineCard";
import CountdownBuddyCard from "../cards/CountdownBuddyCard";
import PersonalWebsiteCard from "../cards/PersonalWebsiteCard";
import BoggleCard from "../cards/BoggleCard";
import EphphathaCard from "../cards/EphphathaCard";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Col, Container, Row} from "react-bootstrap";
import { PROJECTS } from "./ProjectsList";
import ProjectCards from "../template/ProjectCards";
import "./projects.scss";

// const ExperienceCards = styled(Col)`
//   display: flex;
//   padding-bottom: 20px;
// `;

// class Projects extends React.Component{
//     render(){
//         return(
//             <div className="projects" id="projects">

//                 <div className="max-width">
//                     <Container>
//                         <Row>
//                             {/* {PROJECTS.map((project) => {
//                             return (
//                                 <Col xs = {4} md = {3}>
//                                     <ProjectCards
//                                         key={project.name}
//                                         page="projects"
//                                         experience={project}
//                                         height="350px"
//                                         link={project.link}
//                                     />
//                                 </Col>
//                             );
//                             })} */}
//                             <Col xs = {6} md = {4}>
//                                 <TimeLineCard className = "cards"/>
//                             </Col>
//                             <Col xs = {4} md = {3}>
//                                 <TimeLineCard className = "cards"/>
//                             </Col>
//                             <Col xs = {4} md = {3}>
//                                 <TimeLineCard className = "cards"/>
//                             </Col>
//                             <Col xs = {4} md = {3}>
//                                 <TimeLineCard className = "cards"/>
//                             </Col>
//                         </Row>
//                         <br />
//                         <br />
//                     </Container>
//                 </div>
                    
//                 {/* <div className="project-cards">
//                     <TimeLineCard className = "cards"/>
//                     <CountdownBuddyCard className = "cards"/>
//                     <PersonalWebsiteCard className = "cards"/>
//                     <BoggleCard className = "cards"/>
//                     <EphphathaCard className = "cards"/>
//                 </div> */}
//                 <a className="button" href="#home"><i class="fas fa-chevron-up" id = "arrow"></i></a>
//             </div>
//         );
//     }
// }
export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="max-width">
                <div className= "header">
                    <h3 style = {{fontFamily: "Poppins, sans-serif"}}>Projects</h3>
                    <h6 style = {{fontFamily: "Open Sans, sans-serif"}}>Here you can check out some of my past tech related projects and the technical skills I developed, and you can also watch some of the demo videos available!</h6>
                </div>
                <Grid container spacing={4} className = "grid" >
                    <Grid item xs = {12} sm ={6} md={4}>
                        <TimeLineCard className = "cards"/>
                    </Grid>
                    <Grid item xs = {12} sm ={6} md={4}>
                        <CountdownBuddyCard className = "cards"/>
                    </Grid>
                    <Grid item xs = {12} sm ={6} md={4}>
                        <PersonalWebsiteCard className = "cards"/>
                    </Grid>
                    <Grid  item xs = {12} sm ={6} md={4}>
                        <BoggleCard className = "cards"/>
                    </Grid>
                    <Grid  item xs = {12} sm ={6} md={4}>
                        <EphphathaCard className = "cards"/>
                    </Grid>
                </Grid>
            </div>
            <a className="button" href="#home"><i class="fas fa-chevron-up" id = "arrow"></i></a>
        </section>
        

        
    )
}