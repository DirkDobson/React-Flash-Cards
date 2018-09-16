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
    this.props.addBack(this.state.front)
    this.props.addFront(this.state.back)
    this.setState({ front: '', back: '' })
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input 
      placeholder='Front'
      required
      front={this.state.name}
      onChange={this.handleChangeBack}
      />
      <input 
      placeholder='Back'
      required
      back={this.state.name}
      onChange={this.handleChangeFront}
      />

      <button onSubmit={this.handleSubmit} type="submit">Add Card</button>
      </form>
    )
  }
}

export default Form;