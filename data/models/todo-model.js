const db = require('../dbConfig.js');

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove,
	update
};

function find() {
	return db('todo_list');
}

function findBy(filter) {
	return db('todo_list').where(filter);
}

async function add(todo) {
	const [ id ] = await db('todo_list').insert(todo);

	return findById(id);
}

function findById(id) {
	return db('todo_list').where({ id }).first();
}

function remove(id) {
	return db('todo_list').where({ id }).del();
}

function update(id, changes) {
	return db('todo_list').where({ id }).update(changes, '*');
}
