/* eslint-disable new-cap */

import express from 'express';
import Section from '../models/section';

const router = module.exports = express.Router();

router.post('/create', (req, res) => {
  const section = new Section(req.body);
  const newSeats = [];
  for (let i = 0; i < req.body.totalSeats; i++) {
    newSeats.push(false);
  }
  section.seats = newSeats;
  section.save();
  res.send(section);
});

router.get('/', (req, res) => {
  Section.find((err, sections) => {
    res.send(sections);
  });
});

router.post('/:id/update', (req, res) => {
  Section.findOneAndUpdate({ _id: req.params.id }, { $set: { seats: req.body.seats,
    seatsTaken: req.body.seatsTaken, totalSales: req.body.totalSales } }, (err, sec) => {
      res.send({});
    });
});
