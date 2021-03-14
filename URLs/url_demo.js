const url = require('url');

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

//Serialised URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Host name
console.log(myUrl.hostname);

//Path name
console.log(myUrl.pathname);

//Serialised query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//Add params
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((name, param) => console.log(`${param}: ${name}`))