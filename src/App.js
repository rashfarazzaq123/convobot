import React from 'react';
import {observer} from 'mobx-react';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


class App extends React.Component{
  
  
  render(){
    
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
    

export default observer(App);
