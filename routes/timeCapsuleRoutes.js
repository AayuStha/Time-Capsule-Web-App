const express = require('express');
const router = express.Router();
const TimeCapsule = require('../models/TimeCapsule');

// Home route
router.get('/', async (req, res) => {
  const capsules = await TimeCapsule.find({});
  res.render('pages/index', { capsules });
});

// Create a new capsule
router.post('/create', async (req, res) => {
  const { message, unlockDate } = req.body;
  await TimeCapsule.create({ message, unlockDate });
  res.redirect('/');
});

// Unlock and view capsule
router.get('/capsule/:id', async (req, res) => {
  const capsule = await TimeCapsule.findById(req.params.id);
  const now = new Date();
  const isUnlocked = now >= capsule.unlockDate;
  res.render('pages/capsule', { capsule, isUnlocked });
});

module.exports = router;
