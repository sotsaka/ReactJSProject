//var crypto = require('crypto');

async function fetch_json(url) {
  const response = await fetch(url);
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body;
}
// function hash(str) {
//   return crypto.createHash('sha256').update(str).digest("hex")
// }
export {
  fetch_json
}