import {GET_TAGS, RECEIVE_TAGS} from '../../actions'

function tagsReducer(state = {
    isFetching: false,
    items: []
}, action){
    switch (action.type) {
        case GET_TAGS:
            return Object.assign({}, state, {
                isFetching: true,
                items: state.items
            });
        case RECEIVE_TAGS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items,
            });
        default:
            return state;
    }
}

export default tagsReducer;
