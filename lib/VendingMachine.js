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
        };

        this.change = {
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
        };
    }

    showInventory() {
        const namesArr = Object.keys(this.inventory);
        let name = namesArr[0] + ", ";
        
        for (let i=1; i<namesArr.length; i++) {
            if(i == namesArr.length-1) {
                name += namesArr[i];
            } else {
                name += namesArr[i] + ", ";
            }
        }
        return name;
    }
}
module.exports = VendingMachine;