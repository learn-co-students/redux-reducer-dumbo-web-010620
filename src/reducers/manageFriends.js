export function manageFriends(state = {
    friends: []
}, action){
    switch(action.type){
        case "ADD_FRIEND":
            return (
                { // spread operator makes a "copy" of current state, "friends" key has new array.
                ...state, friends: [...state.friends, action.friend] // ...state.friends makes copy of current attribute of friends, 
            })
        case "REMOVE_FRIEND":
            return(
                {...state, friends: [
                    ...state.friends.filter(friend => friend.id !== action.id)
                ]  
            })
        default:
            return state
    }
}
