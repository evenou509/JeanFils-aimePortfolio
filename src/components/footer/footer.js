import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.facebook.com/jean.e.filsaime"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://twitter.com/evenoulovearch?lang=en"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/jean-fils-aime-b1997482/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/evenou509/?hl=en"><i className="fa fa-instagram" /></a></li>
              <li><a href="https://github.com/evenou509"><i className="fa fa-github" /></a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}