import mongoose from 'mongoose'

// Define the car schema
const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  }
}, { timestamps: true }); // Optional: Adds createdAt and updatedAt fields automatically

// Create a model from the schema
const Car = mongoose.models.Car || mongoose.model('Car', carSchema);

export default Car;



