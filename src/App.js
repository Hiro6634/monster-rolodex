import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id:'aw1'
        },
        {
          name: 'Dracula',
          id: 'sw2'
        },
        {
          name: 'Zombie',
          id:'ak1'
        }
      ]
    };
  }
  render() {
    return(
      <div className="App">
        {
          this.state.monsters.map( monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
