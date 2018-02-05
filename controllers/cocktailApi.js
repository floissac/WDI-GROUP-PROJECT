const rp = require('request-promise');

function cocktailProxy(req, res, next) {
  console.log('getting here');
  rp({
    method: 'GET',
    url: 'http://addb.absolutdrinks.com/drinks/?apiKey=f2e2f533899b416ca6705e91908172f2',
    json: true
  })
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch(next);
}

module.exports = {
  proxy: cocktailProxy
};