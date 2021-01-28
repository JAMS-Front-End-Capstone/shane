db.auth('root', 'mypassword');
db = db.getSiblingDB('related');
db.createUser(
  {
    user: 'student',
    pwd: 'student',
    roles: [
      {
        role: 'readWrite',
        db: 'related'
      }
    ]
  }
);
