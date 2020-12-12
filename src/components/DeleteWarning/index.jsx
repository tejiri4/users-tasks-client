import React from 'react'
import Button from '../Button';

import './DeleteWarning.css'

const DeleteWarning = ({ text, title, handleClick }) => {
	return (
		<div className="delete-warning">
			<h1>{title}</h1>
				<p>
						{text}
				</p>
				<Button name="Delete" handleClick={handleClick}  />
		</div>
	)
}

export default DeleteWarning
