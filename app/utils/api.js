import fetch from 'isomorphic-fetch'
import { config }from '../config';

function fetchData() {
    return fetch(config.api + '/tags')
        .then(response => response.json())
        .catch((error) => {
            //TODO handle error
            console.error(error);
        });
}

export default fetchData
