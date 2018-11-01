import mongoose from 'mongoose';


const Schema = mongoose.Schema;


const variableSchema = new Schema({
    light: {
        type: Number,
    },
    fan: {
        type: Number,
    }
});

export default mongoose.model('Variables', variableSchema);