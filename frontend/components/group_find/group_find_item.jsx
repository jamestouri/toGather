import React from 'react';


const GroupFindItem = ({group}) => {
  const style = {backgroundImage: `url(${group.image_url})`}
  return (
    <li className="group-find-item" style={style}>
      <h1>{group.title}</h1>
    </li>

  )
}


export default GroupFindItem;
