import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
//initial State
const initialState = {
    transactions : [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
  ]
}

//Create context

export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({ children }) => {
    //reducer provides all the methods and tools for components to use
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION", //identifier
            payload: id                 //data to send to reducer
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: "ADD_TRANSACTION", //identifier
            payload: {...transaction}                 //data to send to reducer
        })
    }

    //this returns the wrapper that provides the state
    return (
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
        )
}