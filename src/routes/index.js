const siteRouter = require('./site');
const workRouter = require('./works');


function route(app){
    app.use('/works', workRouter);
    app.use('/', siteRouter);
    
}

module.exports = route;