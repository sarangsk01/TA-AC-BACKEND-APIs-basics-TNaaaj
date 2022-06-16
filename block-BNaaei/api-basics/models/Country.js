var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema(
  {
    name: { type: String },
    states: [{ type: Schema.Types.ObjectId, ref: 'State' }],
    continent: { type: String },
    population: [Number],
    ethnicity: [String],
    neighbouring_countires: [{ type: Schema.Types.ObjectId, ref: 'Country' }],
    area: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Country', countrySchema);
