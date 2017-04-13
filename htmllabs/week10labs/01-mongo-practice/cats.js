var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
  var catSchema = new mongoose.Schema({
  name: String
, age: Number
, breed: String
});
  var Cat = mongoose.model('Cat', catSchema);
  var pet = new Cat({
  name: 'George'
, age: 11
, breed: 'Russian Blue'
});
Cat.create({ name: 'small',age:11,breed:"puffy" },{name: 'butter',age:9,breed:"stiff"}, function (err, small) {
  if (err) return console.error(err);
  console.dir(small);
})
Cat.create({ name: 'butter',age:9,breed:"stiff" }, function (err, small) {
  if (err) return console.error(err);
  console.dir(small);
})
Cat.find(function(err, cats) {
  if (err) return console.error(err);
  console.dir(cats);
});
})

mongoose.connect('mongodb://localhost/cat_app');
