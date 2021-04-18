import React from 'react';
import Message from './Message';
import Footer from './Footer';
import Header from './Header';

class Chatbot extends React.Component{
    render(){
      return(
      <div className="Chatbot">
        <Header/>
        <Message/>
        <Footer/>
      </div>
      )
    }
      
}

export default Chatbot;