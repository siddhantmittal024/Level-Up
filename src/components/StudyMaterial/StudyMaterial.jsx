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

    // <div>
    //   <Typography variant="h3" align="center" component="div" gutterBottom>
    //     Study Material
    //   </Typography>
    //   <Box m={2}>
    //     <Box sx={{ backgroundColor: '#75A2C9' }}>
    //       <Typography variant="h6" component="div" gutterBottom align="center">
    //         The Ebook Foundation
    //       </Typography>
    //     </Box>
    //     <Typography variant="body2" gutterBottom>
    //       This project lists books and other resources grouped by genres, in
    //       multiple languages. The resources in English are further linked below:
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md">
    //           Books grouped by programming language
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-subjects.md">
    //           Books grouped by subject
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://github.com/EbookFoundation/free-programming-books/blob/main/courses/free-courses-en.md">
    //           Free online courses
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://github.com/EbookFoundation/free-programming-books/blob/main/more/free-programming-interactive-tutorials-en.md">
    //           Interactive Programming Resources
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://github.com/EbookFoundation/free-programming-books/blob/main/more/problem-sets-competitive-programming.md">
    //           Problem Sets, and Competitive Programming
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://github.com/EbookFoundation/free-programming-books/blob/main/casts/free-podcasts-screencasts-en.md">
    //           Podcasts and Screencasts
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://github.com/EbookFoundation/free-programming-books/blob/main/more/free-programming-playgrounds.md">
    //           Programming Playgrounds
    //         </a>
    //       </ListItem>
    //     </Typography>
    //   </Box>

      // <Box m={2}>
      //   <Box sx={{ backgroundColor: '#75A2C9' }}>
      //     <Typography variant="h6" component="div" gutterBottom align="center">
      //       Questions to ask the company during your interview:
      //     </Typography>
      //   </Box>
      //   <Typography variant="body2" gutterBottom>
      //     The Role:
      //     <ListItem sx={{ display: 'list-item' }}>
      //       What's the on-call plan/schedule? (what's the pay for standby and
      //       call-out)
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       Are there any specific goals for me?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       What are the tasks I would do on a usual day?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       What does onboarding look like?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       What are the expected/core work hours?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       How can I develop in my new role / what opportunities are offered?
      //     </ListItem>
      //     Tech
      //     <ListItem sx={{ display: 'list-item' }}>
      //       How do you test code?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       How do you track bugs?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       Are all developers allowed to have local admin access to their
      //       computers?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       Tell me about your technical principles or vision.
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       Is there a standardized development environment? Is it enforced?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       How do you monitor projects?
      //     </ListItem>
      //     The Team
      //     <ListItem sx={{ display: 'list-item' }}>
      //       How is the work organized?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       Who sets the priorities / schedule?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       Do you use any tools for project organization? What is your
      //       experience with them?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       Would there be a regular 1-on-1 with my manager?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       What does a code review look like here?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       How big are the teams?
      //     </ListItem>
      //     Your Potential Coworkers
      //     <ListItem sx={{ display: 'list-item' }}>
      //       Who do developers tend to learn from?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       What do you like best about working there?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       What do you like least?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       What would you change if you could?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       How long has the longest team member been there?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       If it's a small team, has there been experiences of conflicting
      //       personalities and how was this dealt with?
      //     </ListItem>
      //     The Company
      //     <ListItem sx={{ display: 'list-item' }}>
      //       Why is the company hiring? (product growth / new product /
      //       fluctuation / ...)
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       Is there a budget for getting certifications?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       What kind of social events does the team/company host and are these
      //       attended by everyone?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       Can I contribute to FOSS projects? Are there any approvals needed?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       What does clean code mean to the majority of developers here?
      //     </ListItem>
      //     <ListItem sx={{ display: 'list-item' }}>
      //       Is there a Sports / Team building Activity?
      //     </ListItem>
      //   </Typography>
      // </Box>

    //   <Box m={2}>
    //     <Box sx={{ backgroundColor: '#75A2C9' }}>
    //       <Typography variant="h6" component="div" gutterBottom align="center">
    //         List of Research Internships for Undergraduate Students:
    //       </Typography>
    //     </Box>
    //     <Typography variant="body2" gutterBottom>
    //       The following are some global research internship positions: Canada:
    //       <ListItem sx={{ display: 'list-item' }}>
    //         MITACS Globalink, for research positions in Canada.
    //       </ListItem>
    //       US:
    //       <ListItem sx={{ display: 'list-item' }}>
    //         Santa Fe Institute Summer Research Experience
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         NASA - CalTech Summer Undergraduate Research Fellowship (SURF), for
    //         research positions at Jet Propulsion Laboratory, California
    //         Institute of Technology.
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         Robotics Institute for Summer Scholars, CMU
    //       </ListItem>
    //       SWITZERLAND:
    //       <ListItem sx={{ display: 'list-item' }}>
    //         Research fellowship at ETH Zurich
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         CERN Summer Student Program
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         E3, EPFL (Switzerland)
    //       </ListItem>
    //       GERMANY:
    //       <ListItem sx={{ display: 'list-item' }}>
    //         Max Planck Institute for Software Systems
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         Warwick Statistics Internship Scheme, University of Warwick
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         DAAD WISE Scholarship
    //       </ListItem>
    //       UK:
    //       <ListItem sx={{ display: 'list-item' }}>
    //         DSSGx UK Summer Fellowship, University of Warwick
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         Visual Geometry Group
    //       </ListItem>
    //       INDIA:
    //       <ListItem sx={{ display: 'list-item' }}>
    //         ICTS LONG TERM VISITING STUDENTS PROGRAM for both International and
    //         Indian Students. Aims to provide opportunities to students of
    //         science, mathematics and engineering to spend a longer period of
    //         time (1 or 2 semesters).
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         ICTS SN BHATT Memorial Excellence Fellowship for Undergraduate
    //         students of science, mathematics and engineering, who are in their
    //         third, fourth or fifth year of the program are eligible to apply.
    //       </ListItem>
    //       SOUTH KOREA:
    //       <ListItem sx={{ display: 'list-item' }}>
    //         SPIKE @ UNIST, Summer Program for Internship and Korean Experience
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         SPIKE@UNIST (South Korea)
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         GIST Global Internship Program (South Korea)
    //       </ListItem>
    //       TAIWAN:
    //       <ListItem sx={{ display: 'list-item' }}>
    //         NTHU Summer Internship Program
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         UROP International, RWTH Aachen
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         TIGP-IIP, Academia Sincia, Taiwan
    //       </ListItem>
    //       JAPAN:
    //       <ListItem sx={{ display: 'list-item' }}>NIMS (Japan)</ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         Hennge Global Internship Program, for remote internship in a
    //         Japan-based tech start-up.
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         OIST Research Internship Program, Okinawa Institute of Science and
    //         Technology
    //       </ListItem>
    //     </Typography>
    //   </Box>

    //   <Box m={2}>
    //     <Box sx={{ backgroundColor: '#75A2C9' }}>
    //       <Typography variant="h6" component="div" gutterBottom align="center">
    //         Collection of Open Source Events and Hackathons on a monthly basis:
    //       </Typography>
    //     </Box>
    //     <Typography variant="body2" gutterBottom>
    //       January:
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://careers.google.com/students/engineering-and-technical-internships/">
    //           STEP(Google)
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://summerofcode.withgoogle.com/">
    //           Google Summer of Code
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.openmainframeproject.org/projects/mentorship-program">
    //           Open Mainframe Project Mentorship Program- Linux Foundation{' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://research.redhat.com/red-hat-open-source-contest/">
    //           Red Hat Open Source Contest{' '}
    //         </a>
    //       </ListItem>
    //       March
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.codess.net/about-codess/">Codess</a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://sites.google.com/view/summerofearthengine/home?authuser=0">
    //           Google Summer of Earth Engine{' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://railsgirlssummerofcode.org/">
    //           Rails Girls Summer of Code{' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://wiki.linuxfoundation.org/lkmp">
    //           Linux Kernel Mentorship Program
    //         </a>
    //       </ListItem>
    //       April
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://rare-technologies.com/incubator/">
    //           RARE Technologies Student Incubator Programme{' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.igalia.com/2020/02/03/The-2020-Web-Engines-Hackfest-is-happening-in-May.html">
    //           Igalia Web Engines Hackfest{' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://lab.codingblocks.com/boss">
    //           BOSS - Bountiful Open Source Summer{' '}
    //         </a>
    //       </ListItem>
    //       May
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://developers.google.com/season-of-docs">
    //           Season of Docs{' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.esa.int/Enabling_Support/Space_Engineering_Technology/SOCIS_The_ESA_Summer_of_Code_in_Space">
    //           ESA Summer of Code in Space{' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.oss.kr/en_oss_world_challenage">
    //           OSS World Challenge
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="http://sigmm.org/Resources/software/ossc">
    //           ACM MM Open Source Software Competition{' '}
    //         </a>
    //       </ListItem>
    //       June
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://wiki.linuxfoundation.org/lkmp">
    //           Linux Kernel Mentorship Programlink{' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="http://pclubsummerofcode.in/">PClub Summer Of Code </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://summer.iscas.ac.cn/">
    //           Summer ISCAS Open Source Promotion Plan{' '}
    //         </a>
    //       </ListItem>
    //       July
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://alibaba.github.io/">Alibaba Summer of Code</a>
    //       </ListItem>
    //       August
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://hackinout.co/">InOut Hackathon </a>
    //       </ListItem>
    //       September
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://codeheat.org/">
    //           CodeHeat Coding Contest of FOSSASIA{' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="http://mdg.iitr.ac.in/soc.html">
    //           MDG Season of Code- IIT-R{' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://slop.dscdaiict.in/">
    //           Semester Long Project- DAIICT{' '}
    //         </a>
    //       </ListItem>
    //       October
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://hacktoberfest.digitalocean.com/">Hacktoberfest </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://in.pycon.org/2020/">Pycon</a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://wiki.linuxfoundation.org/lkmp">
    //           Linux Kernel Mentorship Programlink{' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://halite.io/">Halite AI Bot Challenge </a>
    //       </ListItem>
    //       November
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.ecell.in/esummit/ihack/"> I_Hack (IIT-B) </a>
    //       </ListItem>
    //       December
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://www.linkedin.com/company/smart-india-hackathon-2020/">
    //           SIH (Smart India Hackathon){' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://kwoc.kossiitkgp.org/">
    //           KWoC (Kharagpur Winter of Code){' '}
    //         </a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://season.kde.org/">KDE Student Programs</a>
    //       </ListItem>
    //       <ListItem sx={{ display: 'list-item' }}>
    //         <a href="https://24pullrequests.com/about">24 Pull Requests </a>
    //       </ListItem>
    //     </Typography>
    //   </Box>

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
