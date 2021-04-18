const express = require('express');
const router = express.Router();

// this is where we add our middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

router.use('/api', createProxyMiddleware({
    target: 'http://localhost:5050', // this port is whatever you're using for rokuserver
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
})) // this sends a user's request to any /api page to the rokuserver and then grabs that data and brings it back here. This separates the back end and front end. They communicate via this route.

router.get('/', (req, res) => {
    res.render('index', { message: "Welcome to Flashback!"})

})

router.get('/kids', (req, res) => {
    res.render('kids', { kidsmessage: "Welcome to the Kids page!"})

})

module.exports = router;