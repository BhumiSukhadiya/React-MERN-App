import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile';
import { setUser } from '../UserActions';
import axios from 'axios';

class UserProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const url = 'https://lb-blog-api.herokuapp.com/api/users/me?access_token=';
    axios.get(url + localStorage.getItem('token'))
            .then((response) => {
                // console.log('avyu');
              console.log(response);
              this.setState({
                user: response.data,
              });
              this.props.dispatch(setUser(response.data));
                /* document.getElementById('loader').style.visibility = "hidden";
                 ;
                 */
              document.getElementById('test').removeChild(document.getElementById('loader'));
              document.getElementById('profile').style.visibility = 'visible';
            })
            .catch((error) => {
              console.log(error);
            });
  }

  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <center>
          <div id="test">
            <img src="./images/loading1.gif" width="50px" height="50px" id="loader" alt="loading" />
            <UserProfile user={this.state.user} />
          </div>
        </center>
      </div>
    );
  }
}
/* function mapStateToProps(store) {
 return {
 token: store.authentication.token,
 };
 }*/


export default connect()(UserProfilePage);

