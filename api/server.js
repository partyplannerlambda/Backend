const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../routing/auth-router');
const partyRouter = require('../routing/party-router');
const shoppingRouter = require('../routing/shopping-router');
const restricted = require('../auth/restricted-middleware.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRouter);
server.use('/parties', restricted, partyRouter);
server.use('/parties/:id/shopping/', restricted, (req, res, next) => {
		req.id = req.params.id;
		next();
	},
	shoppingRouter);
	

server.get('/', (req, res) => {
	res.send("It's alive!");
});

// Just a comment

module.exports = server;
