import React from 'react';

import Nav from '../Sidebar/Sidebar.jsx';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div id="app-body" className="container">
          <div className="row">
            <Nav/>
            <div id="content" className="col-12 col-md-9">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
