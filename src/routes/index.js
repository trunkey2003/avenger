const weaponsRouter = require('../routes/weapons.route');
const siteRouter = require('../routes/site.route');
const moviesRouter = require('../routes/movies.route');

function route(app) {  
  app.use('/weapons', weaponsRouter);
  app.use('/movies', moviesRouter);
  app.use('/', siteRouter);
}

module.exports = route;


