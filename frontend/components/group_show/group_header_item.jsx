import React from 'react';

const HavePhoto = ({group}) => {
  const style = {backgroundColor: 'rgb(236, 236, 236)'};
  if (group.image_url !== undefined) {
    return <img className="profile-picture"  src={group.image_url}/>
  }
  return (
      <div className="profile-picture" style={style}>
      </div>
    )
}


const GroupHomeHeader = ({group, user}) => {
  return (
    <div className="group-home-header">
        <HavePhoto group={group} />
        <div className="group-home-info-header">
          <h1>{group.title}</h1>
          <ul className="group-home-info-header-list">
            <li>{group.location}</li>
            <li>·</li>
            <li>3,452 members</li>
            <li>·</li>
            <li>Public Group</li>
          </ul>
          <div className="group-home-header-owner-info">
              <img className="group-home-owner-picture" src="https://www.telecomtoday.com.au/wp-content/uploads/2016/06/unknown-testimonial.png"></img>
              <div className="header-owner-info-text">
                <h5>Organized by</h5>
                <h6>{user.first_name} {user.last_name}</h6>
              </div>
          </div>
          <div className="list-of-shares">
            <ul>
              <li className="share-word">Share:</li>
              <li><img className="facebook-icon" src="http://www.cfdiocese.org/wp-content/uploads/2015/04/facebook-icon-grey.png"></img></li>
              <li><img className="twitter-icon" src="https://www.gardandco.com/wp-content/uploads/2018/03/twitter-small-grey.png"></img></li>
              <li><img className="linkedin-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-TWttqAHyviLdQymvJRSBqWadyfdD_VGa-B5StSpQ5xmT91Z"></img></li>
              <li><img className="share-icon" src="https://icon-icons.com/icons2/1155/PNG/512/1486564727-share_81543.png"></img></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default GroupHomeHeader;
