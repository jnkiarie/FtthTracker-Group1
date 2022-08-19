var mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Define a schema
const ftthSchema = new Schema({
    'name'       : String,
    'email'      : String,
    'prob_desc'  : String,
    'ticket'     : String,
    'phone'      : Number,
    'status'     : String,
     'ISP'       : String
})
// Create a model from the schema
const Ftth = mongoose.model('ftth', ftthSchema);

// Export it
module.exports = Ftth;
