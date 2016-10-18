<script>

  const reverse = function(arr) {
  let a = new Array; 
    for(let i = arr.length-1; i>=0; i--) {
	a.push(arr[i]);
    }
	return a;
  };
	const reversedArray = reverse([1,2,3,4,5]);
	console.log(reversedArray);


</script>