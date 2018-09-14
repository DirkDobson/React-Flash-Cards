import React, { Component } from 'react';

class Form extends Component {
  state = { front: '', back: '' }

  handleChangeFront = (e) => {
    this.setState({ front: e.target.value })
  }

  handleChangeBack = (e) => {
    this.setState({ back: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addCard(this.state.name)
    this.setState({ front: '', back: '' })
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input 
      placeholder='Front'
      required
      front={this.state.name}
      onChange={this.handleChangeFront}
      />
      <input 
      placeholder='Back'
      required
      back={this.state.name}
      onChange={this.handleChangeBack}
      />

      <button onSubmit={this.handleSubmit} type="submit">Send Card</button>
      </form>
    )
  }
}

export default Form;