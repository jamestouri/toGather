import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateUserForm extends React.Component {
  componentWillReceiveProps(newProps) {
    if(newProps.currentUser) {
      newProps.history.push('/');
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      password: ''
    }
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
    this.props.signup(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className='create-box'>
        <div className='whole-form'>
          <form onSubmit={this.handleSubmit} className="form-class">
            <section>
              <h1 className="title">Sign up</h1>
              {this.renderErrors()}

            </section>
            <label>
              Email address
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                />
            </label>
            <label>
              First name
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                />
            </label>
            <label>
              Last name
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                />
            </label>
            <label>
              Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                />
            </label>
            <p className="public-message">Your name is public. We&#39;ll use your email address to send you updates, and your location to find Meetups near you.</p>
            <label  className="button-submit">
              <input type="submit" value="Create User"/>
            </label>
            <div className="terms">
              <p>
                When you "Continue",
                you agree to Meetup's <a href="#">Terms of Service</a>. We will manage
                information about you as described
                in our <a href="#">Privacy Policy</a>, and <a href="#">Cookie Policy</a>.
              </p>
            </div>
          </form>
          <label className="check-login">
            <p>
              Already a member? {this.props.navLink}
            </p>
          </label>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateUserForm);
