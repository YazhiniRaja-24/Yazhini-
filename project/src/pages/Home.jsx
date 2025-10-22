import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h2>Welcome to the Home Page</h2>
      <Link to="/state">Go to State Page</Link>
    </>
  )
}

export default Home
