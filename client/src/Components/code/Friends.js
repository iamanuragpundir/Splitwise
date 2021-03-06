import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import '../styles/Friends.css'

function Friends(props) {
	const navigate = useNavigate();
	const [data, set_data] = useState([])

	useEffect(() => {
		if (props.signed === false) navigate('/', true);
		
		console.log("hnji friends")
		fetch("http://localhost:5000/api/v1/friends", 
		{
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
		})
		.then(response => response.json())
  		.then(data => set_data(data.friendsList));

	}, [])

	// const data = {friendsList: [
	// 	{ userName: "Ashfiya Hussain", amount: 200 },
	// 	{ userName: "Ashfiya Hussain", amount: -100 },
	// 	{ userName: "Avichal Jain", amount: 200 },
	// 	{ userName: "Ashfiya Hussain", amount: 100 },
	// 	{ userName: "Ashfiya Hussain", amount: -200 },
	// 	{ userName: "Ashfiya Hussain", amount: 0 },
	// 	{ userName: "Anurag Pundir", amount: -200 },
	// 	{ userName: "Ashfiya Hussain", amount: -200 },
	// 	{ userName: "Anurag Pundir", amount: 100 },
	// 	{ userName: "Ashfiya Hussain", amount: 200 },
	// 	{ userName: "Anurag Pundir", amount: 100 },
	// 	{ userName: "Ashfiya Hussain", amount: -200 }
	// ]};

	const entries = [];
	let balance = 0;

	data.map((e) => {
		balance += e.amount;
		let indivisualBalanceState
		let indivisualBalanceColor

		if(e.amount > 0) {indivisualBalanceState = "owes you"; indivisualBalanceColor = "greenCol"}
		else if(e.amount < 0) {indivisualBalanceState = "you owe"; indivisualBalanceColor = "redCol"}
		else {indivisualBalanceState = "settled up"; indivisualBalanceColor = "grayCol"}

		entries.push(<tr>
			<td>{e.userName}</td>
			<td><span className={indivisualBalanceColor}>{indivisualBalanceState}, ₹{Math.abs(e.amount)}</span></td>
		</tr>)
	})

	let balanceState
	let balanceColor
	if (balance == 0) {balanceState = "are all settled-up"; balanceColor="grayCol";}
	else if (balance > 0) {balanceState = `are owed Rs. ${balance}`; balanceColor="greenCol";}
	else {balanceState = `owe Rs. ${-1 * balance}`; balanceColor="redCol";}

	return (
		<div className="friends-div">	
			<div className="friends-table">
				<table className="table table-striped table-hover">
					<th>
					<span><h5>Overall, you <span className={balanceColor}>{balanceState}</span></h5></span>
					</th>
					<tbody>
						{entries}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Friends