const mongoose = require('mongoose');


const goalSchema = new mongoose.Schema(
  {
    weightLoss: {
      type: Number,
      default:0
    },
    weightGain: {
      type: Number,
      default:0
    },
    bmi: {
      type: mongoose.Decimal128,
    },
    totalCalorieGoal: {
      type: Number,
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
)

const Goal = mongoose.model('goal', goalSchema);

module.exports = Goal;