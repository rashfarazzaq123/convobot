import React from 'react';
import {Link} from 'react-router-dom';

class Section2 extends React.Component {
    render() {
      return (
        <div className="chatbotIntro">
            <img src="robo1.gif" style={{margin:'1%',float:"left",position:"absolute",top:"168%" ,left:"0%"}}  width="450" height="400"  alt=""/>
              <h3 style={{float:"right",position:"absolute",top:"175%" ,left:"38%",fontSize:"40px",color:"#2eaed9"}} >
         Are you bored? Talk with me...</h3>
            <h4 style={{float:"right",position:"absolute",top:"190%" ,left:"32%" ,fontSize:"23px",color:"#819da6"}} >Hi! I am chatbot Convo! Talk with me .. I can improve<br></br> your English skills. Convo is an AI chatbot that can 
	        chat and speak with you.</h4>
          <Link to='/scenarios'>
            <button className="btnhello" 
            style={{background:'rgb(66, 135, 245)',margin:'2%',padding:'2%',paddingRight:'5%',paddingLeft:'5%',fontSize:'20px',fontWeight:'bold',border:'none',borderRadius:'55%',textAlign:'center',color:"white",float:"right",position:"absolute",top:"200%" ,left:"50%" }
            }>Say Hello</button>
          </Link>
        </div>
      );
    }  
}
export default Section2;