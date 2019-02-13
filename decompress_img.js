//import * as base64 from '/js/base64.js'

var json_data = require('./img_data.json');

img_data = json_data.people[0].img

var base64Data = img_data.replace(/^data:image\/jpg;base64,/, "");


require("fs").writeFile("out.jpg", base64Data, 'base64', function(err) {
  console.log(err);
});

/*
var obj;
fs.readFile('file', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});
*/