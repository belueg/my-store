const { faker } = require('@faker-js/faker');
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://postgres:mi_password@localhost:5432/postgres'
});




// for (let i = 0; i < 10; i++) {

//   knex('users').insert({
//     name: faker.name.fullName(),
//     email: faker.internet.email()
//   })
//     .then(() => {
//       console.log('Usuario insertado correctamente');
//     })
//     .catch((err) => {
//       console.error(err);
//     })
//     .finally(() => {
//       knex.destroy();
//     });

// }


knex.select('*').from('users')
  .then((rows) => {
    console.log(rows);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    knex.destroy();
  });

// knex.schema.createTable('users', (table) => {
//   table.increments('id').primary();
//   table.string('name');
//   table.string('email').unique();
//   table.timestamps(true, true);
// })
// .then(() => {
//   console.log('Tabla creada correctamente');
// })
// .catch((err) => {
//   console.error(err);
// })
// .finally(() => {
//   knex.destroy();
// });

