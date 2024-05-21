const express = require('express');
const router = express.Router();

const workController = require('../app/controllers/WorkController');

router.get('/create', workController.create);
router.post('/store', workController.store);
router.get('/:id/edit', workController.edit);
router.put('/:id', workController.update);
router.delete('/:id', workController.delete);

module.exports = router;