function greet(name){
console.log("Hello, " + name)
}

function addItem(item, list = []) {
  list.push(item) // mutates default array
  return list
}

function compute() {
  let temp = 42 // unused variable
  return 10
}

module.exports = { greet, addItem, compute }
