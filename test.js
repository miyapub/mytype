var mytype=require('./index');

console.log(mytype.setObj([1,2,3]).isArray());

console.log(mytype.setObj({a:[1,2,3]}).isObject());