import React from 'react'

class Section1 extends React.Component{

    render(){
        return (
            <div className="Intro">
           
               <h1 style={{color:"#008cba" , fontSize:"90px",fontFamily:"Arial, Helvetica, sans-serif" ,fontStyle:"bold" ,padding:"10px"}}>Welcome to Convo!</h1>
               <h2 style={{color:"#90a9b0" , fontSize:"30px",fontFamily:"Arial, Helvetica, sans-serif" ,fontStyle:"bold" }}>Learn English with joy!! We are here to help you! </h2>
               <img src="hello.png" width="100%" height="370px" float="center"  style={{position:"relative",top:"20%"}}/>
            </div>
            
          );
      
    }
}

export default Section1;