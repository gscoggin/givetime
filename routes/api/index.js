const router = require("express").Router();
const charityRoutes = require("./charity");

// Charity Routes
router.use("/charity", charityRoutes);

module.exports = router;
