function test(x) {
  return x + 5;
}

module.exports.add5 = test;

console.log(test(5));
console.log(test(10));
console.log(test(15));
