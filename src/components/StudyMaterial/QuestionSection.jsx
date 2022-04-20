import React from 'react';
import ListItem from '@mui/material/ListItem';
import { Button, Container, Paper, Box, Typography } from '@mui/material';

const QuestionsToAskSection = () => {
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
            Questions to ask the company during your interview:
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
          The Role:
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
            What's the on-call plan/schedule? (what's the pay for standby and
            call-out)
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Are there any specific goals for me?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            What are the tasks I would do on a usual day?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            What does onboarding look like?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            What are the expected/core work hours?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            How can I develop in my new role / what opportunities are offered?
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
          Tech:
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
            How do you test code?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            How do you track bugs?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Are all developers allowed to have local admin access to their
            computers?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Tell me about your technical principles or vision.
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Is there a standardized development environment? Is it enforced?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            How do you monitor projects?
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
          The Team:
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
            How is the work organized?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Who sets the priorities / schedule?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Do you use any tools for project organization? What is your
            experience with them?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Would there be a regular 1-on-1 with my manager?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            What does a code review look like here?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            How big are the teams?
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
          Your Potential Coworkers:
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
            Who do developers tend to learn from?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            What do you like best about working there?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            What do you like least?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            What would you change if you could?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            How long has the longest team member been there?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            If it's a small team, has there been experiences of conflicting
            personalities and how was this dealt with?
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
          The Company:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '25px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            Why is the company hiring? (product growth / new product /
            fluctuation / ...)
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Is there a budget for getting certifications?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            What kind of social events does the team/company host and are these
            attended by everyone?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Can I contribute to FOSS projects? Are there any approvals needed?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            What does clean code mean to the majority of developers here?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Is there a Sports / Team building Activity?
          </ListItem>
        </Typography>
      </Box>
    </Container>
  );
};

export default QuestionsToAskSection;
