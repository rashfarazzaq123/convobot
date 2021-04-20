import React from 'react'

class Footer extends React.Component {
    render() {
      return (
        <div className="footer" style={{backgroundImage:'url(/float.gif)',position:"absolute",top:"330%" ,width:"100%"}}>
            <h2 style={{color:"white"}}>Contact Us </h2>
            <p style={{color:"white"}}>ContactNo:076887954</p> 
            <p style={{color:"white"}}>Facebook:convo@facebook.com</p>
            <p style={{color:"white"}}>Email:convo@gmail.com </p>
            <p style={{color:"white"}}>Address:Sri Darmarama Road, Rathmalana,Sri Lanka</p>
        </div>
      );
    }
}
export default Footer;