import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Homepage from './components/Homepage/Homepage';
import Dashboard from './components/Dashboard/Dashboard';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch,useSelector } from 'react-redux';
import { getCurrentUserData } from './redux/userSlice';
import { authentication } from './firebase/firebase.util';
import { PublicRoute } from './components/routers/PublicRoute';
import { PrivateRoute } from './components/routers/PrivateRoute';

function App() {
  const [user,setUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
   onAuthStateChanged(authentication, (user) => {
      if (user) {
        //console.log('USER:',user);
        dispatch(getCurrentUserData(user.uid));
        setUser(user);
      }
    });
    //return authListener;
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <PublicRoute exact path="/" component={Homepage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
