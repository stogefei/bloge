import { ChangeInputValue, AddList, DeleteList } from './actionTypes'
const defaultState = {
    inputValue: '',
    list: [1,2,3]
}

export default (state = defaultState, action) =>{
   
    if (action.type === ChangeInputValue) {
        const newState =  JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === AddList) {
        const newState =  JSON.parse(JSON.stringify(state))
        newState.list.push(action.value)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DeleteList) {
        const newState =  JSON.parse(JSON.stringify(state))
        newState.list.splice(newState.list.indexOf(action.value), 1)
        return newState
    }
    return state;
}