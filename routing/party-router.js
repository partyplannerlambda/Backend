const router = require('express').Router();

const party = require('../data/models/party-model');

router.get('/', async (req, res) => {
  try {
    const parties = await party.find();
    res.status(200).json(parties);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;
