var express = require('express'),
	Yelp = require('yelp'),
    app = express();


//app.use(express.static(__dirname + '/' + 'buildRelease'));
//app.listen(4000);
//console.log('server is running on 4000');
app.use(express.static(__dirname ));

var yelp = new Yelp({
  consumer_key: 'hyIQVkkGLREDsZobyPp5dQ',
  consumer_secret: 'UgKdpO46BHlEOT-3K3MIPilF-Ro',
  token: 'PCPmAjNSEpcZ4T7TFaQ3VKj8-nhhRhWJ',
  token_secret: 'uF-cSlKj9usvzCIjSeVzwR2OcS8',
});

app.get('/search', function(req, res){
	console.log('params: ', req.query);
	var query = req.query;
	yelp.search({ term: query.term, location: query.location })
			.then(function (data) {
			  res.send(data);
			})
			.catch(function (err) {
			  res.send(err);
			});	
})

app.listen(3000);
console.log('server is running on 3000');