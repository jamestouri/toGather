import React from 'react';


class Footer extends React.Component {
  render() {
    return (
      <div className="footer-structure">
        <h1>By James Touri</h1>
        <div className="links-for-profiles">
          <a href="https://www.linkedin.com/in/jamestouri/"><img className="linkedin-redirect" src="https://mbtskoudsalg.com/images/linkedin-logo-png-transparent.png"/></a>
          <a href="https://angel.co/james-touri"><img className="angel-redirect" src="https://cdn.iconscout.com/icon/free/png-256/angellist-555515.png"/></a>
          <a href="https://github.com/jamestouri"><img className="github-redirect"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png"/></a>
        </div>
      </div>
    )
  }
}

export default Footer;
