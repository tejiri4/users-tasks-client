import React from 'react';
import { useHistory } from "react-router-dom";
import { useStoreContext } from '../../store';
import { fetchUser, openModal, setUser } from '../../store/actions';

import './User.css';

const User = ({ name, createdAt, id }) => {
	const history = useHistory();
	const { store } = useStoreContext();

	const { dispatch } = useStoreContext()

	const handleEditUser = () => {
		const user = store.users.users.find(({ id: userId }) => userId === id);

		dispatch(openModal('edit-user', user))
	}

	const handleDeleteUser = () => {
		const user = store.users.users.find(({ id: userId }) => userId === id);

		dispatch(openModal('delete-user', user))
	}

	const handleFetchUserTasks = () => {
		// set user details
		dispatch(setUser({ name, createdAt, id }))

		history.push(`/tasks/${id}`)
	}

	return (
		<div className="user">
			<div className="user__contents" onClick={handleFetchUserTasks}>
      	<div className="user__contents__id">ID: <span>{id}</span></div>
				<div className="user__contents__detail">
					<p>{name}</p>
					<p>{new Date(createdAt).toDateString()}</p>
				</div>
			</div>
			<div className="user__actions">
			  <div onClick={handleEditUser}>
					<img src="https://res.cloudinary.com/store-manager/image/upload/v1607776601/edit.svg" alt="edit"/>
				</div>
				<div onClick={handleDeleteUser}>
					<img src="https://res.cloudinary.com/store-manager/image/upload/v1607776683/delete_1_1.svg" alt="delete"/>
				</div>
			</div>
		</div>
	)
}

export default User
