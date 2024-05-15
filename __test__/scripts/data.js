const data1 = `"<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /__test__/eroor/index.html11</pre>
</body>
</html>
"`;

console.log(data1.indexOf('<pre>'));
console.log(data1.indexOf('</pre>'));
console.log(data1.slice(data1.indexOf('<pre>') + 5, data1.indexOf('</pre>')));