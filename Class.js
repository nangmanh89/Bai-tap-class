function House(name, area) {
    let constructor = () => {
      this.name = name
      this.area = area
    };
    constructor()
  
    this.showname = function () {
      console.log(this.name)
      console.log(this.area)
    };
  }
  
  
  function childrenHouse(price, name, area) {
    House.call(this, name, area)
    let contructor = () => {
      this.price = price
    }
    contructor()
  
    this.showPrice = function () {
      console.log(this.price)
    }
  }
  
  childrenHouse.prototype = new House()
  
  
  let nationalChildren = new childrenHouse('1000$', 'Hoa Sen', '3000m2')
  console.log(childrenHouse.prototype)
  nationalChildren.showname()
  nationalChildren.showPrice()
  