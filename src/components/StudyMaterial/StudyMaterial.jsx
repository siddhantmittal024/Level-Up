import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import SectionCard from '../SectionCard/SectionCard';
import { StudyMaterialTitles } from '../../utils/cardTitles';
import { Container } from '@mui/material';

const StudyMaterial = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }} my={{ xs: 6, sm: 8, md: 6 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 7 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          alignItems="center"
        >
          {StudyMaterialTitles.map((item, index) => {
            const url = item.title.replaceAll(' ', '-').toLowerCase();
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Link to={`/study-material/${url}`} style={{ textDecoration: 'none' }}>
                  <SectionCard title={item.title} imageUrl={item.imageUrl} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>


    //   <Box m={2}>
    //     <Box sx={{ backgroundColor: '#75A2C9' }}>
    //       <Typography variant="h6" component="div" gutterBottom align="center">
    //         Interview Preparation
    //       </Typography>
    //     </Box>
    //     <Typography variant="body2" gutterBottom>
    //       Awesome curated lists classified by topics
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="http://codeforces.com/blog/entry/13529">
    //           Good Blog Post Resources about Algorithm and Data Structures -
    //           Codeforces
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="http://codeforces.com/blog/entry/57282">
    //           All of the good tutorials found on codeforces - Codeforces{' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.quora.com/What-is-a-list-of-data-structures-that-a-competitive-programmer-must-know/answer/Sameer-Gulati-3">
    //           Data Structures and Algorithms - CodeChef Discuss
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.geeksforgeeks.org/how-to-prepare-for-acm-icpc/">
    //           How to prepare for ACM - ICPC? - GeeksforGeeks
    //         </a>
    //       </ListItem>
    //       Awesome websites with great tutorials
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.topcoder.com/community/data-science/data-science-tutorials/">
    //           Topcoder Data Science Tutorials
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="http://e-maxx.ru/algo/">E-Maxx (Russian), (English)</a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">
    //           Algorithms - GeeksforGeeks
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="http://wcipeg.com/wiki/Special:AllPages">PEGWiki</a>
    //       </ListItem>
    //       Consider beginning your competitive programming journey with these
    //       awesome courses!
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.hackerearth.com/practice/codemonk/">
    //           Code Monk, by HackerEarth
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="http://web.stanford.edu/class/cs97si/">
    //           Stanford CS 97SI: Introduction to Competitive Programming Contests
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.edx.org/course/how-to-win-coding-competitions-secrets-of-champions-0">
    //           How to Win Coding Competitions: Secrets of Champions
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.youtube.com/playlist?list=PLi0ZM-RCX5nsTc2Z6woHr5qoF6n3b-thO">
    //           Codechef's Indian Programming Camp
    //         </a>
    //       </ListItem>
    //       Open Courses for Algorithms and Data Structures
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://github.com/prakhar1989/awesome-courses">
    //           prakhar1989/awesome-courses#algorithms
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/">
    //           MIT SMA 5503: Introduction to Algorithms
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="http://jeffe.cs.illinois.edu/teaching/algorithms/">
    //           UIUC Algorithm Course
    //         </a>
    //       </ListItem>
    //     </Typography>
    //   </Box>
    // </div>
  );
};

export default StudyMaterial;
