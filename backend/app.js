const express = require('express');
const app = express();
require('dotenv').config(); 
require('./conn/conn'); 

const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json()); 

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send('Hello, connected to the server!');
});

const PORT = process.env.PORT || 1000; 
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
