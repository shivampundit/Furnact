const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const furnitureRoutes = require('./routes/furnitureRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json({ extended: false }));

app.use('/api/auth', authRoutes);
app.use('/api/furniture', furnitureRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
