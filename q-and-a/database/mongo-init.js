db.auth('root', 'mypassword');
db = db.getSiblingDB('qanda');
db.createUser(
  {
    user: 'student',
    pwd: 'student',
    roles: [
      {
        role: 'readWrite',
        db: 'qanda'
      }
    ]
  }
);
