const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Volunteer
        .find(req.query)
        .sort({ lastName: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(442).json(err));
    },
    findById: function(req, res) {
        db.Volunteer
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        console.log(req);
        db.Volunteer
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Volunteer
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Volunteer
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      }
};