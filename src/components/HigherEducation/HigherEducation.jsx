import React from 'react';
import ListItem from '@mui/material/ListItem';
import { Button, Container, Paper, Box, Typography } from '@mui/material';
const HigherEducation = () => {
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
            Core Subjects(CSE) for GATE:
          </Typography>
        </Box>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            C Programming And Data Structure
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>Algorithm</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Theory Of Automata</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Compiler Design</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Operating System</ListItem>
          <ListItem sx={{ display: 'list-item' }}>DBMS</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Digital Design</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Discrete Mathematics
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>Computer Networks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Computer Architecture/ Organization
          </ListItem>
          <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
            (Not Included In Gate)
          </p>
          <ListItem sx={{ display: 'list-item' }}>Java</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Artificial Intelligence
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Software Engineering
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>Micro Processor</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Python</ListItem>
          <ListItem sx={{ display: 'list-item' }}>IOT</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Cloud Computing</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Engineering Mathematics
          </ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9', marginBottom: '15px' }}>
          <Typography
            variant="h5"
            component="div"
            align="center"
            gutterBottom
            sx={{ padding: '15px', color: 'white', textTransform: 'uppercase' }}
          >
            Theory of Automata
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="div"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '15px'
          }}
        >
          Video Lectures:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            MIT OpenSource
            (https://www.youtube.com/channel/UCEBb1b_L6zDS3xTUrIALZOw)
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Gate Lectures By Ravindra Babu Ravula
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>Well Academy</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Neso Academy</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Unacademy Computer Science
          </ListItem>
          <p style={{ fontSize: '20px' }}>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9', marginBottom: '15px' }}>
          <Typography
            variant="h5"
            component="div"
            align="center"
            gutterBottom
            sx={{ padding: '15px', color: 'white', textTransform: 'uppercase' }}
          >
            Operating System
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="div"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '15px'
          }}
        >
          Video Lectures:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>MIT OpenSource</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Gate Lectures By Ravindra Babu Ravula
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <p style={{ fontSize: '20px' }}>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9', marginBottom: '15px' }}>
          <Typography
            variant="h5"
            component="div"
            align="center"
            gutterBottom
            sx={{ padding: '15px', color: 'white', textTransform: 'uppercase' }}
          >
            C Programming
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="div"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '15px'
          }}
        >
          Video Lectures:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>MIT OpenSource</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Programming in C by Saurabh Shukla
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <p style={{ fontSize: '20px' }}>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Tutorial Point</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9', marginBottom: '15px' }}>
          <Typography
            variant="h5"
            component="div"
            align="center"
            gutterBottom
            sx={{ padding: '15px', color: 'white', textTransform: 'uppercase' }}
          >
            Data Structures
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="div"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '15px'
          }}
        >
          Video Lectures:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>MIT OpenSource</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Data Structure by Saurabh Shukla
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <p style={{ fontSize: '20px' }}>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Tutorial Point</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9', marginBottom: '15px' }}>
          <Typography
            variant="h5"
            component="div"
            align="center"
            gutterBottom
            sx={{ padding: '15px', color: 'white', textTransform: 'uppercase' }}
          >
            Digital Design
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="div"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '15px'
          }}
        >
          Video Lectures:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>Neso Academy</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <p style={{ fontSize: '20px' }}>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9', marginBottom: '15px' }}>
          <Typography
            variant="h5"
            component="div"
            align="center"
            gutterBottom
            sx={{ padding: '15px', color: 'white', textTransform: 'uppercase' }}
          >
            DBMS
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="div"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '15px'
          }}
        >
          Video Lectures:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            Gate Lectures By Ravindra Babu Ravula
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <p style={{ fontSize: '20px' }}>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9', marginBottom: '15px' }}>
          <Typography
            variant="h5"
            component="div"
            align="center"
            gutterBottom
            sx={{ padding: '15px', color: 'white', textTransform: 'uppercase' }}
          >
            Compiler Design
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="div"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '15px'
          }}
        >
          Video Lectures:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            Gate Lectures By Ravindra Babu Ravula
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <p style={{ fontSize: '20px' }}>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9', marginBottom: '15px' }}>
          <Typography
            variant="h5"
            component="div"
            align="center"
            gutterBottom
            sx={{ padding: '15px', color: 'white', textTransform: 'uppercase' }}
          >
            Computer Architecture
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="div"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '15px'
          }}
        >
          Video Lectures:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>Well Academy</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Gate Book</ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <p style={{ fontSize: '20px' }}>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9', marginBottom: '15px' }}>
          <Typography
            variant="h5"
            component="div"
            align="center"
            gutterBottom
            sx={{ padding: '15px', color: 'white', textTransform: 'uppercase' }}
          >
            Computer Networks
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="div"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '15px'
          }}
        >
          Video Lectures:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>Well Academy</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Gate Lecture By Ravindra Babu Ravula
          </ListItem>
          <p style={{ fontSize: '20px' }}>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9', marginBottom: '15px' }}>
          <Typography
            variant="h5"
            component="div"
            align="center"
            gutterBottom
            sx={{ padding: '15px', color: 'white', textTransform: 'uppercase' }}
          >
            Algorithms
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="div"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '15px'
          }}
        >
          Video Lectures:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>Well Academy</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Gate Lecture By Ravindra Babu Ravula
          </ListItem>
          <p style={{ fontSize: '20px' }}>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>
      </Box>
    </Container>
  );
};

export default HigherEducation;
