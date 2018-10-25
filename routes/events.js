const router = require("express").Router();
const eventsController = require("../controllers/eventsController");

//Pull all events for event feed
router
  .route("/eventfeed")
  .get(eventsController.findAll);

//Create a new event in the DV
router
	.route("/event")
	.post(eventsController.create);

//Get a specific event
router
	.route("/event/:id")
	.get(eventsController.findById)
	.put(eventsController.update)
	.delete(eventsController.remove)

module.exports = router;