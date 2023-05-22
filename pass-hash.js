const bcrypt = require('bcrypt')

const my_password = 'supersecret123'


async function hashMyPass() {
  const hash = await bcrypt.hash(my_password, 10);
  console.log(hash)
}

hashMyPass()