import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema ({
    name: {
            required: true,
            type: String
            },
    alpha2Code: {
            required: true,
            type: String,
            match: [/^[A-Z]{2}$/, 'Please fill out valid alpha2Code']
    },
    alpha3Code: {
            required: true,
            type: String,
            match: [/^[A-Z]{3}$/, 'Please fill out valid alpha3Code']
    },

});

const Country = mongoose.model('Country', countrySchema);

export default Country;