let score=33
let score1="33abc"
console.log(typeof score)
console.log(typeof(score1))

let valueNumber=Number(score1)
console.log(typeof valueNumber)
console.log(valueNumber)

let score2=null
let valueNumber1=Number(score2)
console.log(valueNumber1)

//"33" convert 33
//"33abc" convert NaN
//null convert 0
// true convert 1, false convert 0

let isloggedIn=1
let booleanIsloggedIn=Boolean(isloggedIn)
console.log(booleanIsloggedIn);
// 1=> true; 0=>false
//"" => false; "divya" => true

let someNumber=33
let StringNumber=String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber)
