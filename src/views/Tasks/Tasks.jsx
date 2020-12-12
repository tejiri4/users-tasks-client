import React, { useEffect } from 'react'
import Task from '../Task'
import { useStoreContext } from '../../store'
import { fetchUserTasks, openModal, setTasks, fetchUser, setUser } from '../../store/actions'
import { useParams, useHistory } from "react-router-dom";

import './Tasks.css'
import { HeaderSkeleton, Skeleton } from '../../components/Skeleton';

const Tasks = () => {
	const { store, dispatch } = useStoreContext()

	const history = useHistory();
	const params = useParams()

	useEffect(() => {
		if(!store.user) {
			fetchUser(params.id).then(data => {
				dispatch(setUser(data))
			}).catch(() => {
				history.push('/')
			})
		}

		fetchUserTasks(params.id).then(data => {
			dispatch(setTasks(data))
		})
	}, [])



	return (
		<div className="tasks">
			<div className="back" onClick={() => history.push('/')}>Back</div>
			{
				store.tasks && !store.tasks.loading && store.user ?
				(<>
					<div className="tasks__header">
						<h1>{store.tasks.count || 0} Tasks Found {  store.tasks.count ? `for ${store.user.name}` : ''}</h1>
					</div>
					{
						store.tasks.count ? (
							<div>
							<div className="tasks__tasks">
								{store.tasks.tasks.map(({
									id, description, state, createdAt 
									}) => <Task key={id} id={id} description={description} state={state} createdAt={createdAt} user_id={params.id}/>
									)
								}
							</div>
							</div>
						) : ""
					}
				</>	) : (
							<div>
							<div className="tasks__header tasks__flex-center"><HeaderSkeleton /></div>
							<div className="tasks__tasks">
								<Skeleton />
								<Skeleton />
								<Skeleton />
								<Skeleton />
							</div>
						</div>
				)
			}
			<div className="add" onClick={() => dispatch(openModal('add-task'))}> 
				<div>
					<img src="https://res.cloudinary.com/store-manager/image/upload/v1607784116/add.svg" alt="add" />
				</div>
			</div>
		</div>
	)
}

export default Tasks
