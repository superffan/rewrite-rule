var body = $response.body;

console.info('修改前->',body);

var obj = JSON.parse(body);

obj['code'] = 200;
obj['succeeded'] = true;
body = JSON.stringify(obj);

console.info('修改后->',body);

$done(body);
