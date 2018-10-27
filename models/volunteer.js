const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
});
volunteerSchema.methods.validPassword = function( pwd ) {
    // EXAMPLE CODE!
    return ( this.password === pwd );
};

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;