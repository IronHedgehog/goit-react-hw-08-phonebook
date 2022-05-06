import { useEffect } from 'react';
import './App.css';
import PhoneBookPage from './views/phonebook';
import LoginPage from './views/login';
import RegistrationPage from './views/registration';
import { Switch } from 'react-router-dom';
import Header from './components/header/header';
import { refreshedUser } from './redux/auth/auth-operation';
import {
  getIsFetchingCurrent,
  getIsLoggedIn,
} from './redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './utils/CustomRoutes/private';
import PublicRoute from './utils/CustomRoutes/public';
import { Skeleton } from '@mui/material';

const App = () => {
  const dispatch = useDispatch();
  const loadingCurrentUser = useSelector(getIsFetchingCurrent);

  const loggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(refreshedUser());
  }, [dispatch]);

  return (
    <>
      {loadingCurrentUser ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
        <>
          {loggedIn && <Header />}
          <Switch>
            <PublicRoute path="/" redirectTo="/contacts" exact restricted>
              <LoginPage />
            </PublicRoute>

            <PublicRoute path="/registration" restricted>
              <RegistrationPage />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <PhoneBookPage />
            </PrivateRoute>
          </Switch>
        </>
      )}
    </>
  );
};

export default App;
