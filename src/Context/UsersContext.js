 import users from '../data/users'
import React, {createContext, useReducer} from 'react';

const UsersContext = createContext({})
const initialState = {users}


export const UsersProvider = props => {

    const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_USER':
                const newUser = { ...action.payload };
                if (!newUser.id) {
                    newUser.id = Date.now();
                }
                return {
                    ...state,
                    users: state.users.map(user =>
                        user.id === newUser.id ? newUser : user
                    ).concat(state.users.some(user => user.id === newUser.id) ? [] : [newUser])
                };

                
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        default:
            return state;
    }
};


    const [state, dispatch] = useReducer(reducer, initialState);



    return(

    <UsersContext.Provider value={{state, dispatch}}>
        {props.children}

    </UsersContext.Provider>


    )

}

export default UsersContext;
