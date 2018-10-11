import React from 'react';
import { Link } from 'react-router-dom';

const loggedIn = ({currentUser, logout, location}) => {
  if (currentUser) {
    return (
      <ul className="list-build-out">
        <li><Link className="start-group-text" to={`/create`}>Start new group</Link></li>
        <li><Link className="log-text" to={`/find`}>Explore</Link></li>
        <li><button className="logout-text" onClick={logout}>Log Out</button></li>
      </ul>
    )
  } else if (location.pathname != "/login" && location.pathname != "/signup"){
    return (
      <ul className="list-build-out">
        <li><Link className="start-group-text" to={`/create`}>Start new group</Link></li>

        <li><Link className="log-text" to={`/login`}>Log in</Link></li>
        <li><Link className="log-text" to={`/signup`}>Sign up</Link></li>
      </ul>
    )
  }
}

const Nav = ({currentUser, logout, location}) => {
  let mainDirect = '/';
  if(currentUser) {
    mainDirect = '/find';
  }
  return(
    <nav className="nav-structure">
      <div>
      <Link to={mainDirect}><img className="logo-image" src="https://secure.meetupstatic.com/s/img/5455565085016210254/logo/svg/logo--script.svg"/></Link>
      </div>

        {loggedIn({currentUser, logout, location})}
    </nav>
  )
}

export default Nav;
