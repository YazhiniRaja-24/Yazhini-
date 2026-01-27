import { useState } from 'react'
const Profile = ({name, age,skills}) => {
  return (
    <div>
<h1>I am {name} and i m {age} years old.</h1>
<ul>
    {skills.map((skill)=>(
        <li >{skill}</li>
    ))}
  </ul>
</div>
  )
}

export default Profile
