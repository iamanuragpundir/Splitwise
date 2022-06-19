import React, { useEffect } from 'react'
import {useNavigate} from 'react-router'

function Activity(props) {
  const navigate = useNavigate();
  
  useEffect( () => {
    if(props.signed === false) navigate('/', true);
  })

  return (
    <div>Activity</div>
  )
}

export default Activity