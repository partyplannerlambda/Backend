exports.seed = function(knex, Promise) {
	return knex('shopping_list').del().then(function() {
		return knex('shopping_list').insert([
			{ id: 1, party_id: 1, item: 'balloons', purchased: false, price: 5 },
			{ id: 2, party_id: 1, item: 'drinks', purchased: false, price: 55 },
			{ id: 3, party_id: 1, item: 'cake', purchased: false, price: 20 }
		]);
	});
};
