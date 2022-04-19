import React from 'react';
import ListItem from '@mui/material/ListItem';
import { Button, Container, Paper, Box, Typography } from '@mui/material';

const EbookSection = () => {
  return (
    <Container>
      <Box mt={4}>
        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            align="center"
            sx={{ padding: '15px', color: 'white', textTransform: 'uppercase' }}
          >
            The Ebook Foundation
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{ fontSize: '19px', marginBottom: '15px', marginTop: '25px' }}
          gutterBottom
        >
          This project lists books and other resources grouped by genres, in
          multiple languages. The resources in English are further linked below:
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '19px' }} gutterBottom>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Books grouped by programming language
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-subjects.md"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Books grouped by subject
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://github.com/EbookFoundation/free-programming-books/blob/main/courses/free-courses-en.md"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Free online courses
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://github.com/EbookFoundation/free-programming-books/blob/main/more/free-programming-interactive-tutorials-en.md"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Interactive Programming Resources
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://github.com/EbookFoundation/free-programming-books/blob/main/more/problem-sets-competitive-programming.md"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Problem Sets, and Competitive Programming
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://github.com/EbookFoundation/free-programming-books/blob/main/casts/free-podcasts-screencasts-en.md"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Podcasts and Screencasts
            </a>
          </ListItem>
          <ListItem
            sx={{
              display: 'list-item'
            }}
          >
            <a
              href="https://github.com/EbookFoundation/free-programming-books/blob/main/more/free-programming-playgrounds.md"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Programming Playgrounds
            </a>
          </ListItem>
        </Typography>
      </Box>
    </Container>
  );
};

export default EbookSection;
