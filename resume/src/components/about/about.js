import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Recently graduated with certificate in Full-stack web developer from the UCF Coding Bootcamp with a vast array of knowledge in many different front and back end languages, responsive frameworks, database, and best code practices. I am dedicated to perfecting my craft by learning from more seasoned developers, remaining humble, and continuously making strides to learn all that I can about development. I have a background in customer service, Payroll, Tax and a Bachelor's degree in Accounting from UCF. </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Jean Fils-aime</span><br />
                  <span>3003 S Semoran Blvd apt# 150<br />
                    Orlando, FL 32822 US
                  </span><br />
                  <span>(954)478-3992</span><br />
                  <span>Jeaneddy25@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> 
          </div> 
        </div>
      </section>
      </React.Fragment>
    );
  }
}