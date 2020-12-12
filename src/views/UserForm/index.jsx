import React, { useState } from 'react'
import { useStoreContext } from '../../store';
import { addUser, setUsers, editUser , closeModal} from '../../store/actions';
import Button from '../../components/Button';
import Input from '../../components/Input';

import "./UserForm.css";

const UserForm = ({ title, buttonName, data, isEdit, }) => {
	const [user, setUser ] = useState({ name: data ? data.name : ''})
	const [isButtonDisabled, setIsButtonDisabled] = useState(false)

	const { dispatch } = useStoreContext();

	const handleClick = () => {
		setIsButtonDisabled(true)
		if(!isEdit) {
			addUser(user).then((data) => {
				dispatch(setUsers(data))
				dispatch(closeModal())
			})
		} else {
			editUser(user, data.id).then((data) => {
				dispatch(setUsers(data))
				dispatch(closeModal())
			})
		}
	};

	return (
		<div className="user-form">
				<h1>{title}</h1>
				<div>
						<Input placeholder="Enter name" onChange={({ target }) => setUser({ name: target.value })} value={user.name}  />
						<Button name={buttonName} disabled={!user.name || isButtonDisabled} handleClick={handleClick} />
				</div>
		</div>
	)
}

export default UserForm
