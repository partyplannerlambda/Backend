const db = require('../dbConfig.js');

module.exports = {
	add,
	find,
	findById,
	remove,
	update
};

function find(id) {
  const party_id = id;
  return db('shopping_list')
    .where({ party_id });
}

async function add(item) {
	const [ id ] = await db('shopping_list').insert(item);

	return findById(id);
}

function findById(id) {
	return db('shopping_list').where({ id }).first();
}

function remove(id) {
	return db('shopping_list').where({ id }).del();
}

function update(id, changes) {
  return db('shopping_list')
    .where({ id })
    .update(changes)
    .then(res => {
      return findById(id);
    })
}
