const express = require('express');
const router = express.Router();              // get an instance of the express Router
const fetch = require('isomorphic-fetch');
const mapper = require('./mapper/mapper');
const config = require('./config');

function routes(app){
    router.get('/tags', function(req, res) {
        //TODO cleanup
        let url = config.api.urls.tags + `?page-size=${config.api.size}&api-key=${config.api.key}`;
        fetch(url)
            .then(response => response.json())
            .then(mapper)
            .then(mapData => res.json(mapData))
            .catch((error) => {
                //TODO handle error
                console.error(error);
            });
    });

    app.use('/api', router);
}


module.exports =  routes;
