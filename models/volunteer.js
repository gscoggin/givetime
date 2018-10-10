const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, requied: true },
    cityAddress: { type: String, requied: true },
    interests:{ type: String, required: true },

});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;