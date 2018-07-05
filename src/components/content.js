import React, { Component } from 'react';

class Content extends Component {

  constructor() {
    super();
    this.count = 1;
  }

  componentWillReceiveProps() {
    this.count = 1;
  }

  renderLabel(data) {
    return [
      <div className='card__content__label'>{this.count++}</div>,
      <b>{data}</b>
    ]
  }

  render() {
    const data = this.props.data

    return (
      <div className='card__content'>
        <p>
          Ladies and gentlemen, this is {this.renderLabel(data.color)} Barber, your sportscaster, bringing you the last inning of the game between the Cleaveland {this.renderLabel(data.pluralNoun)} and the {this.renderLabel(data.adj1)} Yankees. {this.renderLabel(data.celeb1)} is pitching for the Yankees. Here's the pitch! It's a low {this.renderLabel(data.adj2)} ball that just cuts the inside of the {this.renderLabel(data.noun1)} for a strike. That makes the count {this.renderLabel(data.num1)} strikes and {this.renderLabel(data.num2)} balls. Now here's the next pitch. The batter swings and connects. It's a long, high {this.renderLabel(data.noun2)} out to {this.renderLabel(data.adj3)} field. But {this.renderLabel(data.celeb2)} is coming up fast and has it for the second out. The next batter up is {this.renderLabel(data.celeb3)}, the Cleaveland {this.renderLabel(data.adj4)}-stop. Here's the pitch... and it's hit... a short ground ball to third {this.renderLabel(data.noun3)}. {this.renderLabel(data.celeb4)} scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the {this.renderLabel(data.adj5)} League!
        </p>
      </div>
    )
  }
}

export default Content;
