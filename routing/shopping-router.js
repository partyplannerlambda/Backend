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

// // GET --> /parties/:id/shopping/:id
router.get('/:id', async (req, res) => {
  const partyID = req.id;
  try {
    const item = await Shopping.findById(req.params.id);
    if (item && `${item.party_id}` === partyID) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ Error: `${error}` });
  }
});

// POST --> /parties/:id/shopping
router.post('/', async (req, res) => {
	try {
		const item = await Shopping.add(req.body);
		res.status(201).json(item);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// PUT --> /parties/:id/shopping/:id
router.put('/:id', async (req, res) => {
	try {
		const item = await Shopping.update(req.params.id, req.body);
		if (item) {
			res.status(200).json({ message: 'Item updated' });
		} else {
			res.status(404).json({ message: 'Item could not be found' });
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

// DELETE --> /parties/:id/shopping/:id
router.delete('/:id', async (req, res) => {
	try {
		const count = await Shopping.remove(req.params.id);
		if (count > 0) {
			res.status(200).json({ message: 'Item deleted' });
		} else {
			res.status(404).json({ message: 'Unable to find item' });
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;