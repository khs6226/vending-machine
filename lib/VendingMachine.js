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

        this.change = [
            {   name: "Toonie",
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
            }
        ];
    }

    showInventory() {
        const namesArr = Object.keys(this.inventory);
        let msg = "We have " + this.inventory[namesArr[0]].units + " units of " + namesArr[0] + " and it is $" + (this.inventory[namesArr[0]].price / 100).toFixed(2) + " per unit." + "\n";
        
        for (let i=1; i<namesArr.length; i++) {
            if(i == namesArr.length-1) {
                msg += "Lastly we have " + this.inventory[namesArr[i]].units + " units of " + namesArr[i] + " and it is $" + (this.inventory[namesArr[i]].price / 100).toFixed(2) + " per unit.";
            } else {
                msg += "We also have " + this.inventory[namesArr[i]].units + " units of " + namesArr[i] + " and it is $" + (this.inventory[namesArr[i]].price / 100).toFixed(2) + " per unit." + "\n";
            }
        }
        return msg;
    }


    buyProduct(name, quantity, moneyInput) {
        const namesArr = Object.keys(this.inventory);
        let msg = "";
        if(quantity <1) {
            return msg = "Please select a positive integer for quantity."
        } else if(quantity !== Math.round(quantity)) {
            return msg = "Please select an integer for quantity."
        } else {
            for (let i in namesArr){
                let units = this.inventory[namesArr[i]].units;
                let price = this.inventory[namesArr[i]].price;
                let maxUnits = this.inventory[namesArr[i]].maxUnits;
                if(name == namesArr[i]) {
                    if(quantity > units) {
                        msg = "There is not enough " + namesArr[i] + ". " + "Please select a different product.";
                    } else {
                        let totalPrice = quantity * price;
                        if(moneyInput < totalPrice) {
                            msg = "Please put $" + ((totalPrice - moneyInput) / 100).toFixed(2) + " more in.";
                        } else {
                            let coins = this.change;
                            let change = moneyInput - totalPrice;
                            let returnedCoins = [];
                            let totalChange = 0;

                            for (let i in coins) {
                                let currentCoin = coins[i].value;

                                switch (change) {
                                    case 9:
                                    case 8:
                                        change = 10;
                                        returnedCoins.push(Math.floor(change/currentCoin));
                                        break;
                                    case 7:
                                    case 6:
                                    case 4:
                                    case 3:
                                        change = 5;
                                        returnedCoins.push(Math.floor(change/currentCoin));
                                        break;
                                    case 2:
                                    case 1:
                                        change = 0;
                                        returnedCoins.push(Math.floor(change/currentCoin));
                                        break;
                                    default:
                                        returnedCoins.push(Math.floor(change/currentCoin));
                                        change %= currentCoin;
                                }
                            }

                            for (let i in returnedCoins) {
                                totalChange += returnedCoins[i] * coins[i].value;
                            }

                            msg = "Here is your change of $" + (totalChange/100).toFixed(2) +" with" + "\n" + 
                                returnedCoins[0] + " toonie(s),\n" +
                                returnedCoins[1] + " roonie(s),\n" +
                                returnedCoins[2] + " quarter(s),\n" +
                                returnedCoins[3] + " dime(s),\n" +
                                returnedCoins[4] + " nickel(s).";
                        }
                    }
                    break;
                } else {
                    msg =  "There is no " + name + " here.";
                }
            }
        }
        return msg;
    }

    stockInventory(name, quantity) {
        const namesArr = Object.keys(this.inventory);
        let msg = "";
        
        for (let i in namesArr){
            let units = this.inventory[namesArr[i]].units;
            let max = this.inventory[namesArr[i]].maxUnits;

            if(name == namesArr[i]) {
                if(quantity <1) {
                    return msg = "Please select a positive integer for quantity."
                } else if(quantity !== Math.round(quantity)) {
                    return msg = "Please select an integer for quantity."
                } else if (units+quantity > max) {
                    return msg = "Cannot store more than " + max + " units.\n" +
                                 "Current amount is " + units + " unit(s).\n" +
                                 "Please add only " + (max - units) + " unit(s) or less.";
                } else {
                    units += quantity;
                    msg = quantity + " unit(s) of " + name + " is(are) added and now has " + units + " units.";
                }
                break;
            } else {
                msg = "Please provide the correct name of the product.";
            }
        }
        return msg;
    }

    resupplyChange(name, quantity) {
        const change = this.change;
        let msg = "";
        
        for(let i in change) {
            let coinName = change[i].name;

            if(name == coinName) {
                if(quantity <1) {
                    return msg = "Please select a positive integer for quantity."
                } else if(quantity !== Math.round(quantity)) {
                    return msg = "Please select an integer for quantity."
                } else {
                    change[i].units += quantity;
                    return msg = "Successfully added "+quantity + " " + coinName +"s and now there are " + change[i].units + " " + coinName + "s.";
                }
            } else {
                msg = "please enter the correct name for coins";
            }
        }
        return msg;
    }

    
}
module.exports = VendingMachine;