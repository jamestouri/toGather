import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {

  componentWillReceiveProps(newProps) {
    if(newProps.currentUser) {
      newProps.history.push('/');
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    }
  }

  demoLogin(e) {
    e.preventDefault();
    const user = {
      email: 'james@james.com',
      password: '123456'
    }
    this.props.login(user);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);

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
      <div className="whole-body">
        <div className="session-box">
          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="head-content">
              <h2>Log in
                <img src="https://secure.meetupstatic.com/s/img/09300654065624139187/icon/icon_padlock.gif"/>
              </h2>
              <p className="login-nav">Not registered with us yet? {this.props.navLink}</p>
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
              <div className="submit-button">
                <input type="submit" value="Log In"/>
              </div>
            </div>
            <label className="demo-structure">
              <button className="demo-button" onClick={this.demoLogin}>Demo Login</button>
            </label>
          </form>
            {this.renderErrors()}
        </div>
      </div>
    )
  }

}

export default withRouter(SessionForm);
