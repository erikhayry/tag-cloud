import fetchData from '../utils/api'
import mapper from '../utils/mapper/mapper';
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
            .then(items => mapper(items))
            .then(mock)
            .then(items => {
                dispatch(receiveTagsAction(items))
            })
    }
}
