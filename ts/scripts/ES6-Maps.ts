// ES6 Maps
'use strict';
// Declare new map
let map = new Map([
  // Populate map w ordered keys n values
  ["sativa", 0 ],
  ["indica", 1],
  ["ruderalis", 2]
]);

// Return the keys only
for(let key of map.keys()) {
  console.log(key);
}
