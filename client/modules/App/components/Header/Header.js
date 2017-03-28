import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
// Import Style
import styles from './Header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {check: false};
    }

    render() {
        return (
            <div className={styles.header}>
              <div className={styles.content}>
                <h1 className={styles['site-title']}>
                  <Link to="/">MERN STARTER BLOG</Link>
                </h1>
                <div>
                  <Link to="/" className={styles['navitem']}>Home</Link>
                  <Link to="/register" className={styles['navitem']}>Register Here</Link>
                  <Link to="/login" className={styles['navitem']}>Log In</Link>
                </div>
              </div>
            </div>
        );
    }
}

export default connect()(Header);
