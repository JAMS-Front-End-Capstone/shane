db.createUser(
  {
    user: 'student',
    pwd: 'student',
    roles: [ 'readWrite', 'dbAdmin' ]
  });
