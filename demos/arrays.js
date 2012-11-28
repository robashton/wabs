var count = 10000
var array = []

// Fill an array, but only with occasional keys
for(var i = 0; i < count ; i++) {
  if(i % 2 === 0)
    array[i] = i
  else
    array[i] = i 
}

// Then loop through a few times and add the values up
console.time('array')
var sum = 0
for(var x = 0; x < 1000; x++) {
  for(var i = 0; i < count ; i++) {
    if(array[i])
      sum += array[i]
  }
}
console.timeEnd('array')
