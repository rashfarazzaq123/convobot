import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

class Scenarios extends React.Component{
    render(){
      return(
      <div className="Scenarios">
        <Header/>
        <div className="scenarioIntro3">Convo is  a scenario based chatbot which helps you to learn English to face different day to day real life scenarios with CONFIDENCE!
	        Please select a scenario given below to try out. Learn and Enjoy!!!
	      </div>
        <div className="Scenario" style={{backgroundImage:'url(/cafe.jpg)',position:"absolute",top:"100%",left:"7%"}}>
        <Link to='/chatbot1'>
          <img src="robo1.gif" width="420" height="280"/>
          <p className="scenarioName">Coffee Shop</p>
        </Link>
        </div>
        <div className="Scenario" style={{backgroundImage:'url(/college.jpg)',position:"absolute",top:"175%",left:"7%"}}>
        <Link to='/chatbot2'>
          <img src="robo1.gif" width="420" height="280"/>
          <p className="scenarioName">College</p>
          </Link>
        </div>
        <div className="Scenario" style={{backgroundImage:'url(/directions.jpg)',position:"absolute",top:"255%",left:"7%"}}>
        <Link to='/chatbot3'>
          <img src="robo1.gif" width="420" height="280"/>
          <p className="scenarioName">Ask Directions</p>
          </Link>
        </div>
        <Footer/>
      </div>
      )
    }
      
}

export default Scenarios;