const router = require('express').Router();

const Shopping = require('../data/models/shopping-model.js');

// GET --> /parties/:id/shopping
router.get('/', async (req, res) => {
	try {
    const list = await Shopping.find(req.id);
    console.log('PARMS: ', req.id);
		res.status(200).json(list);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// GET --> /parties/:id/shopping/:id
router.get('/:id', async (req, res) => {
  try {
    const item = await Shopping.findById(req.params.id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Item does not exist' });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ Error: `${error}` });
  }
}); 

module.exports = router;