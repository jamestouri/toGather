import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() => this.props.history.push('/'));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className="session-box">
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="head-content">
              <h2>Log in
              <img src="https://secure.meetupstatic.com/s/img/09300654065624139187/icon/icon_padlock.gif"/>
              </h2>
            <p className="login-nav">Not registered with us yet? {this.props.navLink}</p>
            {this.renderErrors()}
          </div>
          <div className="body-content">
            <label>
              Email address:
              <input type="text" value={this.state.email} onChange={this.update('email')}></input>
            </label>

            <label>
              Password:
              <p className="forgot-pass">Forgot your password?</p>
              <input type="password" value={this.state.password} onChange={this.update('password')}></input>
            </label>
            <label  className="check">
              <input type="checkbox" readOnly checked/>
              Keep me signed in
            </label>
            <input type="submit" value="Login"/>
          </div>
        </form>
      </div>
    )
  }

}

export default withRouter(SessionForm);
