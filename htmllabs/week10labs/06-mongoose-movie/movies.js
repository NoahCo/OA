var mongoose = require("mongoose");
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
var movieSchema = new mongoose.Schema({
  title: {type: String }
, year: Number
, director:String,
  actors: String
},{collection: 'movies'});
var Movie = mongoose.model('Movie', movieSchema);
Movie.find({ director: "Christopher Nolan" }, function(err, persons) {
  if (err) return console.error(err);
  console.dir(persons);
});
Movie.find({ actors: "Will Smith" }, function(err, persons) {
  if (err) return console.error(err);
  console.dir(persons);
});
Movie.find({ year: {$gte: 1990, $lt: 1999}}, function(err, persons) {
  if (err) return console.error(err);
  console.dir(persons);
});
Movie.find({ year: {$gte: 2011}}, function(err, persons) {
  if (err) return console.error(err);
  console.dir(persons);
});
Movie.findOneAndUpdate({title: "Home Alone"}, {$push: {"actors": "Michael Jackson"}}, {upsert:true, new: true}, function(err, movies){
    if (err) return console.error(err);
    console.dir(movies.actors); 
});
Movie.findOneAndUpdate({title:"Home Alone"}, {$set:{ plot : "A kid is left home ALONE" }},{upsert:true,new:true},function (err, movies) {
 if (err) return console.error(err);
  movies.plot = "A Kid is left home ALONE";
  console.dir(movies);
});
});
mongoose.connect('mongodb://localhost/movies');
//"title" : "John Wick", "year" : 2014, "director" : [ "Chad Stahelski", "David Leitch" ], "actors" : [ "Keanu Reeves", "Michael Nyqvist", "Alfie Allen", "Willem Dafoe" ] }