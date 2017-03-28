import React, { Component, PropTypes } from 'react';

class UserProfile extends Component {

  render() {
    return (
      <div id="profile" style={{ visibility: 'hidden' }}>
        <div style={{ padding: 30, textAlign: 'left' }}>
          <h1>Welcome {this.props.user.displayName}</h1>
          <h3>
            DisplayName :{this.props.user.displayName}<br />
            UserName :{this.props.user.username}<br />
            Email Id :{this.props.user.email}
          </h3>
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  authentication: PropTypes.object,
  user: PropTypes.object,

};

export default UserProfile;

