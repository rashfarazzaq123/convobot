import React from 'react';
import Message1 from './Message1';
import Footer from './Footer';
import Header from './Header';

class Chatbot1 extends React.Component{
    render(){
      return(
      <div className="Chatbot1">
        <Header/>
        <div className="cafe" >
          
          <img src="2.jpg" width ="500px" height="250px" style={{position:"absolute",top:"100%",left:"32%"}} />
          </div>
        <div className="scenarioIntro"style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
          It's your turn to make an order at the coffee shop.Try asking about the menu!
    
        </div>
        <Message1/>
        <Footer/>
        
      </div>
      )
    }
      
}

export default Chatbot1;