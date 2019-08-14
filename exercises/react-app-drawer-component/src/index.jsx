import React from 'react';
import ReactDOM from 'react-dom';

class Appdrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    if (this.state.showMenu) {
      return (
        <div>
          <div onClick={this.handleClick} className='menu'>Menu
            <div><br/>About <br/>Get Started <br/>Sign Up</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='fas fa-bars' onClick={this.handleClick}></div>
      );
    }

  }
}

ReactDOM.render(
  <Appdrawer/>,
  document.querySelector('#root')
);
