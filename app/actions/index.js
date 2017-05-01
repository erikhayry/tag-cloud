import fetchData from '../utils/api'
import mock from '../utils/mock';

export const GET_TAGS = 'GET_TAGS';

function fetchTagsAction(){
    return {
        type: GET_TAGS
    }
}

export const RECEIVE_TAGS = 'RECEIVE_TAGS';

function receiveTagsAction(items) {
    return {
        type: RECEIVE_TAGS,
        items: items,
    }
}

export function getTags() {
    return function (dispatch) {
        dispatch(fetchTagsAction());

        return fetchData()
            .then(mock)
            .then(items => {
                dispatch(receiveTagsAction(items))
            })
    }
}

export const SET_ACTIVE_TAGS = 'SET_ACTIVE_TAGS';

function setActiveTagsAction(tag, items) {
    return {
        type: SET_ACTIVE_TAGS,
        items: items,
    }
}
