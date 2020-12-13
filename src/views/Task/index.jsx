import React from 'react'
import { useStoreContext } from '../../store'
import { openModal, fetchTask } from '../../store/actions'

import './Task.css'

const Task = ({ id, description, state, createdAt }) => {
		const { store, dispatch } = useStoreContext()
		
	const handleEditTask = () => {
		const task = store.tasks.tasks.find(({ id: taskId }) => taskId === id);
		
		dispatch(openModal('edit-task', task))
	}

	const handleDeleteTask = () => {
		const task = store.tasks.tasks.find(({ id: taskId }) => taskId === id);
		
		dispatch(openModal('delete-task', task))
	}

	return (
		<div className="task">
			<div className="task__contents" >
				<div>
					<p className="task__contents__id">ID: {id}</p>
					<div className={state}>{state}</div>
				</div>
				<div>
          <p>{description}</p>
				  <p>{new Date(createdAt).toDateString()}</p>
				</div>
			</div>
			<div className="task__actions">
			  {state !== 'done' && (
					<div onClick={handleEditTask}>
						<img src="https://res.cloudinary.com/store-manager/image/upload/v1607776601/edit.svg" alt="edit"/>
					</div>
				)}
				<div onClick={handleDeleteTask}>
					<img src="https://res.cloudinary.com/store-manager/image/upload/v1607776683/delete_1_1.svg" alt="delete"/>
				</div>
			</div>
		</div>
	)
}

export default Task
