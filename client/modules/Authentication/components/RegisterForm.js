import React, { Component, PropTypes } from 'react';
// Import Style
import styles from './AuthStyle.css';

export class RegisterForm extends Component {
  register = () => {
    const data = {
      displayName: this.refs.displayName.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      username: this.refs.username.value,
    };
    if (data.password !== this.refs.cpass.value) {
      alert('Password and confirm password does not match!');
      this.refs.password.focus();
      return;
    }
    this.props.handleRegister(data);
  };

  render() {
    const cls = `${styles.form} ${(styles.appear)}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Register Here</h2>
          <input type="text" placeholder="Display Name" className={styles['form-field']} ref="displayName" />
          <input type="text" placeholder="User Name" className={styles['form-field']} ref="username" />
          <input type="email" placeholder="Email Id" className={styles['form-field']} ref="email" />
          <input type="password" placeholder="Password" className={styles['form-field']} ref="password" />
          <input type="password" placeholder="Confirm Password" className={styles['form-field']} ref="cpass" />
          <button className={styles['post-submit-button']} onClick={this.register}>Submit</button>
        </div>
      </div>
    );
  }
}
RegisterForm.propTypes = {
  handleRegister: PropTypes.func.isRequired,
};

export default RegisterForm;
