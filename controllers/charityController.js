const db = require("../models");

module.exports = {
    findAll: function(req, res) {
<<<<<<< HEAD
        db.Charity
=======
        db.Volunteer
>>>>>>> 22f046b7c49f4cf9da479de95312e9805f1cfd13
        .find(req.query)
        .sort({ name: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(442).json(err));
    },
    findById: function(req, res) {
<<<<<<< HEAD
        db.Charity
=======
        db.Volunteer
>>>>>>> 22f046b7c49f4cf9da479de95312e9805f1cfd13
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        console.log(req);
<<<<<<< HEAD
        db.Charity
=======
        db.Volunteer
>>>>>>> 22f046b7c49f4cf9da479de95312e9805f1cfd13
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
<<<<<<< HEAD
        db.Charity
=======
        db.Volunteer
>>>>>>> 22f046b7c49f4cf9da479de95312e9805f1cfd13
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
<<<<<<< HEAD
        db.Charity
=======
        db.Volunteer
>>>>>>> 22f046b7c49f4cf9da479de95312e9805f1cfd13
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      }
};