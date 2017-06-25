import React from 'react';
import {IndexLink,Link} from 'react-router';

import './Tabbar.scss';

class Tabbar extends React.Component {
  render() {
    return (
      <footer id="tabbar">
        <IndexLink to="/" activeClassName="active"><div className="tab">Home</div></IndexLink>
        <Link to="/examples" activeClassName="active"><div className="tab">Examples</div></Link>
        <div className="tab faux-link">Resume</div>
      </footer>
    )
  }
}

export default Tabbar;
