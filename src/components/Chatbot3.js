import React from 'react';
import Message3 from './Message3';
import Footer from './Footer';
import Header from './Header';

class Chatbot3 extends React.Component{
    render(){
      return(
      <div className="Chatbot3">
        <Header/>
        <div className="uni" >
          
          <img src="12.jpg" width ="500px" height="320px" style={{position:"absolute",top:"90%",left:"32%"}} />
          </div>
        <div className="scenarioIntro4"  style={{position:"absolute",top:"70%",left:"32%"}}>
          It's your turn to ask direction from Convo
        </div>
        <Message3/>
        <Footer/>
      </div>
      )
    }
      
}

export default Chatbot3;