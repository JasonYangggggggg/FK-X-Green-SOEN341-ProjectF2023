const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const userRouter = require('./routes/user');
const houseRouter = require('./routes/house');
const resvervationRouter = require('./routes/reservation');

require('./db/mongoose');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin:  ["http://localhost:3000"],
    methods: ["POST","GET"],
    credentials: true
}));
app.use(cookieParser());
app.use(session({
    secret:'valid',
    resave: false,
    saveUninitialized: false,
    store: mongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/Realestate' }),
    cookie: {
        maxAge: 3600000 
    },
    user: ''
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Your route handlers
//app.use('/user', userRouter);
app.get('/', (req,res)=> {
    console.log(req);
    if(req.session.user){
        return res.json({Login:true, name: req.session.user, Role: req.session.Role});
    }
    else{
        return res.json({Login: false});
    }
})

app.post('/signup', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    console.log(user);
    res.send(true);
});
app.post('/login', async (req, res) => {
    try {
        // If the user is already authenticated, send true
        if (req.session.user) {
            console.log('User is already authenticated');
            console.log(req.session.user);
            return res.send(true);
        }

        // If the user is not authenticated, proceed with login logic
        const user = await User.findOne({ Name: req.body.Name });

        if (!user) {
            console.log('User not found');
            return res.send(false);
        }

        const check = await bcrypt.compare(req.body.Password, user.Password);

        if (!check) {
            console.log('Incorrect password');
            return res.send(false);
        }

        // Set the session variable to indicate that the user is logged in
        req.session.user = { id: user.id, Name: user.Name, Role: user.Role };
        console.log(req.session);
        console.log('Authenticated successfully');
        console.log(user.Role);
        return res.json({Login:true, name: req.session.user, role: user.Role});

    } catch (e) {
        console.log('Error during login:', e);
        return res.json({Login:false});
    }
});

app.post('/logout', async(req,res)=> {
    try {
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                res.status(500).send({ success: false });
            } else {
                res.send({ success: true });
            }
        });
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).send({ success: false });
    }
})


app.use('/house', houseRouter);
app.use('/reservation', resvervationRouter);

app.listen(PORT, () => {
    console.log(`Your backend is running on port ${PORT}`);
});
