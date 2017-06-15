const scrapeIt = require('scrape-it');

module.exports = function(app) {
  app.get('/', function(req, res) {
    const url = 'https://sfbay.craigslist.org/search/cta?query=golf+r&search_distance=50&postal=94089&min_auto_year=2016&max_auto_miles=25000';
    scrapeIt(url, {
        t: '.cattitle a',
        result: {
          listItem: '.result-row',
          data: {
            pic: {
              selector: '.result-img img',
              attr: 'src'
            },
            price: '.result-info .result-price',
            date: '.result-info .result-date',
            title: '.result-info .result-title',
            hood: '.result-info .result-hood',
          }
        }
    }).then(data => {
      console.log(data.result);
      res.render('public/templates/base', data);
    });
  });
}
