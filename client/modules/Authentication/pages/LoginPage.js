import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { loginUserRequest } from '../AuthenticationAction';
import LogInForm from '../components/LogIn';


class LoginPage extends Component {
  handleLogin = (user) => {
    this.props.dispatch(loginUserRequest(user));
  };

  render() {
    return (
      <div>
        <LogInForm handleLogin={this.handleLogin} s="true" />
      </div>
        );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default connect()(LoginPage);
