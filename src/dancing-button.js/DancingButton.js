import React from 'react';
import './style.css';

export default class DancingButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.state = {
      left: 50,
      top: 50,
    }
  }

  static getRandomValue() {
    return Math.random() * 100;
  }

  handleMouseDown() {
    this.setState({
      left: DancingButton.getRandomValue(),
      top: DancingButton.getRandomValue(),
    })
  }

  render() {
    return (
      <button
        id="button"
        style={{ top: `${this.state.top}%`, left: `${this.state.left}%` }}
        className="dancing-btn"
        onMouseDown={this.handleMouseDown}
      >
        Can you click me!
    </button>
    )
  }

}
