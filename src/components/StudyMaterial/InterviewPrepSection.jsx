import React from 'react';
import ListItem from '@mui/material/ListItem';
import { Button, Container, Paper, Box, Typography } from '@mui/material';

const InterviewPrepSection = () => {
  return (
    <Container>
      <Box m={2} sx={{ marginTop: '25px' }}>
        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            align="center"
            sx={{ padding: '15px', color: 'white', textTransform: 'uppercase' }}
          >
            Interview Preparation
          </Typography>
        </Box>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '5px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          Awesome curated lists classified by topics
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="http://codeforces.com/blog/entry/13529"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Good Blog Post Resources about Algorithm and Data Structures -
              Codeforces
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="http://codeforces.com/blog/entry/57282"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              All of the good tutorials found on codeforces - Codeforces{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.quora.com/What-is-a-list-of-data-structures-that-a-competitive-programmer-must-know/answer/Sameer-Gulati-3"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Data Structures and Algorithms - CodeChef Discuss
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.geeksforgeeks.org/how-to-prepare-for-acm-icpc/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              How to prepare for ACM - ICPC? - GeeksforGeeks
            </a>
          </ListItem>
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '5px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          Awesome websites with great tutorials
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.topcoder.com/community/data-science/data-science-tutorials/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Topcoder Data Science Tutorials
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="http://e-maxx.ru/algo/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              E-Maxx (Russian), (English)
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Algorithms - GeeksforGeeks
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="http://wcipeg.com/wiki/Special:AllPages"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              PEGWiki
            </a>
          </ListItem>
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '5px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          Consider beginning your competitive programming journey with these
          awesome courses!
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.hackerearth.com/practice/codemonk/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Code Monk, by HackerEarth
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="http://web.stanford.edu/class/cs97si/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Stanford CS 97SI: Introduction to Competitive Programming Contests
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.edx.org/course/how-to-win-coding-competitions-secrets-of-champions-0"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              How to Win Coding Competitions: Secrets of Champions
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.youtube.com/playlist?list=PLi0ZM-RCX5nsTc2Z6woHr5qoF6n3b-thO"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Codechef's Indian Programming Camp
            </a>
          </ListItem>
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '5px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          Open Courses for Algorithms and Data Structures
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://github.com/prakhar1989/awesome-courses"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              prakhar1989/awesome-courses#algorithms
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              MIT SMA 5503: Introduction to Algorithms
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="http://jeffe.cs.illinois.edu/teaching/algorithms/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              UIUC Algorithm Course
            </a>
          </ListItem>
        </Typography>
      </Box>
    </Container>
  );
};

export default InterviewPrepSection;
