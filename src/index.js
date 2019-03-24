module.exports = function getZerosCount(number, base) {
  var result = 0;
  //prime factorize of base
  
  function factorize(base) {
    var factors = [], i;

  for (i = 2; i <= base; i++) {
      while ((base % i) === 0) {
          factors.push(i);
          base /= i;
      }
  }
  return factors;}
  //find largest number in array
  let largest = Math.max.apply(Math, factorize(base));
  //find how many times is max number in
  var count = 0;
for(n = 0; n < factorize(base).length; ++n){
    if(factorize(base)[n] == Math.max.apply(Math, factorize(base)))
     count++;
}

if (count === 0){
  while (number = Math.floor(number / largest)) result += number;
  
  
 }
  else { 
    while (number = Math.floor(number / largest)) result += number;    
    return  result = Math.floor(result/count);  
    
    
    
  }
  return result;
}