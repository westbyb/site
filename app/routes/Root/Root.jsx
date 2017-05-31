import React from 'react';

import Login from '../Login/Login.jsx';
import Home from '../Home/Home.jsx';

class Root extends React.Component {
  render() {
    return (
      <div id="root">
        {
          this.props.isAuthenticated ?
          <Home/> :
          <Login/>
        }
      </div>
    );
  }
}

export default Root;
