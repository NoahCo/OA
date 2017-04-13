var mongoose = require("mongoose");
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
var personSchema = new mongoose.Schema({
  name: {type: String }
, age: Number
, address:{street: String, zip: String, city:String}
},{collection: 'persons'});
var Person = mongoose.model('Person', personSchema);
Person.findOne({name:'bob'} ,function(err, persons) {
  if (err) return console.error(err);
  console.dir(persons);
});
Person.findOne({name:/luke/i} ,function(err, persons) {
  if (err) return console.error(err);
  console.dir(persons);
});

Person.findOneAndUpdate({name: "bob"}, {address:{city:"Chicago",zip : "90028",street : "6565 sunset blvd" }}, {upsert:true}, function(err, persons){
    if (err) return console.error(err);
    console.dir(persons.address); 
});
Person.find(function(err, persons) {
  if (err) return console.error(err);
  console.dir(persons);
});
Person.find({ name: /o/ }, function(err, persons) {
  if (err) return console.error(err);
  console.dir(persons);
});
Person.find({ "address.city": /o/ }, function(err, persons) {
  if (err) return console.error(err);
  console.dir(persons);
});
});
mongoose.connect('mongodb://localhost/mycontacts');