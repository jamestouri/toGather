import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateUserForm extends React.Component {
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
    this.props.signup(user).then(() => this.props.history.push('/'));
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
      <div className='signup-form'>
        <form onSubmit={this.handleSubmit}>
          <section>
            <h2>Sign up</h2>
            {this.renderErrors()}

          </section>
          <br/>
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
          <br/>
          <input type="submit" value="Create User"/>
        </form>
        <footer>
          Already a member? {this.props.navLink}
        </footer>
      </div>
    )
  }
}

export default withRouter(CreateUserForm);
