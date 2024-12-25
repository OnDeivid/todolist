import mongoose from 'mongoose';

const carsDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true }, // Reference to the User model
  userEmail: { type: String, required: true, unique: true },
  carsEmail: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  updateDate: { type: Date, default: Date.now },
  updatedToday: { type: Boolean, default: false },
  updateError: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

// Check if the model is already defined before creating it
const UserCarsData = mongoose.models.UserCarsData || mongoose.model('UserCarsData', carsDataSchema);

export default UserCarsData;
