



function Counter(state = 0, action){
    switch(action.type)
    {
        case "Increment":
        return state + 1
        case "Decrement":
        return state - 1
        case "incrementUserInput":
        return state + action.val
        default:
        return state;
    }
}

export default Counter;