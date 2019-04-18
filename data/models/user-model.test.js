const db = require('../dbConfig.js');

const userModel = require('./user-model.js');

describe('user-model.js', () => {

  describe('find()', () => {
    
    it('Should return a list of users', async () => {
      const users = await userModel.find();

      expect(users.length).toBeGreaterThan(0);
    });
    
    it('Should return an array', async () => {
      const users = await userModel.find();
      
      expect(Array.isArray(users)).toBeTruthy();
    })

  })

})