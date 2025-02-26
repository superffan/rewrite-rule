var obj = {
    "msg": "操作成功",
    "code": 200,
    "star": true
};
var body = JSON.stringify(obj);

$done({ body, status: 'HTTP/1.1 200 OK' });
