// Intentional: missing semicolons, no error handling, logic issues

function add(a, b) {
  return a + b
}

function divide(a, b) {
  return a / b // no zero check
}

function isEven(n) {
  if (n % 2 === 1) { // wrong logic
    return true
  }
  return false
}

module.exports = { add, divide, isEven }
