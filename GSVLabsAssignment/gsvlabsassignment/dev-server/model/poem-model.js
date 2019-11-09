import mongoose from 'mongoose';
import { stringify } from 'querystring';

const poemSchema = new mongoose.Schema({
    title: String,
    firstNoun: String,
    secondNoun: String,
    thirdNoun: String,
    firstAdjective: String,
    secondAdjective: String,
    thirdAdjective: String,
    firstAdverb: String,
    secondAdverb: String,
    thirdAdverb: String,
    firstPreposition: String,
    secondPreposition: String,
    thirdPreposition: String,
    firstVerb: String,
    secondVerb: String,
    thirdVerb: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
});
poemSchema.set('timestamps', true); // Adds create_at and updated_at timestamps

export default mongoose.model('task', poemSchema);