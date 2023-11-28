const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./routes/user');
const houseRouter = require('./routes/house');
const resvervationRouter = require('./routes/reservation');


require('./db/mongoose');

const PORT = 3001

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use('/user', userRouter);
app.use('/house', houseRouter);
app.use('/reservation', resvervationRouter);
app.use(express.json());


app.listen(PORT, ()=>{
    console.log(`Your backend is running on port ${PORT}`);
});
