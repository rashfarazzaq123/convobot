import React from 'react';
import Message3 from './Message3';
import Footer from './Footer';
import Header from './Header';

class Chatbot3 extends React.Component{
    render(){
      return(
      <div className="Chatbot3">
        <Header/>
        <div className="scenarioIntro">
          Scenario:
        </div>
        <Message3/>
        <Footer/>
      </div>
      )
    }
      
}

export default Chatbot3;