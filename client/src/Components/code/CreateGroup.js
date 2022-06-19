import React, { useState } from 'react'
import {useNavigate} from 'react-router';

function CreateGroup(props) {
	const [newGroupMembers, set_newGroupMembers] = useState([])
	const [newGroupName, set_newGroupName] = useState("")
	const navigate = useNavigate();

	const handleCreateGroup = () => {
		console.log(newGroupName)
		const membersArray = `${newGroupMembers}`.split('\n')
		console.log(membersArray)

		// TODO POST reuqest to create new group with given name and members
		const url = "http://localhost:5000/api/v1/group/create"
		const body = {
			userId : props.user.email,
			groupName: newGroupName,
			groupMembers: membersArray
		}

		fetch(url, {
			method: 'POST',
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			body: JSON.stringify(body)
		})
		.then(resp => resp.json())
		.then(res => {
			const membersNotFound = res.membersNotFound
			if(membersNotFound.length > 0)
				alert(`Following members were not added, email-id not registered with Splitwise\n${membersNotFound}`)
			else alert('Group created successfully!')
			
		})
		.catch(err => alert(err))

	}


	return (
		<div>
			<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
				Create Group
			</button>

			{/* Modal */}
			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">New Group</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">

							{/* form to enter new group name and members to be added */}
							<form>

								<div class="input-group mb-3">
									<span class="input-group-text" id="basic-addon1">Name</span>
									<input type="text" class="form-control" placeholder="group name here" aria-label="groupName" aria-describedby="basic-addon1" 
										onChange={(e) => {set_newGroupName(e.target.value)}}/>
								</div>
								<div class="input-group">
									<span class="input-group-text">Members</span>
									<textarea class="form-control" aria-label="With textarea" placeholder="enter each email in new line"
										onChange={(e) => {set_newGroupMembers(e.target.value)}}></textarea>
								</div>

							</form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cancel</button>
							<button type="button" onClick={handleCreateGroup} class="btn btn-success">create</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateGroup