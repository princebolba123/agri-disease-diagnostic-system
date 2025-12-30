const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const Agriculture = require('./models/Agriculture');

const app = express();
const PORT = 5000;

// Connect to MongoDB Atlas
connectDB();

app.use(cors());
app.use(express.json());

// ROUTE 1: Get all category keys (for NewHome cards)
app.get('/api/crop-types', async (req, res) => {
  try {
    const data = await Agriculture.findOne(); 
    if (data && data.crop && data.crop.cropType) {
      // Converts the Map keys (kharif, rabi, etc.) into a simple array
      const categories = Array.from(data.crop.cropType.keys());
      res.json(categories);
    } else {
      res.status(404).json({ message: "No crop data found in collection" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ROUTE 2: Get full data for a specific category
app.get('/api/agriculture', async (req, res) => {
  try {
    const data = await Agriculture.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});