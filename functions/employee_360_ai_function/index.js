'use strict';

module.exports = async (req, res) => {
    try {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            status: 'success',
            message: 'Employee 360 Catalyst function is running',
            path: req.url,
            method: req.method
        }));
    } catch (error) {
        console.error('Function error:', error);

        res.writeHead(500, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            status: 'failure',
            message: 'Internal server error'
        }));
    }
};