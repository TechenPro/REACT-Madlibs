import React, { Component } from 'react';

import Input from './input'

class Card extends Component {

  constructor() {
    super()

    this.state = {
      color: 'BLUE',
      pluralNoun: '',
      name: ''
    }

    this.handelInputChange() = this.handelInputChange().bind(this);
  }

  handelInputChange() {
    this.setState({ color: 'RED'})
  }

  render() {
    return (
      <div className='card'>
        <h1>{this.state.color}</h1>
        <input onChange={this.handelInputChange}/>
      </div>
    )
  }
}

export default Card;
