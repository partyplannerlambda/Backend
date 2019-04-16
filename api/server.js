const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../routing/auth-router');
const partyRouter = require('../routing/party-router');
const todoRouter = require('../routing/todo-router');
const restricted = require('../auth/restricted-middleware.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRouter);
server.use('/parties', restricted, partyRouter);
server.use('/todo', restricted, todoRouter);

server.get('/', (req, res) => {
	res.send("It's alive!");
});

module.exports = server;
