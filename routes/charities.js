const express = require('express');
const router = express.Router();
const charitiesController = require("../controllers/charityController");
const charitiesAPI = require("../controllers/charityApiController");

//Test route for the API, can be ignored for now
router
	.route('/charityTest')
	.get(charitiesAPI.getCharities);

//Get a list of charities
router
  .route("/charities")
  .get(charitiesController.findAll);

//Find the info on a specific charity
router
	.route("/charity/:id")
	.get(charitiesController.findById)
	.put(charitiesController.update);

router
	.route("/charitysignup")
	.post(charitiesController.create);

module.exports = router;