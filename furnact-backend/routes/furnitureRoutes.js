const express = require('express');
const router = express.Router();
const { getAllFurniture, getFurnitureById, createFurniture } = require('../controllers/furnitureController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getAllFurniture);
router.get('/:id', getFurnitureById);
router.post('/', authMiddleware, createFurniture);

module.exports = router;
