import React from 'react'
import Navbar from './Navbar'
import Landing from './Landing'

function Home(props) {
  return (
    <div>
      <Navbar signed={props.signed} updateUser={props.updateUser} />
      <Landing signed={props.signed} />
    </div>
  )
}

export default Home