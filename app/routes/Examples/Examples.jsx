import React from 'react';

import './Examples.scss';

class Examples extends React.Component {
  render() {
    return (
      <div id="examples">
        <div className="projects">
          <div className="project">
            <div className="pt">MealTime Online</div>
            <img src="app/img/mto-web-desktop.png" alt="" className="proj-example"/>
            Website for making payments into student's lunch accounts, paying school fees, scheduling automated payments, and checking school account information.
          </div>
          <div className="project">
            <div className="pt">MealTime Parent</div>
            <img src="app/img/mto-par-mob.png" alt="" className="proj-example"/>
            <div className="stores">
              <i className="fa fa-android"></i>
              <i className="fa fa-apple"></i>
            </div>
            Mobile version of MealTime Online on mobile with increased functionality, built with Cordova.
          </div>
          <div className="project">
            <div className="pt">MealTime Student</div>
            <img src="app/img/mto-stu-mob.png" alt="" className="proj-example"/>
            <div className="stores">
              <i className="fa fa-android"></i>
              <i className="fa fa-apple"></i>
            </div>
            App used by students to pay for their school lunches, and check school and account information, built with Cordova.
          </div>
          <div className="project">
            <div className="pt">Intel XDK</div>
            <img src="app/img/xdk-ad.png" alt="" className="proj-example"/>
            Cross-platform mobile development application. Specifically worked on the App Designer tool and RealSense plugins.<br/>
            <a href="https://software.intel.com/en-us/videos/how-to-use-app-designer-part-1">Webinar</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Examples;
