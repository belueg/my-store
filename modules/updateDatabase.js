const fs = require('fs')

function updateDatabase(prodList) {
  console.log("prodList in updateDatabase function ", prodList)
  const dirname = '/Users/belueg/my-store/db.json'
  fs.writeFile(dirname, prodList, (err) => {
    if (err) console.error(err)
  })
}

module.exports = updateDatabase
