const db = require('../dbConfig.js');

const shoppingModel = require('./shopping-model.js');

describe('shopping-model.js', () => {

  describe('find()', () => {

    // afterEach( async () => {
    //   await db('shopping_list').truncate();
    // })
    
    it('Should return a list of shopping items for the specified party_id', async () => {
      const items = await shoppingModel.find(1);

      expect(items.length).toBeGreaterThan(0);
    });
    
    it('Should return an array', async () => {
      const items = await shoppingModel.find(1);
      
      expect(Array.isArray(items)).toBeTruthy();
    })

  })

  describe('add()', () => {

    it('Should return a list that includes the added item', async () => {
      const pinata = { item: "Piñata", purchased: false, price: 15, party_id: 1 };

      const newItem = await shoppingModel.add(pinata);
      expect(newItem.item).toBe('Piñata');

    });
    
  })

  describe('findById()', () => {

    it('Should return an item', async () => {
      const id = 1
      const findItem = await shoppingModel.findById(id);

      expect(findItem).toBeTruthy();
    });

    it('Should return the item with the specified ID', async () => {
      const id = 2
      const findItem = await shoppingModel.findById(id);

      expect(findItem.id).toBe(id);
    });
    
  })

  describe('remove()', () => {

    it('Should return a list of shopping items for the specified party_id', async () => {
      // const items = await shoppingModel.find(1);

      // expect(items.length).toBeGreaterThan(0);
      // expect(Array.isArray(items)).toBeTruthy();
    });
    
  })

  describe('update()', () => {

    it('Should return a list of shopping items for the specified party_id', async () => {
      // const items = await shoppingModel.find(1);

      // expect(items.length).toBeGreaterThan(0);
      // expect(Array.isArray(items)).toBeTruthy();
    });
    
  })


})