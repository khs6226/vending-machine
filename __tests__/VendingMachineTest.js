const VendingMachine = require('../lib/VendingMachine');
let vendingMachine = new VendingMachine();

describe('Vending machine', () => {
    it('should show what is in the vending machine inventory', () => {
        expect(vendingMachine.showInventory()).toMatch("We have 5 units of Coke and it is $1.50 per unit.\nWe also have 4 units of Pepsi and it is $1.40 per unit.\nLastly we have 7 units of Sprite and it is $1.30 per unit.");
    });
    it('should show how much changes are in the vending machine', () => {
        expect(vendingMachine.change).toEqual([{   name: "Toonie",
        units: 20,
        value: 200
    },
    {   name: "Roonie",
        units: 40,
        value: 100
    },
    {   name: "Quarter",
        units: 160,
        value: 25
    },
    {   name: "Dime",
        units: 400,
        value: 10
    },
    {   name: "Nickel",
        units: 800,
        value: 5
    }]);
    });
    it('should return an error message if there is no such product', () => {
        expect(vendingMachine.buyProduct("C", 1, 687)).toMatch("There is no C here");
    });
    it('should return right amount of coins depending on the change', () => {
        expect(vendingMachine.buyProduct("Coke", 2, 430)).toMatch("Here is your change of $1.30 with"+"\n"+"0 toonie(s),"+"\n"+"1 roonie(s),"+"\n"+"1 quarter(s),"+"\n"+"0 dime(s),"+"\n"+"1 nickel(s).");
    });
    it('should return an error message if input amount of the product is larger than the inventory amount', () => {
        expect(vendingMachine.buyProduct("Coke", 20, 2000)).toMatch("There is not enough Coke. Please select a different product.");
    });
    it('should return an error message if money input is less than the price of the product', () => {
        expect(vendingMachine.buyProduct("Pepsi", 2, 50)).toMatch("Please put $2.30 more in.");
    });
    it('should add units to product and display a success message', () => {
        expect(vendingMachine.stockInventory("Sprite", 1)).toMatch("1 unit(s) of Sprite is(are) added and now has 8 units.");
    });
    it('should return an error message if unit input is not an integer', () => {
        expect(vendingMachine.stockInventory("Sprite", 1.2)).toMatch("Please select an integer for quantity.");
    });
    it('should refill coins', () => {
        expect(vendingMachine.resupplyChange("Dime", 100)).toMatch("Successfully added 100 Dimes and now there are 500 Dimes.")
    });
    it('should return an error message if a negative value has been input', () => {
        expect(vendingMachine.resupplyChange("Dime", -5)).toMatch("Please select a positive integer for quantity.")
    });
})