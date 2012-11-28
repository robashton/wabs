var value = 1;

function doIt(times) {
  for(var x = 0 ; x < times; x++) {
    value = value + value;
  }
}

console.time();
doIt(100000000);
console.timeEnd();

