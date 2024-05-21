const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
let moment = require('moment');
const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = 3000;


//Connect to DB
db.connect();

app.use(methodOverride('_method'));

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json())

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        
    })
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

route(app);