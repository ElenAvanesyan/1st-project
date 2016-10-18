<script>
const http = require('http');
http.createServer (function(req, res) {
	if(req.url === '/programming/language/javascript') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('JavaScript (/ˈdʒævəˌskrɪpt/) is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification.\n');
	}   else if(req.url === '/html/css/javascript') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.\n');
	}   else if(req.url === '/programming/language/java') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented,and specifically designed to have as few implementation dependencies as possible.\n');
	}   else if(req.url === '/python') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('Python is a widely used high-level, general-purpose, interpreted, dynamic programming language. Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java.\n');
	}   else {
		res.writeHead(404, {'Content-Type' : 'text/plain'})
		res.end('Page is not found!\n');
	}
}).listen(3001);
</script>