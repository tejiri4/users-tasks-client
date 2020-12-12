export function storeReducer(state, action) {
    switch (action.type) {
      case 'CLOSE_MODAL':
        return { 
            ...state, 
            modalConfig: {
               showModal: false,
               type: ''
            }}
      case 'OPEN_MODAL':
        return { 
            ...state, 
            modalConfig: {
                showModal: true,
                type: action.payload.type,
                data: action.payload.data,
            }
        }
      case 'SET_USERS': 
        return { 
          ...state, 
          users: action.payload
        }
      case 'SET_USER':
        return { 
          ...state, 
          user: action.payload
        }
      case 'SET_TASKS': 
        return {
          ...state, 
          tasks: action.payload
        }
      default:
        return state;
    }
  }
  