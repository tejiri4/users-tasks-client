import React from 'react'
import { useStoreContext } from '../../store'
import { deleteUser, setUsers , deleteTask, closeModal, setTasks } from '../../store/actions';
import DeleteWarning from '../../components/DeleteWarning'
import TaskForm from '../TaskForm'
import UserForm from '../UserForm'

import "./ModalManager.css"

const Modal = () => {
	const { store, dispatch } = useStoreContext()

	const handleUserDelete = () => {
		const id = store.modalConfig.data.id;

		deleteUser(id).then((data) => {
			dispatch(setUsers(data))
			dispatch(closeModal())
	  })
	}

	const handleTaskDelete = () => {
		const data = store.modalConfig.data;

		deleteTask(data.id, data.user_id).then((data) => {
			dispatch(setTasks(data))
			dispatch(closeModal())
	  })
	}

	const modalContent = () => {
		switch (store.modalConfig.type) {
			case 'add-user':
				return <UserForm title="Add User" buttonName="SUBMIT"/>;
			case 'edit-user':
				return <UserForm title="Edit User" buttonName="SUBMIT" data={store.modalConfig.data} isEdit/>;
			case 'add-task':
				return <TaskForm title="Add Task" buttonName="SUBMIT"/>;
			case 'edit-task':
				return <TaskForm title="Edit Task" buttonName="SUBMIT" isEdit data={store.modalConfig.data}  />;
			case 'delete-user':
					return <DeleteWarning title="Delete User" text={`Are you sure you want to delete ${store.modalConfig.data.name}`} handleClick={handleUserDelete} />;
			case 'delete-task':
					return <DeleteWarning title="Delete Task" text={`Are you sure you want to delete task with id ${store.modalConfig.data.id}`} handleClick={handleTaskDelete} />;
			default:
				break;
		}
	}

	return (
		<>
			{ store.modalConfig.showModal && (
					<div className="modal">
						 <div className="modal__content">
								<div>
									<div className="modal__close" onClick={() => dispatch(closeModal())}>
										<img src="https://res.cloudinary.com/store-manager/image/upload/v1607782531/cancel.svg" alt="cancel"/>
									</div>
									{
										modalContent()
									}
								</div>
						 </div>
					</div>
				)
			}
		</>
	)
}

export default Modal
