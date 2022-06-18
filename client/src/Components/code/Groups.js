import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import '../styles/Groups.css'
import CreateGroup from './CreateGroup';

function Groups(props) {
	const navigate = useNavigate();
	const [allGroups, set_allGroups] = useState(<span>Oops! no groups to show.</span>);

	useEffect(() => {
		if (props.signed === false) navigate('/', true);
		else {
			const url = `http://localhost:5000/api/v1/group/${props.user.email}`
			const accordions = []

			fetch(url, {
				headers: {
					"Access-Control-Allow-Origin": "*"
				}
			})
				.then(resp => resp.json())
				.then(result => {

					const data = result.content;
					console.log(data)
					let count = 1;

					data.map((accord) => {
						console.log(accord)
						// const NoOwesYou = "Unfortunately! Nobody owes you."
						// const NoYouOwe = "Wohoo! You have no debt."

						const owesYou = []
						const youOwe = []

						if (accord.owesYou.length > 0)
							accord.owesYou.map(ower => {
								owesYou.push(<span>{ower.userName} owes you ₹{ower.amount}</span>)
							})

						if (accord.youOwe.length > 0)
							accord.youOwe.map(lenter => {
								youOwe.push(<p>You owe {lenter.userName} ₹{lenter.amount}</p>)
							})
						
						
						const groupBalances = (accord.owesYou.length > 0 || accord.youOwe.length > 0)
							? <>{owesYou}{youOwe}</>
							: <><span>You're all settled up</span><br /></>

						//pushing accordions
						accordions.push(
							<div className="accordion-item">
								<h2 className="accordion-header" id={`heading${count}`}>
									<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${count}`} aria-expanded="false" aria-controls={`collapse${count}`}>
										{accord.groupName}
									</button>
								</h2>
								<div id={`collapse${count}`} className="accordion-collapse collapse" aria-labelledby={`heading${count}`} data-bs-parent="#accordionExample">
									<div className="accordion-body">
										{groupBalances}
										
										{/* See group transactions and more */}
										<button className="btn btn-light group-details">
											Details
										</button>

									</div>
								</div>
							</div>
						)

						count++;
					})

					set_allGroups(
						<div className="accordion" id="accordionExample">
							{accordions}
						</div>
					)
				})

		}
	}, [])

	return (
		<div className="groups">

			<CreateGroup user={props.user}/>

			<br />

			{allGroups}

		</div>
	)
}

export default Groups