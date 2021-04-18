import React from 'react';
import {Link} from 'react-router-dom';


class Section3 extends React.Component {
    render() {
      return (
        <div className="gameIntro">
            <img src="9.gif"  width="600" height="300" alt=""></img>
            <div>
                <h3>Games for you</h3>
                <h4>Improve your grammar skills with this word games! Select a game to play!</h4>
                <Link to='/games'>
	                <button className="btnPlay" style={{background:'rgb(66, 135, 245)',margin:'2%',padding:'2%',paddingRight:'6%',paddingLeft:'6%',fontSize:'20px',fontWeight:'bold',border:'none',borderRadius:'55%',textAlign:'center',color:"white"}}>Play</button>
                </Link>
            </div>
            
        </div>
        
      );
    }
}
export default Section3;