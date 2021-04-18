import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Scenarios from './components/Scenarios'
import Chatbot1 from './components/Chatbot1';
import Chatbot2 from './components/Chatbot2';
import Chatbot3 from './components/Chatbot3';
import Games from './components/Games';
import Game1 from './components/Game1';
import Game2 from './components/Game2';
import Game3 from './components/Game3';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/home" component={Home}/>
        <Route path="/scenarios" component={Scenarios}/>
        <Route path="/chatbot1" component={Chatbot1}/>
        <Route path="/chatbot2" component={Chatbot2}/>
        <Route path="/chatbot3" component={Chatbot3}/>
        <Route path="/games" component={Games}/>
        <Route path="/game1" component={Game1}/>
        <Route path="/game2" component={Game2}/>
        <Route path="/game3" component={Game3}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Switch>

    </Router>  
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
