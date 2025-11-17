const accountId=1234
let accountEmail="divya@gmail.com"
var accountPassword="54321"
accountCity="jaipur"
let accountState

// accountId=2         not allowed

accountEmail="hc@gmail.com"
accountPassword="876543"
accountCity="Pune"

// prefer not to use var
// because of issue in block scope and functional scope

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])