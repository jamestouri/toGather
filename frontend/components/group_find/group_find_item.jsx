import React from 'react';
import { Link } from 'react-router-dom';


const GroupFindItem = ({group}) => {
  const style = {backgroundImage: `url(${group.image_url})`}
  return (
    <Link to={`groups/${group.id}`}>
      <li className="group-find-item" style={style}>
        <h1>{group.title}</h1>
      </li>
    </Link>

  )
}


export default GroupFindItem;
