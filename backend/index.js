const express = require('express');
const connectDb = require('./connect/connectDb');
const cors = require('cors');
const { Events } = require('./models/Events');
const { User } = require('./models/User');
const bcrypt = require('bcrypt');
const app = express();

app.use(cors());
app.use(express.json());

connectDb();

app.get('/events', async (request, response) => {
    try {
        const events = await Events.find().sort({ startDate: -1 });
        response.status(200).json({ events })
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
})

app.post('/events', async (request, response) => {
    try {
        const finalData = request.body;
        await Events.insertMany({ ...finalData });

        response.status(200).json({ message: 'All good!' });

    } catch (error) {
        response.status(400).json({ message: error.message })
    }
})

app.post('/events/update/:id', async (request, response) => {
    const { id } = request.params;
    try {
        const event = await Events.findById(id);
        if (!event) {
            return response.status(404).json({ message: 'Event not found' });
        }

        await Events.updateOne({ _id: id }, { ...request.body });
        response.status(200).json({ message: 'Event updated successfully' });
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});

app.post('/user/signup', (request, response) => {
    const data = request.body;
    try {
        const salt = bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(data.password, salt);
        data.password = hashedPassword;
    } catch (error) {

    }
})

app.listen(5000);