import React, { Component } from 'react';

class Content extends Component {
  render() {
    const data = this.props.data

    return (
      <p>
        Ladies and gentlemen, this is <b>{data.color}</b> Barber, your sportscaster, bringing you the last inning of the game between the Cleaveland <b>{data.pluralNoun}</b> and the <b>{data.adj1}</b> Yankees. <b>{data.celeb1}</b> is pitching for the Yankees. Here's the pitch! It's a low <b>{data.adj2}</b> ball that just cuts the inside of the <b>{data.noun1}</b> for a strike. That makes the count <b>{data.num1}</b> strikes and <b>{data.num2}</b> balls. Now here's the next pitch. The batter swings and connects. It's a long, high <b>{data.noun2}</b> out to <b>{data.adj3}</b> field. But <b>{data.celeb2}</b> is coming up fast and has it for the second out. The next batter up is <b>{data.celeb3}</b>, the Cleaveland <b>{data.adj4}</b>-stop. Here's the pitch... and it's hit... a short ground ball to third <b>{data.noun3}</b>. <b>{data.celeb4}</b> scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the <b>{data.adj5}</b> League!
      </p>
    )
  }
}

export default Content;
