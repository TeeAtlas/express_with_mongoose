import mongoose from 'mongoose';
// const email regEX =


// 3 string SchemaTypes: 'name', 'nested.firstName', 'nested.lastName'
const studentSchema = new mongoose.Schema({
    studentInfo: {
        lastName: { required: true, type: String },
        firstName: { required: true, type: String },
        email: { required: true, type: String }
    }
  });

const Student = mongoose.model('Student', catSchema);

export default Student;