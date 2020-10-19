import React from 'react'
const useCheckbox = (initialState) => {
    const [state, setState] = React.useState(initialState)

    const changeState = (e) => {
        const name = e.target.name
        setState((state) => {
            return ({...state, [name]: !state[name]})
        })
    }
    
    return [state, changeState]
}

export default useCheckbox