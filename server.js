// Dependence
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ab3971f7a2af4190b5dced2f8d0e4719');
const app = express ();
const db = mongoose.connection;




// port
const PORT = process.env.PORT || 3000;

//Database
const MongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/news';

// Connect to Mongo
mongoose.connect(MongoURI ,  { useNewUrlParser: true,  useUnifiedTopology: true, useFindAndModify: false },
    () => console.log('MongoDB connection established:', MongoURI)
    );

// connection messages
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// // controllers
const newsController = require('./controllers/news.js')
app.use(newsController)


// Middleware

// Public folder for CSS styling
app.use(express.static('public'));

// populates req.body with parsed info from forms 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(NewsAPI)

// method-overrride
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


app.get('/news', (req, res) => {
    res.send('index.ejs')
})



app.listen(PORT, () => console.log( 'Listening on port:', PORT));