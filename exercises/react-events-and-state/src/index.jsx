import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isClicked ? ' Thanks' : 'Click Me!'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
