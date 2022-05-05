import { useEffect } from 'react';
import './App.css';
import { getContacts } from './redux/phonebook/phonebook-selector';
import PhoneBookPage from './views/phonebook';
import LoginPage from './views/login';
import RegistrationPage from './views/registration';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header';
import { refreshedUser } from './redux/auth/auth-operation';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshedUser());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>

        <Route path="/registration">
          <RegistrationPage />
        </Route>

        <Route path="/contacts">
          <PhoneBookPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
