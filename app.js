const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require("express-handlebars");

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// for pug templating
app.set('view engine','pug');  
app.set('views','views');


// for ejs templating engine
app.set('view engine','ejs');  
app.set('views','views');


// for handlebars templating engine
// app.engine('hbs',expressHbs({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'}));
// app.set('view engine','hbs');
// app.set('views','views');


// Tell Express to serve files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));


// app.use('/admin', adminRoutes);
app.use('/admin',adminRoutes.router);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle:'page Not Found',path:'/404'});
});

app.listen(3000);