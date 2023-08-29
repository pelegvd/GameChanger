import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import Event from './models/Event';

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/event', async (req: Request, res: Response) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//app.post('/event', (req: Request, res: Response) => {
//  console.log(req: Request.body: Response);
//  res.status(200).end();
//})


app.post("/event", async (req: Request, res: Response) => {
    try {
        const newEvent = new Event({
            id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
        });
    

    await newEvent.save();

    res.status(200).end();

    }catch(error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
    
});


async function init() {
    const mongoConnectionString = 'mongodb+srv://gamechangerdb:Jolthit2023^@cluster0.www3fos.mongodb.net/';

    if (!mongoConnectionString) {
        throw new Error("must configure mongo connection string");
    }
    try {
        await mongoose.connect(mongoConnectionString);
    } catch (error) {
        console.log('Error connection to MongoDB', error);
    }

    app.listen(9000, () => console.log(`server started on http://localhost:9000`));
}

init();




//module.exports = app;