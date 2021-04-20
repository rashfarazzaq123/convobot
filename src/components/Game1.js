import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Game1content from './Game1content';

class Game1 extends React.Component{
    render(){
      return(
      <div className="Game1" >
        <Header/>
        <div><Game1content/></div>
        <Footer/>
      </div>
      )
    }
      
}

export default Game1;