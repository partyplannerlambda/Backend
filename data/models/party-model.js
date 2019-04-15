const db = require('../dbConfig.js');

module.exports = {
	add,
	find,
	findBy,
	findById
};

function find() {
	return db('party');
}

function findBy(filter) {
	return db('party').where(filter);
}

async function add(party) {
	const [ id ] = await db('party').insert(party);

	return findById(id);
}

function findById(id) {
	return db('party').where({ id }).first();
}
