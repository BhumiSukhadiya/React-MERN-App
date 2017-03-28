import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import UserHeader from '../User/components/UserHeader';
import Footer from './components/Footer/Footer';
import {setToken} from '../Authentication/AuthenticationAction'
export class App extends Component {
  constructor(props) {
    super(props);
      this.state = {isMounted: false, auth: null};
  }

    componentDidMount() {
        this.setState({isMounted: true});
        const authToken = localStorage.getItem('token');
        console.log(authToken);
        if (authToken !== null) {
            this.props.dispatch(setToken(authToken));
            this.setState({
                auth: true
            });

        } else {
            this.setState({
                auth: false
            });
        }
    }

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="MERN Starter - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
            {this.state.auth ? <UserHeader/> : <Header/>}
          <div>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    authentication: store.authentication,
  };
}

export default connect(mapStateToProps)(App);
