import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { registerUserRequest } from '../AuthenticationAction';
import RegisterForm from '../components/RegisterForm';

class RegisterPage extends Component {
  handleRegister = (user) => {
    this.props.dispatch(registerUserRequest(user));
  };

  render() {
    return (
      <div>
        <RegisterForm handleRegister={this.handleRegister} s="true" />
      </div>
    );
  }
}
RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,

};
export default connect()(RegisterPage);
