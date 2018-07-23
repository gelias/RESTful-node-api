var express = require('express');
var router = express.Router();

router.put('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.status(201);
    res.send(JSON.stringify(
        {
            id: Math.random(),
        }
    ));
});

router.get('/:id', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(
        { 
            id: req.param('id'),
            value : 'CAT',
            date: '2018-07-21 11:00:00',
        }
    ));
});

router.delete('/:id', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.status(202);
    res.send(JSON.stringify(
        { 
            id: req.param('id'),
        }
    ));
});

router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(
        [
            { 
            id: 1,
            value : 'CAT',
            date: '2018-07-21 11:00:00',
            },
            { 
                id: 2,
                value : 'DOG',
                date: '2018-07-21 11:15:00',
            }
        ]
    ));
});

module.exports = router;
