import express from 'express';
import 'dotenv/config';
import { connectionsDataBase } from './db/client.js'
import catRouter from './routes/catRouter.js';

const app = express();
const port = 8000;

//add middleware to app and parses incoming bodies as .json
app.use(express.json());
app.use('/cats', catRouter);

//fire up that server
const startServer = async() => {
    await connectionsDataBase();
    //starts express server, when ready logs message to console
    app.listen(port, () => {
        console.log(`Cat app listening on port ${port}`)
    })
}

//if error in server function it is caught here and logs to console
startServer().catch(error => {
    console.log(error, 'Failed to start server');
})