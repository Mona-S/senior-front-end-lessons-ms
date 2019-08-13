import React from 'react';
import ReactDOM from 'react-dom';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render() {
    const label = this.state.isToggleOn ? 'ON' : 'OFF';
    const isOnClass = this.state.isToggleOn ? 'is-on' : '';
    return (
      <div
        onClick={this.handleToggle}
        className={`toggle-switch ${isOnClass}`}>
        <div className="slider">
          <div className="switch"></div>
        </div>
        <span className = "state-label">{ label }</span>
      </div>
    );
  }
}

ReactDOM.render(
  <ToggleSwitch />,
  document.querySelector('#root')

);
