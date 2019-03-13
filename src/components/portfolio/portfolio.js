import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt src="images/portfolio/Time Train.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Train Schedule</h5>
                        <p>JavaScript/Firebase</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt src="images/portfolio/crystalCollector.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Crystal Collector Game</h5>
                        <p>HTML/CSS/JavaScript/JQuery</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt src="images/portfolio/burger.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Burger</h5>
                        <p>Nodejs/Express/Handlebars</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt src="images/portfolio/soccerClickyGame.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Soccer Clicky Game</h5>
                        <p>Reactjs</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt src="images/portfolio/wineDown4What.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Wine Down 4 What?</h5>
                        <p>HTML/CSS/JavaScript/Layerjs</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt src="images/portfolio/liri-node-app.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Liri Node App</h5>
                        <p>Nodejs server</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt src="images/portfolio/bamazon.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Bamazon</h5>
                        <p>Nodejs/MySQL</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt src="images/portfolio/patientManagement.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Patient Management</h5>
                        <p>Team Project With (Desiree Solomon)</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> 
            </div> 
          </div> 
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-time train.jpg" alt />
            <div className="description-box">
              <h4>Train Schedule</h4>
              <p>the objective was to create a train schedule application that incorporates Firebase to host arrival and departure data. My app retrieves and manipulates the data with Moment.js. This website provides up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.</p>
            </div>
            <div className="link-box">
              <a href="https://evenou509.github.io/TrainTime/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-crystalCollector.jpg" alt />
            <div className="description-box">
              <h4>Crystal Collector Game</h4>
              <p>You will be given a random number at the start of the game. There are four crystals on the page. By clicking on a crystal you will add a specific amount of points to your total score. You win the game by matching your total score to the random number. You lose the game if your total score goes above the random number. The value of each crystal is hidden from you until you click on it.</p>
            </div>
            <div className="link-box">
              <a href="https://evenou509.github.io/unit-4-game/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-burger.jpg" alt />
            <div className="description-box">
              <h4>Burger</h4>
              <p>This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and elements from the Materialize framework and the backend implemented with Node.js and Express. HTML templating is done with the help of Handlebars.</p>
            </div>
            <div className="link-box">
              <a href="https://burger-by-jf.herokuapp.com/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-soccerClickyGame.jpg" alt />
            <div className="description-box">
              <h4>Soccer Clicky Game</h4>
              <p>the Game is to click on every SOCCER players picture once. When you click a players picture the grid will automatically shuffle. The goal of the game is click all 15 players pictures once despite the shuffled grid. If you click any players picture twice the game will reset and you must begin again!</p>
            </div>
            <div className="link-box">
              <a href="https://evenou509.github.io/Clicky-Game/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-wineDown4What.jpg" alt />
            <div className="description-box">
              <h4>Wine Down 4 What?</h4>
              <p>this application is an easy way to pair Wine and food at home. Enter the type of wine you will like to drink it will pair with 4 types of recipes. (contributors: <a href="https://github.com/Grant-Rigdon">Grant Rigdon</a> and <a href="https://github.com/Templetonalyssa">Alyssa Templeton</a>)</p>
            </div>
            <div className="link-box">
              <a href="https://grant-rigdon.github.io/wine-down-4-what/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-liri-node-app.jpg" alt />
            <div className="description-box">
              <h4>Liri Node App</h4>
              <p>LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.</p>
            </div>
            <div className="link-box">
              <a href="https://github.com/evenou509/liri-node-app">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-bamazon.jpg" alt />
            <div className="description-box">
              <h4>Bamazon</h4>
              <p>this project is to create an Amazon like store front using Node.js and MySQL. The app will take in orders from customers and deplete stock from the store's inventory, track product sales across departments and provide a summary of the highest-grossing departments in the store.</p>
            </div>
            <div className="link-box">
              <a href="https://github.com/evenou509/Bamazon">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-patientManagement.jpg" alt />
            <div className="description-box">
              <h4>Patient Management</h4>
              <p>Patient Managemnt System to keep track of current and new Patients for Nurses and Doctors and to be able to asign the Patient in the right queue to see the right Doctor and Nurse. JavaScript, Node, Express, HTML, CSS, Bootstrap, jQuery, MySql, Sequelize, Router.(Contribor: <a href="https://github.com/dsolomon4">Desiree Solomon</a>)</p>
            </div>
            <div className="link-box">
              <a href="https://patient-management-ds-jf.herokuapp.com/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}