const Movie = require('./models/movies.model');

class MoviesController{
    index(req, res, next){
        Movie.find({})
            .then(movies => res.render('movies', { 
                movies: movies.map(movies => movies.toObject())
            }))
            .catch(error => next(error));
    }

    show(req,res,next){
        Movie.findOne({slug : req.params.slug})
        .then(movie => {
            res.render('movies', {
                movie : movie.toObject()
            })
            console.log('Hello');
        })
        .catch(next);
    }

    test(req,res){
        res.send(req.params.slug);
    }
}

module.exports = new MoviesController;