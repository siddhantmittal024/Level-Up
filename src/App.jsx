import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { getCurrentUserData } from './redux/userSlice';
import { authentication } from './firebase/firebase.util';

import Homepage from './components/Homepage/Homepage';
import Dashboard from './components/Dashboard/Dashboard';
import { PublicRoute } from './components/routers/PublicRoute';
import { PrivateRoute } from './components/routers/PrivateRoute';

function App() {
  const dispatch = useDispatch();
  const [isAuthenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      if (user) {
        dispatch(getCurrentUserData(user.uid));
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, []);

  return (
    <Router>
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
          path="/internships"
          component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
