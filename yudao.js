var body = $response.body;
var obj = JSON.parse(body);

obj['code'] = 200;
obj['succeeded'] = true;
body = JSON.stringify(obj);

$done({ body, status: 'HTTP/1.1 200 OK' });
