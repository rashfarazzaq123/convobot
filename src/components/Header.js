import React from 'react'
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
      super(props);
      this.state={};
    }
    render(){
      return (
        <div className="Nav" >
            <img src="convologo.png"  width="340" height="300" alt=""></img>
            <ul >
                <Link to='/home'>
                  <li >Home</li>
                </Link>
                <Link to='/scenarios'>
                  <li>Convobot</li>
                </Link>
                <Link to='/games'>
                  <li>Games</li>
                </Link>
                <Link to='/about'>
                  <li>About</li>
                </Link>
                <Link to='/contact'>
                  <li>Contact</li>
                </Link>
            </ul>
        </div>
      );
    }
}
  
export default Header;