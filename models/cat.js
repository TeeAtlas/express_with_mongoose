import mongoose from 'mongoose';
// const email regEX =


// 3 string SchemaTypes: 'name', 'nested.firstName', 'nested.lastName'
const catSchema = new mongoose.Schema({
    catInfo: {
        lastName: { required: true, type: String },
        firstName: { required: true, type: String },
        email: { required: true, type: String }
    }
  });

const Cat = mongoose.model('Cat', catSchema);

export default Cat;