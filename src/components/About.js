import React from 'react';
import Footer from './Footer';
import Header from './Header';

class About extends React.Component{
    render(){
      return(
      <div className="About">
        <Header/>
        <div className="convointro" >
          <img src="about1.jpg" width="850" height="500"></img>
          </div>
          <div className="intro1" style={{backgroundColor:"#e6eced" ,height:"500px",width:"1200px",padding:"30px",boxShadow:" 3px 3px 3px 3px #c2ced1",position:"absolute",top:"170%",left:"6%"}}>
          <h1 style={{fontSize:"60px",color:"#2b7da6",fontFamily:"Arial, Helvetica, sans-serif"}}>Our Mission</h1>
          <h2 style={{fontSize:"20px",color:"#8d9599" ,padding:"15px",fontFamily:"Arial, Helvetica, sans-serif"}}>Convo is an English learning platform made by team Hexbots which helps to improve your English speaking skills and vocabulary of Convo users.
         Main  speciality of Convo from other learning English platform is that you can improve your speaking skills from our senario based chatbots by experiencing real life like conversation that your have to face in day to day 
         life without really having to worry about it.</h2>
        <h3 style={{fontSize:"20px",color:"#8d9599",fontFamily:"Arial, Helvetica, sans-serif"}}>This platform introduces a feature called "Learn with fun" which is a gaming area for the learners to improve their English knowladge.
      The gaming section is divided into main areas like grammar and vocabulary.  </h3>
   
      
       <h4 style= {{fontSize:"60px",color:"#2b7da6",fontFamily:"Arial, Helvetica, sans-serif"}}>Our Vision</h4>
      <h5 style={{fontSize:"20px",color:"#8d9599" ,padding:"15px",fontFamily:"Arial, Helvetica, sans-serif"}}>Creating and environment where evryone is confident in speaking the universal language of English. </h5>
     </div>
     <div className="convointro1" style={{position:"absolute",top:"263%",left:"32%"}} >
     <img src="about.jpg" width="500" height="380"></img>
      </div>
        <Footer/>
      </div>
      )
    }
      
}

export default About;