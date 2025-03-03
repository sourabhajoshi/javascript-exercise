/*
Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12  
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python

*/

console.log("4 > 3 && 10 < 12  : ", 4 > 3 && 10 < 12  ); //true
console.log("4 > 3 && 10 > 12 : ", 4 > 3 && 10 > 12); //false
console.log("4 > 3 || 10 < 12 : ", 4 > 3 || 10 < 12); //true
console.log("4 > 3 || 10 > 12 : ", 4 > 3 || 10 > 12); //true
console.log("!(4 > 3) : ", !(4 > 3)); //false
console.log("!(4 < 3) : ", !(4 < 3)); //true
console.log("!(false) : ", !(false)); //true
console.log("!(4 > 3 && 10 < 12) : ", !(4 > 3 && 10 < 12)); //false
console.log("!(4 > 3 && 10 > 12) : ", !(4 > 3 && 10 > 12)); //true
console.log("!(4 === '4') : ", !(4 === '4')); //true
console.log(" There is no 'on' in both dragon and python : ", ("python".includes("on") && "dragon".includes("on"))); //false : but expression value is true

