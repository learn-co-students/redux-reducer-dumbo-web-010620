export function manageFriends(state={friends: []}, action){
    // console.log("state", state, "action", action)

    switch (action.type) {
        case 'ADD_FRIEND':
            console.log("attempting to ADD FRIEND")
            let newState = {...state}
            newState.friends.push(action.friend)
            return newState
        
        case 'REMOVE_FRIEND':
            console.log("attempting to REMOVE FRIEND")
            console.log("state", state, "action", action)
            console.log(action.id)
            let newStateOfFriends =  {...state}
            newStateOfFriends.friends = newStateOfFriends.friends.filter (friend =>
                friend.id !== action.id)
            // newStateOfFriends = newStateOfFriends.filter( friend =>
            //     friend.id !== action.id)
            return newStateOfFriends

        default:
            return state
    }
}
