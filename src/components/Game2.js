import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Game2content from './Game2content'

class Game2 extends React.Component{
    render(){
      return(
      <div className="Game2">
        <Header/>
        <div><Game2content/></div>
        <Footer/>
      </div>
      )
    }
      
}

export default Game2;