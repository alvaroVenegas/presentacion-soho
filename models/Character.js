const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema(
    {
        alias: { type: String, required: true },
        actor: { type: String, required: true },
        age: { type: String }
    },
    {
        timestamps:true
    }
)

const Character = mongoose.model('characters',characterSchema);
module.exports = Character;