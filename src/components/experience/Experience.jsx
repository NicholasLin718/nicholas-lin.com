import React from 'react';
import { Grid } from '@material-ui/core';
import { EXPERIENCE } from './ExperienceLists';
import ExperienceCards from '../template/ExperienceCards';
import { makeStyles } from '@material-ui/core/styles';

const experienceCardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 650,
  },
  media: {
    height: '259px',
    width: '100%',
  },
  contentHeight: {
    maxHeight: 280,
    minHeight: 280,
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
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Experience() {
  const style = experienceCardStyles();

  return (
    <section
      className="bg-gray-900 text-white py-16"
      id="experience"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-blue-500">Experience</h3>
          <h6 className="text-lg mt-4">
            I've had an opportunity to join many amazing organizations. Below you can explore and dive into some of my past experiences and the skills I've gained from them!
          </h6>
        </div>
        <Grid container spacing={4}>
          {EXPERIENCE.map((exp) => (
            <Grid item xs={12} sm={6} md={6} key={exp.name}>
              <ExperienceCards
                className="shadow-lg rounded-lg overflow-hidden"
                experience={exp}
                height="350px"
                demoLink={exp.DemoLink}
                style={style}
                footer={exp.footer}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}
