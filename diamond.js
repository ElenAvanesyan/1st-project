
<script>
	const diamond = function(n) {

    	if(n%2  === 0) {
		n = n + 1
	}
	const row = function(space, star) { 
		let str = ''; 
		for (let i=1; i<=space; i++) {
			str += ' '; 
		}
		for (let j=1; j<=star; j++) {
			str += '*';
		}
		return str;
	}
    let m = (n+1)/2;
	let spacecount = m-1;
	let starcount = 1;
	for(let j=1; j<=n; j++) {
			console.log(row(spacecount,starcount));
		if (j<m) {
			spacecount--;
			starcount +=2;
		}
		else {
			spacecount ++;
			starcount -=2;
		}
	}
}
	diamond(5);

</script>
