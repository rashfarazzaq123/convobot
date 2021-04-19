import React from 'react'

class Footer extends React.Component {
    render() {
      return (
        <div className="footer" style={{backgroundImage:'url(/float.gif)',position:"absolute",top:"330%" ,width:"100%" }}>
            <h2>Contact Us </h2>
            <p>ContactNo:076887954</p> 
            <p>Facebook:convo@facebook.com</p>
            <p>Email:convo@gmail.com </p>
            <p>Address:Sri Darmarama Road, Rathmalana,Sri Lanka</p>
        </div>
      );
    }
}
export default Footer;