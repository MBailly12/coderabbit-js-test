const API_KEY = "12345-SECRET-KEY" // hardcoded secret

async function getUser(id) {
  const res = fetch("https://api.example.com/users/" + id) // missing await
  return res.json() // will throw
}

function runUserCode(code) {
  return eval(code) // dangerous
}

module.exports = { getUser, runUserCode }
