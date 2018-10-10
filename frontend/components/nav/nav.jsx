import React from 'react';
import { Link } from 'react-router-dom';

const loggedIn = ({currentUser, logout}) => {
  if (currentUser) {
    return (
      <div>
        <Link className="start-group-text" to={`/create`}>Start new Group</Link>
        <button onClick={logout}>Log Out</button>
      </div>
    )
  } else {
    return (
      <div>
        <Link to={`/login`}>Log in</Link>
        <Link to={`/signup`}>Sign up</Link>
      </div>
    )
  }
}

const Nav = ({currentUser, logout}) => {
  return(
    <nav>
      <div>
      <Link to={`/`}><img className="logo-image" src="https://secure.meetupstatic.com/s/img/5455565085016210254/logo/svg/logo--script.svg"/></Link>
      </div>

        {loggedIn({currentUser, logout})}
    </nav>
  )
}

export default Nav;
