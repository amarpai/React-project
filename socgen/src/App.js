import React, {Component} from 'react';
import './App.css';
import CardComponent from './components/cardComponent';
import HeaderComponent from './components/headerComponent';
import InformationComponent from './components/informationComponent';


class App extends Component{
  render(){
    return (
      <div>
        <HeaderComponent/>

        <div className="cardArea">
            <div>
              <h2 className="cardAreaHeader">Welcome to React</h2>
            </div>
            
            <div className="flex-container">
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
            </div>

            <div className="flex-container">
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
            </div>
        </div>

        <InformationComponent/>
      </div>
    );
  }
}

export default App;
