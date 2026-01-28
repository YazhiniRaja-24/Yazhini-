import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Parent from '../components/Parent.jsx'
import Profile from '../components/Profile.jsx'
import State from '../hooks/State.jsx'
import Form from '../hooks/Form.jsx'
import Reducer from '../hooks/Reducer.jsx'
import {userContext} from '../App.jsx'
const Home = () => {
  const [user,setUser]= useState("Tharani")
  return (
    <div>
      <Link to={"/Form"}>Form</Link><br />
      <Link to={"/State"}>useState Example</Link><br />
      <Link to={"/Reducer"}>useReducer Example</Link><br />
      <userContext.Provider value ={user}>
      <Profile  age={19} skills={["html","css","js","JAVA"]}/>
      <Parent/>
      </userContext.Provider>
    </div>
  )
}

export default Home
