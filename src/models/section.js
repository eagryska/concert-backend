/* eslint-disable*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const sectionSchema = new Schema ({
  sectionType: {type: String, required: true},
  seatPrice: {type: Number, required: true},
  seats: [Boolean],
  seatsTaken: {type: Number, required: true},
  totalSeats: {type: Number, required: true},
  totalSales: {type: Number, required: true},

});

module.exports = mongoose.model('Sections', sectionSchema);
