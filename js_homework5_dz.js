//дз1
var person1 = {
    firstName: "Petro", 
    lastName: "Zhuk", 
    age: 28,
    getinfo: function () {
        console.log('My name is '+this.firstName+', my lastname is '+this.lastName+', me '+this.age+' years old.')
    }
}

var person2 = {
    firstName: "Egor", 
    lastName: "Zhuk", 
    age: 18,
}

person2.isHasWork = true;
person2.getinfo = person1.getinfo;

person1.getinfo();
person2['getinfo']();

//дз2 
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
  
    price: function () {
      let totalPrice = 0;
      for (let services in this) {
        if (typeof this[services] === 'string' && !isNaN(parseFloat(this[services]))) {
          totalPrice += parseFloat(this[services]);
        }
      }
      return totalPrice;
    },
  
    minPrice: function () {
      let prices = [];
      for (let service in this) {
        if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
          prices.push(parseFloat(this[service]));
        }
      }
      return Math.min(...prices);
    },
  
    maxPrice: function () {
      let prices = [];
      for (let service in this) {
        if (typeof this[service] === 'string' && !isNaN(parseFloat(this[service]))) {
          prices.push(parseFloat(this[service]));
        }
      }
      return Math.max(...prices);
    }
  };
  
  console.log("Загальна вартість послуг: " + services.price() + " грн");
  console.log("Мінімальна вартість послуги: " + services.minPrice() + " грн");
  console.log("Максимальна вартість послуги: " + services.maxPrice() + " грн");

