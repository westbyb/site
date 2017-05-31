import React from 'react';

import './Grail.scss';

class Grail extends React.Component {
  render() {
    return (
      <div id="grail">
        <GrailHeader/>
        <GrailBody />
        <GrailFooter />
      </div>
    );
  }
}

class GrailHeader extends React.Component {
  render() {
    return (
      <header>
        <span id="logo">
          <div className="logo-top"></div>
          <div className="logo-mid"></div>
          <div className="logo-bot"></div>
        </span>
      </header>
    );
  }
}

class GrailBody extends React.Component {
  render() {
    return (
      <div id="grailbody">
        <main id="content">
        </main>
        <nav id="grailnav">
        </nav>
        <aside id="ads">
        </aside>
      </div>
    );
  }
}

class GrailFooter extends React.Component {
  render() {
    return (
      <footer>

      </footer>
    );
  }
}

export default Grail;
