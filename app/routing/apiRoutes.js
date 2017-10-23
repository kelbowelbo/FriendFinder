// contain a:  GET route with the url '/api/friends'.  This will be used to display a JSON of all possible friends.
//AND POST routes '/api/friend'.  This will be used to handle incoming survey results.  This route will also be used to handle the ccompattability logic.

const friends = require('../data/friends');

module.exports = (app) => {
  app.get('/api/friends', (req, res) => {
    res.json(friends);
  })

  app.post('/api/friends', (req, res) => {
    friends.push(req.body);
  })
};
