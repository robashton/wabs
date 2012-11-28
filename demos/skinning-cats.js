// Object literal
function createCat(name) {
  return {
    name: name,
    age: 15,
    hasSkin: true,
    flay: function() {
      this.hasSkin = false // :(
    }
  }
}

// Closure
function closuredCat(name) {
   this.name = name
   this.age = 15
   this.hasSkin = true

   this.flay = function() {
     this.hasSkin = false; // :(
   }
   return this;
}


// Prototype
function Cat(name) {
  this.name = name;
  this.age = 15;
  this.hasSkin = true;
}
Cat.prototype.flay = function() {
  this.hasSkin = false; // :(
}


function runBenchmark(number) {
  var i = 0;
  var timerone = 'literal cats skinned in'
    , timertwo = 'closure cats skinned in'
    , timerthree = 'proto cats skinned in'

  console.time(timerone)
  for(i = 0; i < number; i++) {
    var literalCat = createCat('tiggles' + i);
    literalCat.flay();
  }
  console.timeEnd(timerone);

  console.time(timertwo)
  for(i = 0; i < number; i++) {
    var closureCat = closuredCat('tiggles' + i);
    closureCat.flay();
  }
  console.timeEnd(timertwo);

  console.time(timerthree)
  for(i = 0; i < number; i++) {
    var prototypalCat = new Cat('tiggles' + i);
    prototypalCat.flay();
  }
  console.timeEnd(timerthree);
}

runBenchmark(100000);




