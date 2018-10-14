import React from 'react';

// Add Event part here

const AboutGroupSection = ({group, user}) => {
  return (
      <div className="about-section">
        <div className="what-we-are">
          <h2>What we're about</h2>
          <p>{group.about}</p>
          <div className="members-number">
            <h3>Members (3,452)</h3>
            <a href="#">See All</a>
          </div>
          <div className="organizer-box">
            <img className="organizer-box-img" src="https://www.telecomtoday.com.au/wp-content/uploads/2016/06/unknown-testimonial.png"></img>
              <div className="header-owner-info-text">
                <h5>Organized by</h5>
                <h6>{user.first_name} {user.last_name}</h6>
              </div>
          </div>
        </div>
        <div className="upcoming-events">
        </div>
      </div>
  )
}

export default AboutGroupSection
