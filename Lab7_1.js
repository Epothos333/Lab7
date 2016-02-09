var makeArr = function(x,y) {
	var arr = [];
	if (x > y) {
		var low = y;
		var high = x;
	}
	else {
		var low = x;
		var high = y;
	}
	for (var i = low; i <= high; i++) {
			arr.push(i);
	}
	if (x === y) {
		arr = "that's the same number foo!";
	}
	return arr
}

console.log(makeArr(-4,2));
console.log(makeArr(2,-4));
console.log(makeArr(55,55));
console.log(makeArr(-9,-4));