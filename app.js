const express = require("express")
var stream = require('stream');

// create an express app
const app = express()

// use the express-static middleware
app.use(express.json({limit: '50mb'}))
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {})

app.post('/download', function(req, res){
	const base64str = req.body.imageURL.split(';base64,')[1]
	var png = Buffer.from(req.body.imageURL, 'base64')

	// res.set('Content-disposition', 'attachment; filename=' + 'kabk-graphic-design-open-day-2021.png')
	// res.set('Content-Type', 'img/png')

	res.writeHead(200, {
		'Content-Type': 'image/png',
		'Content-Length': img.length,
		'Content-disposition': 'attachment; filename=' + 'kabk-graphic-design-open-day-2021.png'
	})
	res.end(img);

	res.download(png, 'kabk-graphic-design-open-day-2021.png', function(err){
		if (err){
		  console.log(err);
		} else {
		  console.log('downloading successful');
		}
	})
})

// start the server listening for requests
app.listen(process.env.PORT || 80, 
	() => console.log("Server is running..."))

