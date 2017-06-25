import React from 'react';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div id="home">
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
        <div className="mobile-about-photo">
          <img src="./img/beach.JPG" alt=""/>
        </div>
        I'm a software engineer born and raised in Portland, OR.<br/>
        Mainly a web/mobile developer, but I've dabbled in a lot of different disciplines.<br/>
        Lots of experience as a front-end developer, but I have experience with the back-end as well.
      </div>
    )
  }
}

class Work extends React.Component {
  render () {
    return (
      <div id="work">
        <h5>Experience</h5>
        <div className="jobs">
          <div className="clm">
            <img src="./img/clm_logo.png" className="icon"/>
            <div className="company">The CLM Group</div>
            <div className="job">
              Software Engineer<br/>
              <small>2016 - Present</small>
            </div>
          </div>
          <div className="intel">
            <img src="./img/intel.png" className="icon"/>
            <div className="company">Intel</div>
            <div className="job">
              Software Engineer<br/>
              <small>2014 - 2016</small>
            </div>
            <div className="job">
              Intern<br/>
              <small>2013 - 2014</small>
            </div>
          </div>
          <div className="osu">
            <img src="./img/osu.png" className="icon"/>
            <div className="company">Oregon State University</div>
            <div className="job">
              Teacher's Assistant<br/>
              <small>2012 - 2013</small>
            </div>
          </div>
          <div className="adp">
            <img src="./img/adp.png" className="icon"/>
            <div className="company">ADP</div>
            <div className="job">
              Software Engineer I<br/>
              <small>2012</small>
            </div>
          </div>
        </div>
        <div className="buzz">
          <div className="buzzTech"><img src="./img/nodejs.png" alt="Nodejs" className="buzzTech"/></div>
          <div className="buzzTech"><img src="./img/react.png" alt="React" className="buzzTech"/></div>
          <div className="buzzTech"><img src="./img/redux.png" alt="Redux" className="buzzTech"/></div>
          <div className="buzzTech"><img src="./img/webpack.png" alt="Webpack" className="buzzTech"/></div>
          <div className="buzzTech"><img src="./img/sass.png" alt="Sass" className="buzzTech"/></div>
          <div className="buzzTech"><img src="./img/babel.png" alt="Babel" className="buzzTech"/></div>
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
          <img src="./img/osu.png" className="icon"/>Oregon State University<br/>
          Bachelor of Science, Computer Science<br/>
          2013
        </div>
      </div>
    )
  }
}

export default Home;
