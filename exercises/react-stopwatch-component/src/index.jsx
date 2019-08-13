import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0,
      timer: null
    };
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handlePlayClick() {
    if (!this.state.timer) {
      const timerId = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
      this.setState({ timer: timerId });
    } else {
      clearInterval(this.state.timer);
      this.setState({ timer: null });
    }
  }

  handleResetClick() {
    if (!this.state.timer) {
      this.setState({ count: 0 });
    }
  }

  render() {
    const iconClass = this.state.timer ? 'fa-pause' : 'fa-play';
    return (
      <div>
        <p className='stopWatch' onClick={this.handleResetClick}>{this.state.count}</p>
        <i className={`fas ${iconClass}`} onClick={this.handlePlayClick}></i>
      </div>
    );

  }
}

ReactDOM.render(
  <StopWatch/>,
  document.querySelector('#root')

);
