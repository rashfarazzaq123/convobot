import React from 'react';
import {Link} from 'react-router-dom';


class Section3 extends React.Component {
    render() {
      return (
        <div className="gameIntro">
           <img src="hello.png" width="100%" height="370px" float="center"  style={{position:"relative",top:"220%"}}/>
          
            <div>
            <h3 style={{float:"right",position:"absolute",top:"265%" ,left:"38%",fontSize:"40px",color:"#2eaed9"}} >
         Game for you </h3>
         <h4 style={{float:"right",position:"absolute",top:"278%" ,padding:"5px",left:"26%" ,fontSize:"23px",color:"#819da6"}} >Improve your grammar skills with ths word games! <br></br>Select a game to play!</h4>
               
                <Link to='/games'>
	                <button className="btnPlay" style={{background:'rgb(66, 135, 245)',margin:'2%',padding:'2%',paddingRight:'6%',paddingLeft:'6%',fontSize:'20px',fontWeight:'bold',border:'none',borderRadius:'55%',textAlign:'center',color:"white",position:"absolute",top:"288%",left:"38%"}}>Play</button>
                  
                </Link>
            </div>
            
        </div>
        
      );
    }
}
export default Section3;