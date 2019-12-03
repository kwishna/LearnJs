const E = require('express');
const url = require('url');
const fs = require('fs');
const bodyParser = require('body-parser');
var path = require("path");

var e = E();

// parse application/x-www-form-urlencoded
e.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
e.use(bodyParser.json());

//e.set('js', path.join(__dirname, 'js'));

e.get('/', function(request, response){

	response.writeHead(200, 'HTTP OK');
	
	fs.readFile('D:\\Work\\HTML5Application\\public_html\\index.html', function(err, data){
            response.write(data);
            response.end();
        });
	
});

e.post('/sms', function(request, response){

	response.writeHead(200, 'HTTP OK');
        response.write('you posted:\n');
        response.end(JSON.stringify(request.body, null, 2));
        
	
//	fs.readFile('D:\\Work\\HTML5Application\\public_html\\index.html', function(err, data){
//            response.write(data);
//            response.end();
//        });
	
});

e.listen(8080, '0.0.0.0');
