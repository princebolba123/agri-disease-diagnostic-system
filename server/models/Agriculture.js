const mongoose = require('mongoose');

// Level 3: Individual Disease
const diseaseSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  organicCure: String,
  chemicalCure: String
});

// Level 2: Individual Crop
const cropSchema = new mongoose.Schema({
  name: String,
  botanical: String,
  image: String,
  diseases: [diseaseSchema]
});

// Level 1: Category Root
const agricultureSchema = new mongoose.Schema({
  crop: {
    cropType: {
      type: Map,
      of: new mongoose.Schema({
        cropTypeName: String,
        crops: { type: Map, of: cropSchema }
      })
    }
  }
}, { collection: 'CropDataDuplicates' }); // <--- CRITICAL: This matches your mongo.png screenshot

module.exports = mongoose.model('Agriculture', agricultureSchema);