import React, { useEffect } from 'react'
import {useNavigate } from 'react-router'

function Friends(props) {
  const navigate = useNavigate();
  
  useEffect( () => {
    if(props.signed === false) navigate('/', true);
  })
  
  return (
    <div>Friends</div>
  )
}

export default Friends