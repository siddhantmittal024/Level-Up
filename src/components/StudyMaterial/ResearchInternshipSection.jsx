import React from 'react';
import ListItem from '@mui/material/ListItem';
import { Button, Container, Paper, Box, Typography } from '@mui/material';

const ResearchIntershipsSection = () => {
  return (
    <Container>
      <Box m={2} sx={{ marginTop: '25px' }}>
        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            align="center"
            sx={{ padding: '18px', color: 'white', textTransform: 'uppercase' }}
          >
            List of Research Internships for Undergraduate Students:
          </Typography>
        </Box>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '20px',
            marginBottom: '20px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          The following are some global research internship positions:
        </Typography>

        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '5px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          Canada:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '17px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            MITACS Globalink, for research positions in Canada.
          </ListItem>
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '5px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          US:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '17px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            Santa Fe Institute Summer Research Experience
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            NASA - CalTech Summer Undergraduate Research Fellowship (SURF), for
            research positions at Jet Propulsion Laboratory, California
            Institute of Technology.
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Robotics Institute for Summer Scholars, CMU
          </ListItem>
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '5px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          SWITZERLAND:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '17px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            Research fellowship at ETH Zurich
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            CERN Summer Student Program
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            E3, EPFL (Switzerland)
          </ListItem>
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '5px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          GERMANY:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '17px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            Max Planck Institute for Software Systems
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Warwick Statistics Internship Scheme, University of Warwick
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            DAAD WISE Scholarship
          </ListItem>
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '5px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          UK:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '17px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            DSSGx UK Summer Fellowship, University of Warwick
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Visual Geometry Group
          </ListItem>
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '5px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          INDIA:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '17px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            ICTS LONG TERM VISITING STUDENTS PROGRAM for both International and
            Indian Students. Aims to provide opportunities to students of
            science, mathematics and engineering to spend a longer period of
            time (1 or 2 semesters).
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            ICTS SN BHATT Memorial Excellence Fellowship for Undergraduate
            students of science, mathematics and engineering, who are in their
            third, fourth or fifth year of the program are eligible to apply.
          </ListItem>
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '5px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          SOUTH KOREA:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '17px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            SPIKE @ UNIST, Summer Program for Internship and Korean Experience
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            SPIKE@UNIST (South Korea)
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            GIST Global Internship Program (South Korea)
          </ListItem>
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '5px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          TAIWAN:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '17px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            NTHU Summer Internship Program
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            UROP International, RWTH Aachen
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            TIGP-IIP, Academia Sincia, Taiwan
          </ListItem>
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '18px',
            marginBottom: '5px',
            marginTop: '15px',
            fontWeight: 'bold'
          }}
        >
          JAPAN:
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontSize: '17px',
            marginBottom: '15px'
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>NIMS (Japan)</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Hennge Global Internship Program, for remote internship in a
            Japan-based tech start-up.
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            OIST Research Internship Program, Okinawa Institute of Science and
            Technology
          </ListItem>
        </Typography>
      </Box>
    </Container>
  );
};

export default ResearchIntershipsSection;
