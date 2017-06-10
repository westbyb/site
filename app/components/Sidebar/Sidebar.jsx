import React from 'react';
import {IndexLink,Link} from 'react-router';

import './Sidebar.scss';

class Nav extends React.Component {
  showResume(e) {
    window.open('./app/BrianWestbyResume.pdf', '_blank', 'location=yes');
  }

  render() {
    return (
      <div id="sidebar" className="hidden-sm-down col-md-3">
        <div id="bio">
          <div className="me"></div>
          <div className="contact">
            Brian Westby<br/>
            Portland, OR
            <div className="email">
              brian.westby@gmail.com
            </div>
            <div className="social">
              <a href="https://github.com/westbyb"><i className="fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/brian-westby-52725050"><i className="fa fa-linkedin-square"></i></a>
            </div>
          </div>
        </div>
        <div id="nav-links">
          <ul className="list-group">
            <IndexLink to="/" activeClassName="active">
              <li className="list-group-item">Home</li
            ></IndexLink>
            <Link to="/examples" activeClassName="active">
              <li className="list-group-item">Work</li>
            </Link>
            <li className="list-group-item faux-link" onClick={this.showResume}>
              Resume
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
