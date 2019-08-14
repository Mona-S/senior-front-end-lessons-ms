import React from 'react';
import ReactDOM from 'react-dom';

class PasswordValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '',
      passwordError: '',
      isPasswordOk: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password.length === 0) {
      this.setState({ passwordError: 'A password is required',
        isPasswordOk: false });
    } else if (this.state.password.length < 8) {
      this.setState({ passwordError: 'Your password is too short',
        isPasswordOk: false });
    } else if (this.state.password.length >= 8) {
      this.setState({ passwordError: '',
        isPasswordOk: true });
    }

  }

  render() {
    if (this.state.isPasswordOk === '') {
      var errorClass = '';
    } else {
      errorClass = this.state.isPasswordOk ? 'fa-check' : 'fa-times';
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Password:
          <input type="password" value={this.state.value} onChange={this.handleChange}/>
          <i className={`fas ${errorClass}`} onSubmit={this.handleSubmit}></i>
        </label>
        <br></br>
        <div className='error'>{this.state.passwordError} </div>
        <br></br>
        <input type="submit" value="Submit"/>
      </form>
    );

  }
}

ReactDOM.render(
  <PasswordValidation/>,
  document.querySelector('#root')
);
