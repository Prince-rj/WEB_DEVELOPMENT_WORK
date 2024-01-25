const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/harryKart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(`we're connected`)
});
//creating schema
var kittyschema = new mongoose.Schema({
  name: String
})

//to make collection we write following code and it will make a collection named as the plural of the name given in quotes

var kitten =mongoose.model('collectionkitten',kittyschema)

// creating new kitten entries
var harry=new kitten({name: `harykitty` })
console.log(harry.name)
//saving the entries
harry.save((err,harry)=>{
if(err){return console.error(err)}
})
//finding the data
kitten.find((err,kittens)=>{
  console.log(kittens);
})

