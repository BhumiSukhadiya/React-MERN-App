
import React, { Component, PropTypes } from 'react';

import styles from './AuthStyle.css';

export class LogInForm extends Component {
  login = () => {
    // console.log('login');
    const data = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    };
   // console.log(this.props);
    this.props.handleLogin(data);
  };

  render() {
    const cls = `${styles.form} ${(styles.appear)}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Log In</h2>
          <input type="email" placeholder="Email Id" className={styles['form-field']} ref="email" />
          <input type="password" placeholder="Password" className={styles['form-field']} ref="password" />
          <button className={styles['post-submit-button']} onClick={this.login}>Submit</button>
        </div>
      </div>
    );
  }
}

LogInForm.propTypes = {
  handleLogin: PropTypes.func,
};

export default LogInForm;

