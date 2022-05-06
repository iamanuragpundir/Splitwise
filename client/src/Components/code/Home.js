import React from 'react'
import Navbar from './Navbar'

function Home(props) {
  return (
    <div>
        <Navbar signed={props.signed} updateUser={props.updateUser}/>
    </div>
  )
}

export default Home