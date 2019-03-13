import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <br/>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>University of Central Florida</h3>
                <p className="info">Certificate in Full-stack Web Developer<span>•</span> <em className="date">February 2019</em></p>

                <p>
                Front and back-end web development. Usually, good full stack developers will understand several how to work with several languages and databases including PHP, HTML, CSS, Nodejs, Reactjs, JavaScript and everything in between.
                </p>
                <br/>
                <p className="info">Bachelor in Accounting<span>•</span> <em className="date">May 2016</em></p>
              </div>
            </div> {/* item end */}
            <br/>
            <div className="row item">
              <div className="twelve columns">
                <h3>Broward College</h3>
                <p className="info">Associate of Arts in Accounting and Architecture <span>•</span> <em className="date">July 2012</em></p>
              </div>
            </div> 
          </div> 
        </div> 

        <br/>
        
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand css" /><em>JavaScript</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                <li><span className="bar-expand illustrator" /><em>Node JS</em></li>
                <li><span className="bar-expand wordpress" /><em>Angular JS</em></li>
                <li><span className="bar-expand illustrator" /><em>React JS</em></li>
                <li><span className="bar-expand illustrator" /><em>SQL</em></li>
                <li><span className="bar-expand illustrator" /><em>Mongo</em></li>
              </ul>
            </div>
          </div> 
        </div> 
      </section>
      </React.Fragment>
    );
  }
}