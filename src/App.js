import React from 'react';
import {observer} from 'mobx-react';
import './App.css';
import Login from './components/Login';
import SubmitBtn from './components/SubmitBtn';
import Home from './components/Home';
import Scenarios from './components/Scenarios'
import Chatbot from './components/Chatbot';
import Games from './components/Games';
import Game1 from './components/Game1';
import Game2 from './components/Game2';
import Game3 from './components/Game3';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Users from './store/Users';
import {Redirect} from 'react-router-dom';

class App extends React.Component{
  
  async componentDidMount(){
    try{
      let res=await fetch('/isLoggedIn',{
        method:'post',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        }
      });
      let result=await res.json();
      if(result && result.success){
        Users.loading=false;
        Users.isLoggedIn=true;
        Users.username=result.username;
      }
      else{
        Users.loading=false;
        Users.isLoggedIn=false;
      }
    }
    catch(e){
      Users.loading=false;
      Users.isLoggedIn=false;
    }
  }

  async doLogout(){
    try{
      let res=await fetch('/logout',{
        method:'post',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        }
      });
      let result=await res.json()
      if(result && result.success){
        Users.isLoggedIn=false;
        Users.username='';
        
      }
    }
    catch(e){
     console.log(e)
    }
  }
  render(){
    if(Users.loading){
      return(
        <div className="App">
          <div className="load">
            Loading, please wait...
          </div>
        </div>
      )
    }
    else{
      if(Users.isLoggedIn){
        return(
          <div className="App">
            <div className="load">
              Welcome {Users.username}
              <SubmitBtn
                text={'Log Out'}
                disabled={false}
                onClick={()=>this.doLogout()}
              />
            </div>
          </div>
          
          
        )
      }
    return(
      <div className="App">
          <div className="login">
            <Router>
              <div className="App">
                <Switch>
               
                  <Route path="/home" component={Home}/>
                  <Route path="/scenarios" component={Scenarios}/>
                  <Route path="/chatbot" component={Chatbot}/>
                  <Route path="/games" component={Games}/>
                  <Route path="/game1" component={Game1}/>
                  <Route path="/game2" component={Game2}/>
                  <Route path="/game3" component={Game3}/>
                  <Route path="/about" component={About}/>
                  <Route path="/contact" component={Contact}/>

                </Switch>
              </div>
            </Router>
          </div>
        </div>
      )
    }
  }
    
}
export default observer(App);
