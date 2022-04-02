import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { getCurrentUserData } from './redux/userSlice';
import { authentication } from './firebase/firebase.util';

import Homepage from './components/Homepage/Homepage';
import Dashboard from './components/Dashboards';
import { PublicRoute } from './components/routers/PublicRoute';
import { PrivateRoute } from './components/routers/PrivateRoute';
import Jobs from './components/Jobs';
import Navbar from './components/Navbar/Navbar';
import Internships from './components/Internships';
import OtherOpportunities from './components/OtherOpportunities';
import HigherEducation from './components/HigherEducation/HigherEducation';
import StudyMaterial from './components/StudyMaterial/StudyMaterial';
import OffCampusJobs from './components/Jobs/Off-Campus-Jobs/OffCampusJobs';
import OnCampusJobs from './components/Jobs/OnCampusJobs';
import CreateJob from './components/Jobs/Off-Campus-Jobs/CreateJob';
import ViewJob from './components/Jobs/Off-Campus-Jobs/ViewJob';
import UpdateJob from './components/Jobs/Off-Campus-Jobs/UpdateJob';
import OffCampusInternships from './components/Internships/Off-Campus-Internships/OffCampusInternships';
import CreateInternship from './components/Internships/Off-Campus-Internships/createInternship';
import ViewInternship from './components/Internships/Off-Campus-Internships/ViewInternship';
import UpdateInternship from './components/Internships/Off-Campus-Internships/UpdateInternship';

function App() {
  const dispatch = useDispatch();
  const [isAuthenticated, setAuthenticated] = useState(true);
  const [userName, setUserName] = useState(null);
  //const userName = useSelector(state => state.users.currentUser.name);

  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      if (user) {
        dispatch(getCurrentUserData(user.uid));
        setUserName(user.displayName);
        setAuthenticated(true);
        //console.log(user);
      } else {
        setAuthenticated(false);
        setUserName(null);
      }
    });
  }, []);

  return (
    <>
      <Router>
        {userName ? <Navbar name={userName} /> : null}
        <div className="App">
          <Switch>
            <PublicRoute exact path="/" component={Homepage} />
            <PrivateRoute
              exact
              path="/dashboard"
              component={Dashboard}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute exact path="/jobs" component={Jobs} />
            <PrivateRoute exact path="/internships" component={Internships} />
            <PrivateRoute
              exact
              path="/other-opportunities"
              component={OtherOpportunities}
            />
            <PrivateRoute
              exact
              path="/higher-education"
              component={HigherEducation}
            />
            <PrivateRoute
              exact
              path="/study-material"
              component={StudyMaterial}
            />

            <PrivateRoute
              exact
              path="/jobs/on-campus"
              component={OnCampusJobs}
            />

            <PrivateRoute
              exact
              path="/jobs/off-campus"
              component={OffCampusJobs}
            />

            <PrivateRoute
              exact
              path="/jobs/off-campus/add-job"
              component={CreateJob}
            />

            <PrivateRoute
              exact
              path="/jobs/off-campus/update/:id"
              component={UpdateJob}
            />

            <PrivateRoute
              exact
              path="/jobs/off-campus/:id"
              component={ViewJob}
            />

            <PrivateRoute
              exact
              path="/internships/off-campus"
              component={OffCampusInternships}
            />

            <PrivateRoute
              exact
              path="/internships/off-campus/add-internship"
              component={CreateInternship}
            />

            <PrivateRoute
              exact
              path="/internships/off-campus/:id"
              component={ViewInternship}
            />

            <PrivateRoute
              exact
              path="/internships/off-campus/update/:id"
              component={UpdateInternship}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
