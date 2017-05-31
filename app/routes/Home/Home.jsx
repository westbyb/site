import React from 'react';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        Home
        <About/>
        <Work/>
        <Education/>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <h5>About</h5>
        Brian Westby<br/>
        Web developer<br/>
        Front-end<br/>
        A little back-end

        <div className="buzz">
          <img src="app/img/nodejs.png" alt="" className="buzzTech"/>
          <img src="app/img/react.png" alt="" className="buzzTech"/>
          <img src="app/img/redux.png" alt="" className="buzzTech"/>
          <img src="app/img/webpack.png" alt="" className="buzzTech"/>
          <img src="app/img/sass.png" alt="" className="buzzTech"/>
          <img src="app/img/babel.png" alt="" className="buzzTech"/>
        </div>
      </div>
    )
  }
}

class Work extends React.Component {
  render () {
    return (
      <div id="work">
        <h5>Experience</h5>
        <div className="clm">
          <img src="app/img/clm_logo.png" className="icon"/>
          The CLM Group
          <div className="job">
            Software Engineer
          </div>
        </div>
        <div className="intel">
          <img src="app/img/intel.png" className="icon"/>
          Intel
          <div className="job">
            Software Engineer
          </div>
          <div className="job">Intern</div>
        </div>
        <div className="osu">
          <img src="app/img/osu.png" className="icon"/>
          Oregon State University
          <div className="job">
            Teacher's Assistant
          </div>
        </div>
        <div className="adp">
          <img src="app/img/adp.png" className="icon"/>
          ADP
          <div className="job">
            Software Engineer I
          </div>
        </div>
      </div>
    )
  }
}

class Education extends React.Component {
  render() {
    return (
      <div id="edu">
        <h5>Education</h5>
        <div id="osu">
          <img src="app/img/osu.png" className="icon"/>Oregon State University<br/>
          Bachelor of Science, Computer Science<br/>
          2013
        </div>
      </div>
    )
  }
}

class Social extends React.Component {
  render() {
    return (
      <div id="social">
        <h5>Social</h5>
      </div>
    )
  }
}

export default Home;
