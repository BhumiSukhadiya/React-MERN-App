import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import styles from '../components/ProfileStyle.css';
import {setToken} from '../../Authentication/AuthenticationAction';

class UserHomepage extends Component {
    componentDidMount() {
        const authToken = localStorage.getItem('token');
        console.log(authToken);
        if (authToken !== null) {
            this.props.dispatch(setToken(authToken));
        }
    }

    render() {
        return (
            <div>
                <div className={styles.childc}>
                    <div className={styles['form-content']}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

UserHomepage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node,

};
function mapStateToProps(store) {
    return {
        t: store.authentication,
    };
}
export default connect(mapStateToProps)(UserHomepage);
