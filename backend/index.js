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

app.post('/user/signup', async (request, response) => {
    const data = request.body;
    try {
        /* Checking for existing user */
        const user = User.find({ email: data.email });
        if (user) response.status(401).json({ message: 'User already exists! Please use different credentials' })

        /* Continuing the hashing */
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);
        data.password = hashedPassword;

        /* Adding to the database */
        await User.insertMany([{ ...data }])
            .then(data => response.status(200).json({ message: 'User insertion successful!', user: data[0] }))
            .catch(error => response.status(401).json({ message: 'Bad request! Something went wrong!' }))

    } catch (error) {
        response.status(401).json({ message: 'Something went wrong! Please try again!' })
    }
});

app.post('/user/login', async (request, response) => {
    const data = request.body;
    try {
        const user = await User.find({ email: data.email });
        if (!user) response.status(401).json({ message: 'User does not exists! Please use different credentials' });

        const isSamePassword = await bcrypt.compare(data.password, user[0].password)
        if (!isSamePassword) response.status(401).json({ message: 'Please use valid credentials' });
        response.status(200).json({ message: 'User login successful!', user: user[0] })
    } catch (error) {
        response.status(401).json({ message: 'Something went wrong! Please try again!' })
    }
})

app.listen(5000);