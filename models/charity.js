const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charitySchema = new Schema({
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    irsStatus: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    synopsis: { type: String, required: true, trim: true },

});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;