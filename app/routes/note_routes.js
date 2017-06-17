// routes/note_routes.js

var path = require('path')

const JSON = require('circular-json');

module.exports = function (app, db) {

  app.get('/', function (req, res) {
  	// Get file for the homepage
  	var fileName = path.join(__dirname, '../../index.html');
  	res.sendFile(fileName, function (err){
  		if(err) console.log(err)
  		else console.log('Sent', fileName)
  	})
  })


  app.get('/ads/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': id };

    db.collection('oldmill_api').findOne(details, (err, item) => {
      if(err){
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(item);
      }
    })
  });

  app.get('/ads', (req, res) => {
    db.collection('oldmill_api').find().toArray(function(err, items) {
      if(err){
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(JSON.stringify(items));
      }
    });
  });
};
