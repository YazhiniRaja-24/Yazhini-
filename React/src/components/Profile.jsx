import { useState } from 'react'
import {useContext} from 'react'
import {userContext} from '../App.jsx'
const Profile = ({ age,skills}) => {
  const name = useContext(userContext)
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
