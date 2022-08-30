import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import {Login} from './components/Login';
import { Signup } from './components/Signup';
import AuthContextProvider from './contexts/AuthContext';
import RegisterContextProvider from './contexts/RegisterContext';
import ProtectedRoute from './components/ProtectedRoute';
// import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';
import ForgotPassword from './components/ForgotPassword';
import EnterInfo from './components/EnterInfo';

function App() {
  
  return(
    <div>
      <AuthContextProvider>
        <RegisterContextProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login}  />
              <ProtectedRoute exact path="/enterclockinout" component={EnterInfo} />
              <ProtectedRoute exact path="/login" component={Login} />
              <ProtectedRoute exact path="/signup" component={Signup} />
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
              <Route exact path='*' component={PageNotFound} />
            </Switch>
          </BrowserRouter>
        </RegisterContextProvider>
      </AuthContextProvider>
    </div>
  );
    
  }

export default App;