import React from 'react';

import './Parallax.scss';

class Parallax extends React.Component {
  render() {
    return (
      <div id="parallax">
        <ParallaxGroup groupID="first">
          <ParallaxBack/>
          <ParallaxBase/>
        </ParallaxGroup>
        <ParallaxGroup groupID="second">
          <ParallaxBack/>
          <ParallaxBase/>
        </ParallaxGroup>
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
        Back
      </div>
    );
  }
}

class ParallaxBase extends React.Component {
  render() {
    return (
      <div className="parallax-layer parallax-base">
        Base
      </div>
    );
  }
}

export default Parallax;
