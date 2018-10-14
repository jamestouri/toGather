import React from 'react';

// Add Event part here

const AboutGroupSection = ({group, user}) => {
  return (
    <div className="about-section">
      <div className="what-we-are">
        <h2>What we're about</h2>
        <p>{group.about}</p>
        <div className="members-number">
          <h3>Members</h3>
          <div className="organizer-box">

          </div>
        </div>
      </div>
      <div className="upcoming-events">

      </div>
  </div>
  )
}

export default AboutGroupSection
