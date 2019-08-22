import React from 'react';
import LoginPage from '../pages/login/loginPage';
import RegistrationPage from '../pages/login/registrationPage';
import {Link, Switch, Route} from 'react-router-dom';

class LoginContainer extends React.Component {
  render() {
    const match = this.props.match;
    return (
      <div>
        <Switch>
          <Route path={`${match.path}/login`} exact component={LoginPage} />
          <Route path={`${match.path}/register`} exact component={RegistrationPage} />
        </Switch>
      </div>

    );
  }
}

export default LoginContainer;