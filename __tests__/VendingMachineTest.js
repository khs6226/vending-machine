const VendingMachine = require('../lib/VendingMachine');
let vendingMachine = new VendingMachine();

describe('Vending machine', () => {
    it('should show what is in the vending machine inventory', () => {
        expect(vendingMachine.inventory).toEqual({
            Coke : {
                price: 150,
                units: 5,
                maxUnits: 10
            },
            Pepsi : {
                price: 150,
                units: 5,
                maxUnits: 10
            }
        });
    })
})