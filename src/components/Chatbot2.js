import React from 'react';
import Message2 from './Message2';
import Footer from './Footer';
import Header from './Header';

class Chatbot2 extends React.Component{
    render(){
      return(
      <div className="Chatbot2">
        <Header/>
        <div className="scenarioIntro">
          Scenario: You met a new friend at your college. Introduce yourself, ask about his/her whereabouts (school/college year/major/extracurricular activities) and decide on a place to meetup later.. begain the conversation with a hello
        </div>
        <Message2/>
        <Footer/>
      </div>
      )
    }
      
}

export default Chatbot2;