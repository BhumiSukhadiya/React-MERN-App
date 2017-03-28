import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ChangePasswordForm from '../components/ChangePasswordForm';
import { changePasswordRequest } from '../UserActions';

class ChangePasswordPage extends Component {
  handleChangePassword = (token, data) => {
    console.log('t1');
    this.props.dispatch(changePasswordRequest(token, data));
    console.log('t2');
  }

  render() {
    return (
      <div>
        <ChangePasswordForm handleChangePassword={this.handleChangePassword} />
      </div>
    );
  }
}
ChangePasswordPage.propTypes = {
  dispatch: PropTypes.func.isRequired,

};
export default connect()(ChangePasswordPage);
