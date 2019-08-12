import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  colorClass() {
    const { clicks } = this.state;
    if (clicks <= 3) return 'purple';
    if (clicks <= 6) return 'blue';
    if (clicks <= 9) return 'salmon';
    if (clicks <= 12) return 'orange';
    if (clicks <= 15) return 'yellow';
    if (clicks <= 18) return 'white';
  }
  render() {
    const color = this.colorClass();
    return (
      <button onClick={this.handleClick}
        className={`container ${color}`}>
        Hot Button
      </button>
    );
  }
}

ReactDOM.render(
  <HotButton />, document.querySelector('#root')
);
