import {createStore} from 'redux';

let initialState = {
    loggedIn: false,
    searchBarResults: [],
    updatedMeals: []
}

let reducer= function(state, action)
{
    switch(action.type)
    {
        case 'loggedIn':
            return {
                ...state,
                userName: action.userName,
                loggedIn: true,
                userType: action.userType,
                userCoordinates: action.userCoordinates
            }

        case 'loggedOut':
            return {
                ...state,
                userName: '',
                userType: '',
                userCoordinates: undefined,
                loggedIn: false
            }
            
        case 'topSearchBarResults':
            return {
                ...state,
                searchBarResults: action.res,
                searching: true
            }

        case 'stopSearching':
            return {
                ...state,
                searching: false
            }

        case 'updateRequests':
            return {
                ...state,
                updatedRequests: action.updatedRequests
            }

        case 'updateMeals':
            return {
                ...state,
                updatedMeals: action.res
            }
        default:
            return state;
    }
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;