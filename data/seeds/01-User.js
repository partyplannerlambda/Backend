exports.seed = function(knex, Promise) {
	return knex('users').del().then(function() {
		return knex('users').insert([
			{ id: 1, username: 'Ian', password: '1234' },
			{ id: 2, username: 'Elisa', password: '1234' },
			{ id: 3, username: 'Josh', password: '1234' }
		]);
	});
};
