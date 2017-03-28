import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// Import Style
import styles from './Header.css';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { check: false };
  }
  componentDidMount() {
    if (this.checkAuth()) {
      this.setState({ check: true });
    }
    console.log(this.state.check);
  }
  checkAuth = () => {
    return localStorage.getItem('token') !== null;
  }
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.content}>
          <h1 className={styles['site-title']}>
            <Link to="/">MERN STARTER BLOG</Link>
          </h1>
          <div>
            {!this.state.check && <p><Link to="/login" className={styles['add-post-button']}>Log In</Link>
              <Link to="/register" className={styles['add-post-button']}>Register Here</Link></p>}
            <Link to="/" className={styles['add-post-button']}>Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Header);
