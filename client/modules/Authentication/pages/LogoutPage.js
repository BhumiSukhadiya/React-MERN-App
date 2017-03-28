import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeToken } from '../AuthenticationAction';
import { browserHistory } from 'react-router';
class LogoutPage extends Component {

  componentWillMount() {
    this.props.dispatch(removeToken());
    browserHistory.push('/');
  }

  render() {
    return null;
  }
}
LogoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,

};

export default connect()(LogoutPage);
