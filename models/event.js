const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    name: { type: String, required: true, trim: true },
    date: { type: String, default: Date.now, trim: true },
    synopsis: { type: String, required: true, trim: true },
    cityAddress: { type: String, required: true, trim: true },
    host: [
        {
            type: Schema.Types.ObjectId,
            ref: "Charity"
        }
    ],
    participant: [
        {
            type: Schema.Types.ObjectId,
            ref: "Volunteer"
        }
    ]

});

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;