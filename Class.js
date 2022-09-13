function parentsHouse(name, price) {
    this.name = name
    this.price = price
    this.showprice = function () {
        console.log(this.price)
    }
}
function childrenHouse(area) {
    this.area = area;
    this.showname = function () {
        console.log(this.name)
    }
}
childrenHouse.prototype = new parentsHouse()


let Children1 = new childrenHouse('300m2')
Children1.name = 'Hoa Sen'
Children1.showname()
Children1.price = '400$'
Children1.showprice()
// console.log(manhChildren)