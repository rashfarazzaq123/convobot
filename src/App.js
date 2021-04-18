import React from 'react';
import {observer} from 'mobx-react';
import './App.css';
import Login from './components/Login';
import SubmitBtn from './components/SubmitBtn';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Users from './store/Users';

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
                style={{float:'right'}}
                id="logout"
                text={'Log Out'}
                disabled={false}
                onClick={()=>this.doLogout()}
              />
              <div><Home/></div>
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
                  <Route exact path="/" component={Login}/>
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
