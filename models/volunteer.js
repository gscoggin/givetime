const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    cityAddress: { type: String, required: true, trim: true },
    interests: { type: String, required: true, trim: true },

});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;