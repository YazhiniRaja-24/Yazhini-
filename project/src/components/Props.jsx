import React from 'react'

const Props = ({ name, dept, skills }) => {
  return (
    <div>
      <h2>Hello {name}, welcome to React!</h2>
      <p>Your department is: {dept}</p>
      <ul>
        {skills.map((skill)=>(
            <li>{skill}</li>
        ))}
      </ul>
     
      <ol>
        {skills.map((skill)=>(
            <li>{skill}</li>
        ))}
      </ol>
    </div>
  )
}

export default Props
