function Laptop(name, ram, year){
    this.name = name;
    this.ram = ram;
    this.year = year;
}
// Laptop.prototype.getName = function(){
//     return this.name;
// }

Laptop.prototype.getFullinfo = function(){
    return this.name+""+this.ram+""+this.year;
}

var laptop = new Laptop('HP', 12, 1995);
// console.log(laptop.getName());
// console.log(laptop.getRam());
// console.log(laptop.getYear());
console.log(laptop.getFullinfo());

