import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends Component {
  state = {cards: [] }

  addCard = (name) => {
    const card = { name }
    const { cards } = this.state;
    this.setState({ cards: [...cards, card] })
  }

  cardList = () => {
    return this.state.cards.map(card => {
      return (
        <div>
          <Card 
          {...card}
          />
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <div>
          <Form addCard={this.addCard}/>
        </div>
      </div>
    );
  }
}

export default App;
