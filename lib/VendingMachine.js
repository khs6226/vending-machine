class VendingMachine {
    constructor() {
        this.inventory = {
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
        }
    }
}
module.exports = VendingMachine;