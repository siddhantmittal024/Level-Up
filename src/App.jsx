import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { onAuthStateChanged, getAuth } from 'firebase/auth';
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

function App() {
  const dispatch = useDispatch();
  const [isAuthenticated, setAuthenticated] = useState(true);
  const [userName,setUserName] = useState(null);
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
    {userName ? (<Navbar name={userName}/>) : null}
      <div className="App">
        <Switch>
          <PublicRoute exact path="/" component={Homepage} />
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
          exact
          path="/jobs"
          component={Jobs}/>
           <PrivateRoute
          exact
          path="/internships"
          component={Internships}/>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
