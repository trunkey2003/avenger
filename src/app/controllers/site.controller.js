const Movie = require("./models/movies.model");
const Comment = require("./models/comments.model");
const Country = require("./models/countries.model");

var tempComments = [];
var tempCountries = [];

class SiteController {
  mainRender(req, res, next) {
    Comment.find({deletedAt: null})
      .then((comments) => (tempComments = comments))
      .catch((error) => next(error));

    Country.find({})
      .then((countries) => (tempCountries = countries))
      .catch((error) => next(error));

    Movie.find({})
      .then((movies) =>
        res.render("home", {
          movies: movies.map((movies) => movies.toObject()),
          comments: tempComments.map((tempComments) => tempComments.toObject()),
          countries: tempCountries.map((tempCountries) =>
            tempCountries.toObject()
          ),
        })
      )
      .catch((error) => next(error));
  }

  comment(req, res) {
    const comment = new Comment(req.body);
    comment
      .save()
      .then(() => {
        res.redirect("/#footer");
        alert("Comment sent!");
      })
      .catch((err) => res.json("ERROR!!"));
  }

  reply(req, res) {
    const query = { _id: req.body.id };
    const update = { $push: { replies: req.body } };
    Comment.findOneAndUpdate(query, update)
      .then(() => res.redirect('/#commenter-avatar-' + req.body.id))
      .catch(() => res.json("Err"));
  }

  deleteReply(req, res) {
    Comment.findOneAndUpdate({ _id: req.body.commentID }, { $pull: { replies: { _id: req.body.replyID } } }, { multi: true })
      .then(() => res.redirect('/#commenter-avatar-' + req.body.commentID))
      .catch(() => res.json("Cannot delete this reply"));
  }

  deleteComment(req, res) {
    Comment.deleteOne({ _id: req.body.commentID })
      .then(() => res.redirect('/#footer'))
      .catch(() => res.json("Cannot delete this reply"));
  }

  modifyReply(req, res, next) {
    // res.json(req.body);
    const query = { _id: req.body.commentID};
    const index = req.body.replyIndex;

    Comment.findOne(query)
    .then(target => {
      target.replies[index].name = req.body.name;
      target.replies[index].location = req.body.location;
      target.replies[index].reply = req.body.reply;
      target.replies[index].time = new Date();
      target.save()
      .then(()=> res.redirect('/#commenter-avatar-' + req.body.commentID))
      .catch(() => res.json("Cannot save this reply"));
    })
    .catch(() => res.json("Cannot modify this reply"))
  }

  modifyComment(req, res, next) {
    const query = {_id: req.body.commentID};

    Comment.findOne(query)
    .then(target => { 
      target.name = req.body.name;
      target.location = req.body.location;
      target.comment = req.body.comment;
      target.time = new Date();
      target.save()
      .then(()=> res.redirect('/#commenter-avatar-' + req.body.commentID))
      .catch(() => res.json("Cannot save this comment"));
    })
    .catch(() => res.json("Cannot modify this comment"))
  }

  throwError(req, res, next){
      res.json('Hmu Hmu tui chưa làm chức năng này thì làm sao mà tìm từ ' + req.body.search + ' được hả bạn ơi, quay lại hôm nào đê nhé');
  }
}
module.exports = new SiteController();
