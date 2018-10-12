const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charitySchema = new Schema({
    name: { type: String, required: true },
    irsStatus: { type: String, required: true },
    email: { type: String, requied: true },
    synopsis: { type: String, requied: true },

});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;