class House {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.getprice = function () {
            return this.price
        }
    };
    getinfo = function () {
        return this.name + ' have prices are: ' + this.price
    }
}

class childrenHouse extends House {
    constructor(name, price, area, sologan) {
        super(name, price)
        this.area = area
        this.sologan = sologan
    }
}

class villa extends childrenHouse {
    constructor(name, price, area, sologan, pool) {
        super(name, price, area, sologan)
        this.pool = pool
    }
}

let nationalChildrenHouse = new childrenHouse('MrManh', '3000$', '5000m2', 'Manh so handsome')
console.log(nationalChildrenHouse)
let myVilla = new villa('ManhVilla', '10MillionDollars', '100000m2', ':D', '')
console.log(myVilla)
console.log(myVilla.getinfo())
console.log(myVilla.getprice())

class myHouse {

}