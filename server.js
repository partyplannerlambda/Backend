const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./routing/auth-router');
const partyRouter = require('./routing/party-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRouter);
server.use('/party', partyRouter);

server.get('/', (req, res) => {
	res.send("It's alive!");
});

module.exports = server;
