import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

class Games extends React.Component{
    render(){
      return(
      <div className="Games">
        <Header/>
        <h2 style={{color:"#1aa2bd",fontFamily:"Arial, Helvetica, sans-serif",fontSize:"49px"}}>
        Try out our learning games!</h2>
        <div className="allGames">
        <div className='game1'  style={{position:"absolute" ,width:"600px",height:"390px",top:"100%"}}  >
            <Link to='/game1'>
                <img src="speak.jpg" width="590" height="300"/>
                <p className="gameName">play</p>
            </Link>
        </div>
        <p className="gameName1"style={{position:"absolute", top:"130%",left:"55%",color:"#94adb3",fontFamily:"Arial, Helvetica, sans-serif",fontSize:"25px"}}>You can improve your grammer skills from here.<br></br> try this out by clicking play button</p>
        <div className='game2' style={{position:"absolute", top:"175%",width:"600px",heigth:"400px"}}>
        <Link to='/game2'>    
            <img src="vocab.jpg"  width="590" height="300"/>
            <p className="gameName">play</p>
        </Link>
        </div>
        <p className="gameName1"style={{position:"absolute", top:"200%",left:"55%",color:"#94adb3",fontFamily:"Arial, Helvetica, sans-serif",fontSize:"25px"}}>You can improve your vocabulary skills from here.<br></br> try this out by clicking play button</p>
        <div className='game3'style={{position:"absolute", top:"254%",width:"600px",height:"390px"}}>
        <Link to='/game3'>   
            <img src="grammar.jpg" width="590" height="300" />
            <p className="gameName">play</p>
        </Link>
        </div>
        <p className="gameName1"style={{position:"absolute", top:"290%",left:"55%",color:"#94adb3",fontFamily:"Arial, Helvetica, sans-serif",fontSize:"25px"}}>You can improve your vocabulary skills from here.<br></br> try this out by clicking play button</p>

        </div>
        <Footer/>
      </div>
      )
    }
      
}

export default Games;