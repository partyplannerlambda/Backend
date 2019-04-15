const router = require('express').Router();

const Parties = require('../data/models/party-model');

// GET --> /parties
router.get('/', async (req, res) => {
  try {
    const parties = await Parties.find();
    res.status(200).json(parties);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// POST --> /parties
router.post('/', async (req, res) => {
  try {
    const party = await Parties.add(req.body)
    res.status(201).json(party);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;
