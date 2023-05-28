const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeetupSchema = new Schema({
    title: String,
    image: String,
    address: String,
    description: String
})
mongoose.models={};
const Meetup  = mongoose.model('Meetup',MeetupSchema );
export default Meetup;
