import React from 'react';
import Footer from './Footer';
import Header from './Header';

class Contact extends React.Component{
    render(){
      return(
      <div className="Contact">
        <Header/>
        <img src="6.jpg"></img>
        <div className="contactinfo" style={{width:"1200px",height:"300px",backgroundColor:"#edf2f2",position:"absolute",top:"154%",left:"5%",boxShadow:" 3px 3px 3px 3px #c2ced1"}}>
          <h1 style={{fontSize:"60px" ,color:"#1f73a3"}}>Team Hexbots</h1>
          <h2 style={{fontSize:"20px" ,color:"#86959e"}}>ContactNo:076887954</h2>
          <h3 style={{fontSize:"20px" ,color:"#86959e"}}>Give some feedback to our facebook page : convo@facebook.com</h3>
          <h4 style={{fontSize:"20px" ,color:"#86959e"}}>Email:convo@gmail.com</h4>
          <h5 style={{fontSize:"20px" ,color:"#86959e"}}>Location Sri Darmarama Road, Rathmalana,Sri Lanka</h5>
        </div>
        <img src="8.jpg"></img>
        <img src="10.jpg" width="1000px" height="700px" style={{position:"absolute" ,top:"210%",left:"13%"}}></img>
        <Footer/>
      </div>
      )
    }
      
}

export default Contact;