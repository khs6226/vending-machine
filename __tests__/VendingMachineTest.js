const VendingMachine = require('../lib/VendingMachine');
let vendingMachine = new VendingMachine();

describe('Vending machine', () => {
    it('should show what is in the vending machine inventory', () => {
        expect(vendingMachine.showInventory()).toEqual("Coke, Pepsi");
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
    })
})