const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    name: { type: String, required: true },
    date: { type: String, default: Date.now },
    synopsis: { type: String, requied: true },
    cityAddress: { type: String, requied: true },
    
});

//CK Comment - to be removed 10/11

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;