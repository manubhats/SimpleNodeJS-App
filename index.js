var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var users = [{
    "name": "New York, NY, USA",
    "ll": "40.7143528,-74.00597309999999",
    "highF": 62,
    "lowF": 48
   },
  {
    "name": "Los Angeles, CA, USA",
    "ll": "34.0522342,-118.2436849",
    "highF": 75,
    "lowF": 56
  },{
    "name": "Chicago, IL, USA",
    "ll": "41.8781136,-87.6297982",
    "highF": 59,
    "lowF": 41
  },
  {
    "name": "Houston, TX, USA",
    "ll": "29.7601927,-95.36938959999999",
    "highF": 80,
    "lowF": 60
  },
  {
    "name": "Philadelphia, PA, USA",
    "ll": "39.952335,-75.16378900000001",
    "highF": 65,
    "lowF": 47
  },
  {
    "name": "Phoenix, AZ, USA",
    "ll": "33.4483771,-112.0740373",
    "highF": 87,
    "lowF": 63
  },
  {
    "name": "San Antonio, TX, USA",
    "ll": "29.4241219,-98.49362819999999",
    "highF": 80,
    "lowF": 59
  },
  {
    "name": "San Diego, CA, USA",
    "ll": "32.7153292,-117.1572551",
    "highF": 70,
    "lowF": 58
  },
  {
    "name": "Dallas, TX, USA",
    "ll": "32.802955,-96.769923",
    "highF": 77,
    "lowF": 57
  },
  {
    "name": "San Jose, CA, USA",
    "ll": "37.3393857,-121.8949555",
    "highF": 71,
    "lowF": 50
  },
  {
    "name": "Austin, TX, USA",
    "ll": "30.267153,-97.7430608",
    "highF": 80,
    "lowF": 59
  }];

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get("/cityList",function(req,res){
    console.log(users);
    res.json(users);
  });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



