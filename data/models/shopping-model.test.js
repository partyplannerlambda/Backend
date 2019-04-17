const db = require('../dbConfig.js');

const shoppingModel = require('./shopping-model.js');

describe('shopping-model.js', () => {

  describe('find()', () => {
    it('Should return a list of shopping items for the specified party_id', async () => {
      const items = await shoppingModel.find(1);

      expect(items.length).toBeGreaterThan(0);
      expect(Array.isArray(items)).toBeTruthy();
    });
  })

})