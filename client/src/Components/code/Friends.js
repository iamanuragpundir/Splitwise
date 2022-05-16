import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import '../styles/Friends.css'

function Friends(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.signed === false) navigate('/', true);
  })

  const data = [["Ashfiya Hussain", 100], ["Ashfiya Hussain", 100], ["Ashfiya Hussain", 100], ["Ashfiya Hussain", 100]];

  const entries = []
  data.map((e) => {
    entries.push(<p>{e[0]} <span> {e[1]}</span></p>)
  })

  return (
    <div className="friends-div">
      <span> Overall, you owe $250</span>
      <div className="friends-table">
        <table className="table table-striped table-hover">
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Friends