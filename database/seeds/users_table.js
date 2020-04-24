
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'user1', password: 'rowValue1'},
        {id: 2, username: 'user2', password: 'rowValue1'},
        {id: 3, username: 'user3', password: 'rowValue1'},
        {id: 4, username: 'dylan', password: 'rowValue1'},
        {id: 5, username: 'jack', password: 'rowValue1'},
        {id: 6, username: 'axel', password: 'rowValue1'},
        {id: 7, username: 'user7', password: 'rowValue1'},
        {id: 8, username: 'user8', password: 'rowValue1'},
        {id: 9, username: 'rowValue1', password: 'rowValue1'}
      ]);
    });
};
