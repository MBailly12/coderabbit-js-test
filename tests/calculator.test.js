const { add, divide, isEven } = require("../src/calculator")

test("add works", () => {
  expect(add(2, 3)).toBe(5)
})

test("divide works", () => {
  expect(divide(10, 2)).toBe(5)
})

test("isEven works", () => {
  expect(isEven(4)).toBe(true)
})
