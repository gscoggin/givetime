const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charitySchema = new Schema({
    username: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    irsStatus: { type: String, required: true, trim: true },
    mission: { type: String, required: false, trim: true },
});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;