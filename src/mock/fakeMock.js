var Mock = require('mockjs');

var json = Mock.mock({
    "data|10": [{
        "title": "@ctitle(7,25)",
        "desc": "@cword(10, 50)",
        "create_time": "@datetime(\"yyyy-MM-dd HH:mm:ss\")",
    }]
});

console.log(json);
