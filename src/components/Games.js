import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

class Games extends React.Component{
    render(){
      return(
      <div className="Games">
        <Header/>
        <h2>Try out our learning games!</h2>
        <div className="allGames">
        <div className='game1'>
            <Link to='/game1'>
                <img src="speak.jpg" width="400" height="300" style={{padding:'2%'}}/>
                <p className="gameName">IMPROVE YOUR GRAMMAR</p>
            </Link>
        </div>
        <div className='game2'>
        <Link to='/game2'>    
            <img src="vocab.jpg"  width="400" height="300" style={{padding:'2%'}}/>
            <p className="gameName">CROSSWORDS</p>
        </Link>
        </div>
        <div className='game3'>
        <Link to='/game3'>   
            <img src="grammar.jpg" width="400" height="300" style={{padding:'2%'}}/>
            <p className="gameName">WORD GAME</p>
        </Link>
        </div>
        </div>
        <Footer/>
      </div>
      )
    }
      
}

export default Games;