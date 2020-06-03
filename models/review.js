const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  name: { type: String, require: true},
  rating: {type: Number, require: true},
  review: { type: String, require: true}
})

ReviewSchema.pre("save", function(next) {
  const now = new Date();
  this.updatedAt = now;

  if (!this.createdAt) {
    this.createdAt = now;
  }

  next();
});

module.exports = mongoose.model("Review", ReviewSchema)
