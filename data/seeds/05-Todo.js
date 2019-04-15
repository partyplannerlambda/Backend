exports.seed = function(knex, Promise) {
	return knex('todo_list').del().then(function() {
		return knex('todo_list').insert([ { id: 1, party_id: 1, item: 'Rent costumes', completed: false } ]);
	});
};
