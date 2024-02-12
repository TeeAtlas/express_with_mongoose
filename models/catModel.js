import mongoose from 'mongoose';
// const email regEX =


// 3 string SchemaTypes: 'name', 'nested.firstName', 'nested.lastName'
const catSchema = new mongoose.Schema({
        last_name: { required: true, type: String },
        first_name: { required: true, type: String },
        email: { required: true, type: String }
    }
  );

const Cat = mongoose.model('Cat', catSchema);

export default Cat;