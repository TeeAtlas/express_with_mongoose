import mongoose from 'mongoose';

export const connectionsDataBase = async() => {
    try{
        await mongoose.connect(process.env.MONGO_DB)
        console.log('Database Connection Successful');
        return mongoose.connection
    } catch (error) {
        console.log('Connection to database unsuccessful', error);
        process.exit(1);
    }
}