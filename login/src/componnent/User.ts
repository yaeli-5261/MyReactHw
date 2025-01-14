export type userType = {
    id:number,
    firstName: String,
    lastName: String
    email: String,
    password: String
    address: String
    pel: String
}

// export type Action = {
//     type: 'ADD' | 'REMOVE'|'UPDATE'|'GET',
//     data: userType
// }
export type Action = {
    type: "ADD",
    data: {id:number}&{ email: string }& { password: string }
} | {
    type: "UPDATE",
    data: Partial<userType> & { id: number }
} |
{
    type: "GET",
    data: string
} |
{
    type: "DELETE",
    data: string
}

export const User = (state: userType, action: Action): userType => {
    switch (action.type) {
        case 'ADD':
            // localStorage.setItem('user',JSON.stringify(action.data));
            
            return { ...state , ...action.data }
        case 'UPDATE':
            const updateUser = { ...state, ...action.data }
            // localStorage.setItem('user',JSON.stringify(updateUser))
            return updateUser
        // case 'REMOVE':
        //     localStorage.removeItem('user')
        //     return null;
        // case 'GET':
        //     const getUser=localStorage.getItem('user')
        //     return getUser?JSON.parse(getUser):state

        default:
            return state
    }
}
