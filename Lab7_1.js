var makeArr = function(x,y) {
	var arr = [];
	if (x > y) {
		for (var i=y; i<=x; i++) {
			arr.push(i);
		}
	}
	else if (y > x) {
		for (var i=x; i<=y; i++) {
			arr.push(i);
		}
	}
	else {
		arr = "that's the same number!";
	}
	return arr
};

console.log(makeArr(-4,2));
console.log(makeArr(2,-4));
console.log(makeArr(55,55));
console.log(makeArr(-9,-4));