import React, { Component } from 'react';
import Form from './components/Form';
import Front from './components/Front';
import Back from './components/Back';
import './App.css';

// { front: "", back: ""}
class App extends Component {
  state = { fronts: [], backs: [] }

  addFront = (name) => {
    const front = { name }
    const { fronts } = this.state;
    this.setState({ fronts: [...fronts, front] })
  }

  addBack = (name) => {
    const back = { name }
    const { backs } = this.state;
    this.setState({ backs: [...backs, back] })
  }

  Front = () => {
    return this.state.fronts.map(front => {
      return (
        <div>
          <Front 
            {...front}
          />
        </div>
      )
    })  
  }

  Back = () => {
    return this.state.backs.map(back => {
      return (
        <div>
          <Back 
          {...back}
          />
        </div>
      )
    })  
  }
  render() {
    return (
      <div>
        <div>
          <Form addFront={this.addFront} addBack={this.addBack}/>
          {this.Front()}
          {this.Back()}
        </div>
      </div>
    );
  }
}

export default App;
