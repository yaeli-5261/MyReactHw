export type userType = {
    firstName: String,
    lastName: String
    email: String,
    password: String
    address: String
    pel: String
}

export type Action = {
    type: 'ADD' | 'REMOVE'|'UPDATE'|'GET',
    data: userType
}

export const User = (
    state: userType, action: Action
) => {
    switch (action.type) {
        case 'ADD':
            localStorage.setItem('user',JSON.stringify(action.data));
            return {...action.data}
        case 'UPDATE':
            const updateUser={...state,...action.data}
            localStorage.setItem('user',JSON.stringify(updateUser))
            return updateUser
        case 'REMOVE':
            localStorage.removeItem('user')
            return null;
        case 'GET':
            const getUser=localStorage.getItem('user')
            return getUser?JSON.parse(getUser):state

        default:
            return state
    }
}
