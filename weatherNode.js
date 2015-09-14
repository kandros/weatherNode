var http = require("http");
var luogo = process.argv[2];
var url = "http://api.openweathermap.org/data/2.5/weather?q="+ luogo +",it&units=metric";

http.get(url, function(res) {
  body = "";
  res.setEncoding('utf8');
  res.on("data", function(chunk) {
    body += chunk;
  });
  res.on("end", function(){
    var jsonresult = JSON.parse(body);
    console.log("Temperatura attuale a " + luogo + " : " + jsonresult.main.temp + "°C");
  });
});

