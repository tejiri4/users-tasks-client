import React, { useEffect } from 'react'
import User from '../User'
import { useStoreContext } from '../../store'
import { fetchUsers, openModal, setUsers } from '../../store/actions'

import './Users.css'
import {Skeleton, HeaderSkeleton} from '../../components/Skeleton'

const Users = () => {
	const { store, dispatch } = useStoreContext();

	useEffect(() => {
		fetchUsers().then((data) => {
			dispatch(setUsers(data))
		})
	}, [])

	return (
		<div className="users">
		{ store.users && !store.users.loading ? (
      <>
			  <div className="users__header">
				<h1>{store.users.count} Users Found</h1>
			  </div>
				{ store.users.count ? (
					<>
						<div className="users__users">
							{store.users.users.map(({ id, name, createdAt }) => <User key={id} task={id} id={id} name={name} createdAt={createdAt} />)}
						</div>
					</>
					) : ""
				}
		   </>
		) : (
			<div>
				<div className="users__header users__flex-center"><HeaderSkeleton /></div>
				<div className="users__users">
					<Skeleton  hideFirstRight/>
					<Skeleton hideFirstRight />
					<Skeleton hideFirstRight />
					<Skeleton hideFirstRight />
				</div>
			</div>
		)}
		<div className="add" onClick={() => dispatch(openModal('add-user'))}> 
			<div>
				<img src="https://res.cloudinary.com/store-manager/image/upload/v1607784116/add.svg" alt="add" />
			</div>
		</div>
		</div>
	)
}

export default Users
