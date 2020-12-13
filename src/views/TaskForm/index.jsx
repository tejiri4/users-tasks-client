import React, { useState } from 'react'
import { useStoreContext } from '../../store';
import { addTask, setTasks, editTask, closeModal } from '../../store/actions';
import Button from '../../components/Button';
import Input from '../../components/Input';

import "./TaskForm.css";

const TaskForm = ({ title, buttonName, isEdit, data }) => {
		const [task, setTask ] = useState({  ...(data ? data : { description: '', state: "todo"})});
		const [isButtonDisabled, setIsButtonDisabled] = useState(false)

		const { store, dispatch } = useStoreContext();
		
		const handleClick = () => {
			setIsButtonDisabled(true)
		 if(isEdit) {
			editTask({ description: task.description, state: task.state }, data.id, data.user_id).then(data => {
				dispatch(setTasks(data))
				dispatch(closeModal())
			})
		 } else {
			addTask({ description: task.description, user_id: store.user.id }).then(data => {
				dispatch(setTasks(data))
				dispatch(closeModal())
			})
		 }
		}

		const handleChecked = () => {
			setTask({ ...task, state: task.state === 'todo' ? 'done' : 'todo' })
		}

    return (
        <div className="task-form">
            <h1>{title}</h1>
            <div>
                <Input placeholder="Enter task description." onChange={({ target }) => setTask({ ...task, description: target.value, })} value={task.description}  />
								{isEdit && <Input 
										type="checkbox" 
										label="check the box if done" 
										name="status" 
										classes="checkbox" 
										onChange={handleChecked} 
										checked={task.state === 'done'}
									/>}
                <Button name={buttonName} disabled={!task.description || isButtonDisabled} handleClick={handleClick} />
            </div>
        </div>
    )
}

export default TaskForm
