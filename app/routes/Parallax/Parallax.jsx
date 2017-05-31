import React from 'react';

import './Grail.scss';

class Parallax extends React.Component {
  render() {
    return (
      <div id="parallax">

      </div>
    );
  }
}

class ParallaxGroup extends React.Component {
  render() {
    return (
      <div id={this.props.groupID} className="parallax-group">
        {this.props.children}
      </div>
    );
  }
}

class ParallaxBack extends React.Component {
  render() {
    return (
      <div className="parallax-layer parallax-back">

      </div>
    );
  }
}

class ParallaxBase extends React.Component {
  render() {
    return (
      <div className="parallax-layer parallax-base">

      </div>
    );
  }
}

export default Parallax;
