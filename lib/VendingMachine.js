class VendingMachine {
    constructor() {
        this.inventory = {
            Coke : {
                price: 150,
                units: 5,
                maxUnits: 10
            },
            Pepsi : {
                price: 140,
                units: 4,
                maxUnits: 10
            },
            Sprite : {
                price: 130,
                units: 7,
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
        let msg = "We have " + this.inventory[namesArr[0]].units + " units of " + namesArr[0] + " and it is $" + this.inventory[namesArr[0]].price / 100 + " per unit." + "\n";
        
        for (let i=1; i<namesArr.length; i++) {
            if(i == namesArr.length-1) {
                msg += "Lastly we have " + this.inventory[namesArr[i]].units + " units of " + namesArr[i] + " and it is $" + this.inventory[namesArr[i]].price / 100 + " per unit." + "\n";
            } else {
                msg += "We also have " + this.inventory[namesArr[i]].units + " units of " + namesArr[i] + " and it is $" + this.inventory[namesArr[i]].price / 100 + " per unit." + "\n";
            }
        }
        return msg;
    }

    buyProduct(name, quantity, moneyInput) {
        const namesArr = Object.keys(this.inventory);
        let msg = "";
        if(quantity <1) {
            return msg = "Please select positive quantity."
        } else if(quantity !== Math.round(quantity)) {
            return msg = "Please select an integer for quantity."
        } else {
            for (let i in namesArr){
                if(name == namesArr[i]) {
                    if(quantity > this.inventory[namesArr[i]].units) {
                        msg = "There is not enough " + namesArr[i] + ".\n" + "Please select a different product.";
                    } else {
    
                    }
                    break;
                } else {
                    msg =  "There is no " + name + " here.";
                }
            }
        }
        return msg;
    }
}
module.exports = VendingMachine;