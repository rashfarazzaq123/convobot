import React from 'react';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer';


class Home extends React.Component{
  render(){
    return(
    <div className="Home">
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </div>
    );
  }
    
}
export default Home;