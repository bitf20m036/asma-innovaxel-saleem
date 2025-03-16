const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: {
        type: [{ timestamp: { type: Date, default: Date.now } }], // Use Date type and default value
        default: [] // Ensure it's an array by default
    },
},
 { timestamps: true }
);

const URL = mongoose.model('url',urlSchema);
module.exports=URL;