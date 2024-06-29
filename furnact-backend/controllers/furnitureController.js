const Furniture = require('../models/Furniture');

exports.getAllFurniture = async (req, res) => {
  try {
    const furniture = await Furniture.find();
    res.json(furniture);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getFurnitureById = async (req, res) => {
  try {
    const furniture = await Furniture.findById(req.params.id);
    if (!furniture) return res.status(404).json({ msg: 'Furniture not found' });
    res.json(furniture);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createFurniture = async (req, res) => {
  const { name, description, price, availability, images, category } = req.body;
  try {
    const newFurniture = new Furniture({
      name,
      description,
      price,
      availability,
      images,
      category,
    });
    const furniture = await newFurniture.save();
    res.json(furniture);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
