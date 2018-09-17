import React, { Component } from 'react';
import Form from './components/Form';
import Front from './components/Front';
import Back from './components/Back';
import './App.css';

// { front: "", back: ""}
class App extends Component {
  state = { fronts: [], backs: [], showBack: false}

  toggleShowBack = () => {
    this.setState({ showBack: !this.state.showBack})
  }

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

  // deleteCard = () => {
  //   const { fronts, backs} = this.state;
  //   this.setState({fronts: fronts.filter(t => t.idf !==idf )})
  //   this.setState({backs: backs.filter(t => t.idu !==idu )})
  // }
  // cardList = () => {
  //   const { fronts, backs} = this.state;
  //   for( let i = 0; i <fronts.length; i++ )
  //   idf = fronts[i]
  //   for( let u = 0; u <backs.length; u++ )
  //   idu = backs[u]
  // }
  

  
  render() {
    const { showBack } = this.state
    return (
      <div>
        <div>
          <Form addFront={this.addFront} addBack={this.addBack}/>
          <div className="cards">
          <div className="column">
          {this.Front()}
          </div>
          <div className="column">
          {showBack && this.Back()}
          <button onClick={this.toggleShowBack}>
          { showBack ? 'Hide' : 'Show'}
          </button>
          <button onClick={this.deleteCard}>Delete Card</button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
