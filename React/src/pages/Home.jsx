import React from 'react'
import Parent from '../components/Parent.jsx'
import Profile from '../components/Profile.jsx'
import State from '../hooks/State.jsx'
import Form from '../hooks/Form.jsx'
const Home = () => {
  return (
    <div>
        {/* <Form/>
      <Parent/>
       <State/> */}
      <Profile name ="Yazhini" age={19} skills={["html","css","js","JAVA"]}/>
      <State/>
      <Parent/>
      <Form/>
    </div>
  )
}

export default Home
