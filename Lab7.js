var total = 0;

var grocList = [
	{gro: "potatoes",
	price: 0.99
	},
	{gro: "bananas",
	price: 0.79
	},
	{gro: "hamburgers",
	price: 2.99
	},
	{gro: "apples",
	price: 0.50
	},
	{gro: "dogs",
	price: 30.00
	},
	{gro: "cats",
	price: 0.99
	},
	{gro: "leopards",
	price: 0.99
	}
]


for (var i=0; i<grocList.length; i++) {
	console.log(grocList[i].gro);
	console.log("$" +grocList[i].price);
	total += grocList[i].price;
}

console.log("The total Price is: " + total);