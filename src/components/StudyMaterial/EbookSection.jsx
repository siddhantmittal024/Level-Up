import React from 'react';
import ListItem from '@mui/material/ListItem';
import { Button, Container, Paper, Box, Typography } from '@mui/material';

const EbookSection = () => {
  return (
    <Container>
      <Box m={2}>
        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography variant="h4" component="div" gutterBottom align="center" sx={{padding:'15px'}}>
            The Ebook Foundation
          </Typography>
        </Box>
        <Typography variant="body2" gutterBottom>
          This project lists books and other resources grouped by genres, in
          multiple languages. The resources in English are further linked below:
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md"
              style={{ color: '#75A2C9' }}
              target="_blank"
            >
              Books grouped by programming language
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a href="https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-subjects.md">
              Books grouped by subject
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a href="https://github.com/EbookFoundation/free-programming-books/blob/main/courses/free-courses-en.md">
              Free online courses
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a href="https://github.com/EbookFoundation/free-programming-books/blob/main/more/free-programming-interactive-tutorials-en.md">
              Interactive Programming Resources
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a href="https://github.com/EbookFoundation/free-programming-books/blob/main/more/problem-sets-competitive-programming.md">
              Problem Sets, and Competitive Programming
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a href="https://github.com/EbookFoundation/free-programming-books/blob/main/casts/free-podcasts-screencasts-en.md">
              Podcasts and Screencasts
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a href="https://github.com/EbookFoundation/free-programming-books/blob/main/more/free-programming-playgrounds.md">
              Programming Playgrounds
            </a>
          </ListItem>
        </Typography>
      </Box>
    </Container>
  );
};

export default EbookSection;
