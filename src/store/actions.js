// Actions
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";
export const SET_USERS = "SET_USERS";
export const SET_USER = "SET_USER";
export const SET_USERS_LOADING = "SET_USERS_LOADING";
export const SET_TASKS = "SET_TASKS";

// Action creators
export function closeModal() {
  return { type: CLOSE_MODAL };
}

export function openModal(type, data) {
  return { type: OPEN_MODAL, payload: { type, data }};
}

export function setUsers(users) {
  return { type: SET_USERS, payload: users};
}

export function setUser(user) {
  return { type: SET_USER, payload: user};
}

export function setTasks(tasks) {
  return { type: SET_TASKS, payload: tasks};
}
  
export async function fetchUsers () {
  try {
  const users = await fetch(`${process.env.REACT_APP_USER_SERVICE_API}users`);

  const usersJson = await users.json();

  return usersJson;
  } catch(err) {}
}

export async function addUser (data) {
  try {
  await fetch(`${process.env.REACT_APP_USER_SERVICE_API}users`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(data)
  });

  return fetchUsers();
  } catch(err) {}
}

export async function editUser (data, id) {
  try {
  await fetch(`${process.env.REACT_APP_USER_SERVICE_API}users/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'put',
    body: JSON.stringify(data)
  });

  return fetchUsers();
  } catch(err) {}
}


export async function fetchUser (id) {
  try {
  const user = await fetch(`${process.env.REACT_APP_USER_SERVICE_API}users/${id}`);

  const userJson = await user.json();

  return userJson;
  } catch(err) {}
}

export async function deleteUser (id) {
  try {
  await fetch(`${process.env.REACT_APP_USER_SERVICE_API}users/${id}`, {
    method: 'delete'
  });

  return fetchUsers();
  } catch(err) {}
}

export async function fetchUserTasks (id) {
  try {
  const tasks = await fetch(`${process.env.REACT_APP_TASK_SERVICE_API}tasks/users/${id}`);

  const tasksJson = await tasks.json();

  return tasksJson;
  } catch(err) {}
}

export async function addTask (data) {
  try {
  await fetch(`${process.env.REACT_APP_TASK_SERVICE_API}tasks`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(data)
  });

  return fetchUserTasks(data.user_id);
  } catch(err) {}
}


export async function fetchTask(id) {
  try {
  const task = await fetch(`${process.env.REACT_APP_TASK_SERVICE_API}tasks/${id}`);

  const taskJson = await task.json();

  return taskJson;
  } catch(err) {}
}

export async function editTask (data, id, user_id) {
  try {
  await fetch(`${process.env.REACT_APP_TASK_SERVICE_API}tasks/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'put',
    body: JSON.stringify(data)
  });

  return fetchUserTasks(user_id);
  } catch(err) {}
}

export async function deleteTask (id, user_id) {
  try {
  await fetch(`${process.env.REACT_APP_TASK_SERVICE_API}tasks/${id}`, {
    method: 'delete',
  });

  return fetchUserTasks(user_id);
  } catch(err) {}
}