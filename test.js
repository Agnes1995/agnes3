function test(x) {
  return x + 5;
}

module.exports.add5 = test;

console.log(test(5));
//hello
console.log(test(15));
