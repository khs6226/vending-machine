const VendingMachine = require('../lib/VendingMachine');
let vendingMachine = new VendingMachine();

describe('Vending machine', () => {
    it('should show what is in the vending machine inventory', () => {
        expect(vendingMachine.showInventory()).toMatch("We have 5 units of Coke and it is $1.5 per unit.\nWe also have 4 units of Pepsi and it is $1.4 per unit.\nLastly we have 7 units of Sprite and it is $1.3 per unit.");
    });
    it('should show how much changes are in the vending machine', () => {
        expect(vendingMachine.change).toEqual({
            Toonie : {
                units: 20,
                value: 200
            },
            Loonie : {
                units: 40,
                value: 100
            },
            Quarter : {
                units: 160,
                value: 25
            },
            Dime : {
                units: 400,
                value: 10
            },
            Nickel : {
                units: 800,
                value: 5
            }
        });
    });
    it('should return error if there is no such product', () => {
        expect(vendingMachine.buyProduct("Coke", 1.2)).toMatch("Error");
    })
})