import mongoose from 'mongoose';
// regex to validate email
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const catSchema = new mongoose.Schema({
  last_name: { required: true, type: String },
  first_name: { required: true, type: String },
  email: { 
            required: true, 
            type: String,
            match: [emailRegex, 'please fill out a valid email address']
          },
  country: { 
            type: mongoose.Schema.Types.ObjectId,
            //matching the exact model name of your country schema
            ref: 'Country',
            required: true
          }
  });

const Cat = mongoose.model('Cat', catSchema);

export default Cat;

/*1 - about regex (regular expressions)  it helps define 
what an email should look like so user inputs an email
it can also help find specific expressions in large texts and
can help clean up text (whitespaces etc) */