// routes/note_routes.js

const JSON = require('circular-json');

module.exports = function (app, db) {
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
