import React from 'react';
import ListItem from '@mui/material/ListItem';
import { Button, Container, Paper, Box, Typography } from '@mui/material';
const HigherEducation = () => {
  return (
    <div>
      <Typography variant="h3" align="center" component="div" gutterBottom>
        Higher Education
      </Typography>
      <Box m={2}>
        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography variant="h6" component="div" gutterBottom align="center">
            Core Subjects(CSE):
          </Typography>
        </Box>

        <Typography variant="body2" gutterBottom>
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
          <p>(Not Included In Gate)</p>
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

        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography variant="h6" component="div" align="center" gutterBottom>
            Theory of Automata
          </Typography>
        </Box>
        <Typography variant="body1" component="div" gutterBottom>
          Video Lectures:
        </Typography>
        <Typography variant="body2" gutterBottom>
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
          <p>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography variant="h6" component="div" align="center" gutterBottom>
            Operating System
          </Typography>
        </Box>
        <Typography variant="body1" component="div" gutterBottom>
          Video Lectures:
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ListItem sx={{ display: 'list-item' }}>MIT OpenSource</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Gate Lectures By Ravindra Babu Ravula
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <p>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography variant="h6" component="div" align="center" gutterBottom>
            C Programming
          </Typography>
        </Box>
        <Typography variant="body1" component="div" gutterBottom>
          Video Lectures:
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ListItem sx={{ display: 'list-item' }}>MIT OpenSource</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Programming in C by Saurabh Shukla
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <p>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Tutorial Point</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography variant="h6" component="div" align="center" gutterBottom>
            Data Structures
          </Typography>
        </Box>
        <Typography variant="body1" component="div" gutterBottom>
          Video Lectures:
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ListItem sx={{ display: 'list-item' }}>MIT OpenSource</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Data Structure by Saurabh Shukla
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <p>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Tutorial Point</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography variant="h6" component="div" align="center" gutterBottom>
            Digital Design
          </Typography>
        </Box>
        <Typography variant="body1" component="div" gutterBottom>
          Video Lectures:
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ListItem sx={{ display: 'list-item' }}>Neso Academy</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <p>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography variant="h6" component="div" align="center" gutterBottom>
            DBMS
          </Typography>
        </Box>
        <Typography variant="body1" component="div" gutterBottom>
          Video Lectures:
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ListItem sx={{ display: 'list-item' }}>
            Gate Lectures By Ravindra Babu Ravula
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <p>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography variant="h6" component="div" align="center" gutterBottom>
            Compiler Design
          </Typography>
        </Box>
        <Typography variant="body1" component="div" gutterBottom>
          Video Lectures:
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ListItem sx={{ display: 'list-item' }}>
            Gate Lectures By Ravindra Babu Ravula
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <p>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography variant="h6" component="div" align="center" gutterBottom>
            Computer Architecture
          </Typography>
        </Box>
        <Typography variant="body1" component="div" gutterBottom>
          Video Lectures:
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ListItem sx={{ display: 'list-item' }}>Well Academy</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Gate Book</ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <p>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography variant="h6" component="div" align="center" gutterBottom>
            Computer Networks
          </Typography>
        </Box>
        <Typography variant="body1" component="div" gutterBottom>
          Video Lectures:
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ListItem sx={{ display: 'list-item' }}>Well Academy</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Gate Lecture By Ravindra Babu Ravula
          </ListItem>
          <p>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>

        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography variant="h6" component="div" align="center" gutterBottom>
            Algorithm
          </Typography>
        </Box>
        <Typography variant="body1" component="div" gutterBottom>
          Video Lectures:
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ListItem sx={{ display: 'list-item' }}>Well Academy</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Knowledge GATE</ListItem>
          <ListItem sx={{ display: 'list-item' }}>NPTEL</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Easy Engineering Classes
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Gate Lecture By Ravindra Babu Ravula
          </ListItem>
          <p>Other Resources:</p>
          <ListItem sx={{ display: 'list-item' }}>Geeks for Geeks</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Lecture Notes</ListItem>
        </Typography>
      </Box>
    </div>
  );
};

export default HigherEducation;
