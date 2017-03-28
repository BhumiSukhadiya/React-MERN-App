import React, { Component, PropTypes } from 'react';
import styles from './ProfileStyle.css';
import { connect } from 'react-redux';
import { setToken } from '../../Authentication/AuthenticationAction';
export class ChangePasswordForm extends Component {
  changePassword = () => {
    console.log('change Password');
    if (this.refs.newPassword.value !== this.refs.newConfirmPassword.value) {
      alert('New Password does not match with confirm new password!');
      this.refs.newConfirmPassword.focus();
      return;
    }
    const data = {
      password: this.refs.oldPassword.value,
      newPassword: this.refs.newPassword.value,
    };
    // console.log(this.props);
    console.log(data);
    if (this.props.authentication.token === undefined) {
      const authToken = localStorage.getItem('token');
      console.log(authToken);
      if (authToken !== null) {
        this.props.dispatch(setToken(authToken));
      }
    }
    const token = this.props.authentication.token;
    this.props.handleChangePassword(token, data);
  };

  render() {
    return (
      <div className={styles['form-content']}>
        <h2 className={styles['form-title']}>Change Password</h2>
        <input
          type="password"
          placeholder="Old Password"
          className={styles['form-field']}
          ref="oldPassword"
        />
        <input
          type="password"
          placeholder="New Password"
          className={styles['form-field']}
          ref="newPassword"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className={styles['form-field']}
          ref="newConfirmPassword"
        />
        <button className={styles['post-submit-button']} onClick={this.changePassword}>Submit</button>
      </div>

    );
  }
}
ChangePasswordForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  authentication: PropTypes.object,

};
function mapStateToProps(store) {
  return {
    authentication: store.authentication,
  };
}
export default connect(mapStateToProps)(ChangePasswordForm);

