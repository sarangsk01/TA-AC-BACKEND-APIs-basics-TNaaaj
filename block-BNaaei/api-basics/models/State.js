var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statesSchema = new Schema(
  {
    name: { type: String },
    country: [{ type: Schema.Types.ObjectId, ref: 'Country' }],
    population: [Number],
    area: [String],
    neighbouring_states: [{ type: Schema.Types.ObjectId, ref: 'States' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('State', statesSchema);
