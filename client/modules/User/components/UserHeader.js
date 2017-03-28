import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
// Import Style
import styles from '../../App/components/Header/Header.css';


class UserHeader extends Component {
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
                        <Link to="/userhome" className={styles['navitem']}>User Profile</Link>
                        <Link to="/userhome/posts" className={styles['navitem']}>Post List</Link>
                        <Link to="/userhome/ChangePassword" className={styles['navitem']}>Change Password</Link>
                        <Link to="/logout" className={styles['navitem']}>Logout</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(UserHeader);
