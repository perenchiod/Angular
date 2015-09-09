(function() {
	"use strict";
	var app = angular.module("controllerTest" , []);

	app.controller("CartController", function() {
		this.itemsArray = [
			{name: "Eggs", price: 3, quanity: 3},
			{name: "Bacon", price: 5.00, quanity: 7},
			{name: "Sausage", price: 3.25, quanity: 1},
			{name: "Toast", price: 1, quanity: 10},
			{name: "Milk", price: 1, quanity: 12}
		];
		this.grandTotal = 0;

		this.getTax = function () {
			return this.taxTotal = .08125 * this.grandTotal;
		}
		this.newItem = {
			name: "",
			price: 0,
			quanity: 1
		}
		this.addItem = function() {
			this.itemsArray.push(this.newItem);
			this.newItem = {};
		}

		this.cartTotal = function () {
			for (var i = 0; i < this.itemsArray.length; i++) {
				this.grandTotal = this.grandTotal + this.getTax() + this.itemsArray[i].quanity * this.itemsArray[i].price;
			}
		}

		this.cartTotal();
		
	});
})();