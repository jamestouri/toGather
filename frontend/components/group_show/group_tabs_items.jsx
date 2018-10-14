import React from 'react';


const GroupTabsSelection = ({user}) => {
  return (
    <div className="group-tabs">
      <ul>
        <li className="about-light-up">About</li>
        <li>Meetups</li>
        <li>Members</li>
        <li>Photos</li>
        <li>Discussions</li>
        <li>More</li>
      </ul>
      <button className="group-tabs-button">Join this Group</button>
    </div>
  )
}

export default GroupTabsSelection;
