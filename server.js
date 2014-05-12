function swapNames(data){
  var ndata = new Object();
  ndata.resArr = [];
  data.forEach(function (item, index) {
    ndata.resArr[index] = {
      fname: item.sname,
      sname: item.fname
    };
  });
  return ndata;
}

var http = require('http');

http.createServer(function (req, res) {
  
  var headers = {};
  // IE8 does not allow domains to be specified, just the *
  // headers["Access-Control-Allow-Origin"] = req.headers.origin;
  headers["Access-Control-Allow-Origin"] = "*";
  headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
  headers["Access-Control-Allow-Credentials"] = false;
  headers["Access-Control-Max-Age"] = '86400'; // 24 hours
  headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
  headers["Content-Type"] = "application/json";
  
  if (req.method === 'OPTIONS') {
    console.log('!OPTIONS');

    res.writeHead(200, headers);
    res.end();
  } else {    
    req.setEncoding("utf8");
    var result = '';
    req.on('data', function (chunk) {
      result += chunk;
    });

    req.on('end', function () {
      var data = swapNames(JSON.parse(result));
      res.writeHead(200, headers);
      res.end(JSON.stringify(data) + '\n');
    });
  }
}).listen(8881, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8881/');