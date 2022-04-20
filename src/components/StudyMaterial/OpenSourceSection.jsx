import React from 'react';
import ListItem from '@mui/material/ListItem';
import { Button, Container, Paper, Box, Typography } from '@mui/material';

const OpenSourceSection = () => {
  return (
    <Container>
      <Box m={2} sx={{ marginTop: '25px' }}>
        <Box sx={{ backgroundColor: '#75A2C9' }}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            align="center"
            sx={{ padding: '12px', color: 'white', textTransform: 'uppercase' }}
          >
            Collection of Open Source Events and Hackathons on a monthly basis:
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
          January
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://careers.google.com/students/engineering-and-technical-internships/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              STEP(Google)
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://summerofcode.withgoogle.com/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Google Summer of Code
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.openmainframeproject.org/projects/mentorship-program"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Open Mainframe Project Mentorship Program- Linux Foundation{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://research.redhat.com/red-hat-open-source-contest/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Red Hat Open Source Contest{' '}
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
          March
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.codess.net/about-codess/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Codess
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://sites.google.com/view/summerofearthengine/home?authuser=0"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Google Summer of Earth Engine{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://railsgirlssummerofcode.org/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Rails Girls Summer of Code{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://wiki.linuxfoundation.org/lkmp"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Linux Kernel Mentorship Program
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
          April
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://rare-technologies.com/incubator/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              RARE Technologies Student Incubator Programme{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.igalia.com/2020/02/03/The-2020-Web-Engines-Hackfest-is-happening-in-May.html"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Igalia Web Engines Hackfest{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://lab.codingblocks.com/boss"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              BOSS - Bountiful Open Source Summer{' '}
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
          May
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://developers.google.com/season-of-docs"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Season of Docs{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.esa.int/Enabling_Support/Space_Engineering_Technology/SOCIS_The_ESA_Summer_of_Code_in_Space"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              ESA Summer of Code in Space{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.oss.kr/en_oss_world_challenage"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              OSS World Challenge
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="http://sigmm.org/Resources/software/ossc"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              ACM MM Open Source Software Competition{' '}
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
          June
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://wiki.linuxfoundation.org/lkmp"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Linux Kernel Mentorship Programlink{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="http://pclubsummerofcode.in/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              PClub Summer Of Code{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://summer.iscas.ac.cn/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Summer ISCAS Open Source Promotion Plan{' '}
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
          July
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://alibaba.github.io/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Alibaba Summer of Code
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
          August
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://hackinout.co/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              InOut Hackathon{' '}
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
          September
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://codeheat.org/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              CodeHeat Coding Contest of FOSSASIA{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="http://mdg.iitr.ac.in/soc.html"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              MDG Season of Code- IIT-R{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://slop.dscdaiict.in/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Semester Long Project- DAIICT{' '}
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
          October
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://hacktoberfest.digitalocean.com/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Hacktoberfest{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://in.pycon.org/2020/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Pycon
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://wiki.linuxfoundation.org/lkmp"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Linux Kernel Mentorship Programlink{' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://halite.io/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              Halite AI Bot Challenge{' '}
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
          November
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.ecell.in/esummit/ihack/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              {' '}
              I_Hack (IIT-B){' '}
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
          December
        </Typography>
        <Typography sx={{ fontSize: '17px' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://www.linkedin.com/company/smart-india-hackathon-2020/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              SIH (Smart India Hackathon){' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://kwoc.kossiitkgp.org/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              KWoC (Kharagpur Winter of Code){' '}
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://season.kde.org/"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              KDE Student Programs
            </a>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <a
              href="https://24pullrequests.com/about"
              style={{ color: '#75A2C9', textDecoration: 'none' }}
              target="_blank"
            >
              24 Pull Requests{' '}
            </a>
          </ListItem>
        </Typography>
      </Box>
    </Container>
  );
};

export default OpenSourceSection;
