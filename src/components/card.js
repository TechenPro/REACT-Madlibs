import React, { Component } from 'react';

import Input from './input'
import Content from './content'

const INITIAL_STATE = {
  color: '',
  pluralNoun: '',
  adj1: '',
  celeb1: '',
  adj2: '',
  noun1: '',
  num1: '',
  num2: '',
  noun2: '',
  adj3: '',
  celeb2: '',
  celeb3: '',
  adj4: '',
  noun3: '',
  celeb4: '',
  adj5: '',

  contentVisible: false,
};

class Card extends Component {

  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.handelInputChange = this.handelInputChange.bind(this);
    this.handelFormSubmit = this.handelFormSubmit.bind(this);
  };

  handelInputChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  };

  handelFormSubmit(event) {
    event.preventDefault();

    if(this.state.contentVisible) {
      this.setState(INITIAL_STATE)
    } else {
      this.setState({ contentVisible: true })
    }

  };

  render() {

    const inputData = [
      {title: 'Color', state: this.state.color, name: 'color'},
      {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
      {title: 'Adjective', state: this.state.adj1, name: 'adj1'},
      {title: 'Celebrity', state: this.state.celeb1, name: 'celeb1'},

      {title: 'Adjective', state: this.state.adj2, name: 'adj2'},
      {title: 'Noun', state: this.state.noun1, name: 'noun1'},
      {title: 'Number', state: this.state.num1, name: 'num1'},
      {title: 'Number', state: this.state.num2, name: 'num2'},

      {title: 'Noun', state: this.state.noun2, name: 'noun2'},
      {title: 'Adjective', state: this.state.adj3, name: 'adj3'},
      {title: 'Celebrity', state: this.state.celeb2, name: 'celeb2'},
      {title: 'Celebrity', state: this.state.celeb3, name: 'celeb3'},

      {title: 'Adjective', state: this.state.adj4, name: 'adj4'},
      {title: 'Noun', state: this.state.noun3, name: 'noun3'},
      {title: 'Celebrity', state: this.state.celeb4, name: 'celeb4'},
      {title: 'Adjective', state: this.state.adj5, name: 'adj5'},
    ]

    return (
      <form onSubmit={this.handelFormSubmit} className='card'>
        <div className='card__inputs'>
          {
            inputData.map((data, index) =>{
              return Input((data), this.handelInputChange, index)
            })
          }
        </div>
        <button className={`card__${!this.state.contentVisible ? 'generate' : 'clear'}`} type='submit'>{!this.state.contentVisible ? 'Generate Mad Lib' : 'Clear Form'}</button>
        {
          this.state.contentVisible ? <Content data={this.state}/> : false
        }

      </form>
    )
  }

};

export default Card;
