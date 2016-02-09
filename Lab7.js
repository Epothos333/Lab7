var grocList = {};
grocList.name = ["potatoes", "bananas", "hamburgers", "apples", "dogs", "cats", "leopards"];
grocList.price = [0.99, 0.79, 2.99, 0.50, 30.00, 29.00, 44.99];
var totalPrice = 0;


for (var i=0; i<grocList.name.length; i++) {
	console.log(grocList.name[i]);
	console.log("$" +grocList.price[i]);
	totalPrice += grocList.price[i];
}

console.log("The total Price is: " + totalPrice);