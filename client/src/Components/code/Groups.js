import React, { useEffect } from 'react'
import {useNavigate} from 'react-router'

function Groups(props) {
  const navigate = useNavigate();
  
  useEffect( () => {
    if(props.signed === false) navigate('/', true);
  })

  return (
    <div>Groups</div>
  )
}

export default Groups