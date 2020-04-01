import React from 'react';
import {Pill} from '../../styles'

const Me = ({ user }) => {
  console.log('me user',user)
  return (
    <>
    <span className="image">
    <img src="/images/spokane-lights.jpg" alt="" />
    </span>
    <div>
      <p>{user.basics.summary}</p>
    </div>
     <div>
     {user.skills.map(skill => (
       <Pill key={skill.name}>{skill.name}</Pill>
     ))}
   </div>
   </>
  )
}
export default Me