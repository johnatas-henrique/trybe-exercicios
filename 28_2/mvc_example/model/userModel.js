const connection = require('./connection');

const insertUser = async (email, name, password) =>
  connection()
    .then(db => db
      .sql(
        `INSERT INTO users (email, nome, senha) 
      VALUES (?, ?, ?);`
      )
      .bind(email)
      .bind(name)
      .bind(password)
      .execute()
    );

const existsByEmail = async (email) =>
  connection()
    .then(db => db
      .sql(
        `SELECT COUNT(email)
    FROM users
    WHERE email = ?;`
      )
      .bind(email)
      .execute()
    )
    .then(results => results.fetchAll()[0][0])
    .then(Boolean);

const getUserByEmail = async (email) =>
  connection()
    .then(db => db
      .sql(
        `SELECT id, email, nome, senha
        FROM users
        WHERE email = ?;`
      )
      .bind(email)
      .execute()
    )
    .then(results => results.fetchAll()[0] || [])
    .then(([id, email, name, password]) => ({ id, email, name, password }))
    .then(user => !user.id ? null : user)

const getUserById = async (id) =>
  connection()
    .then(db => db
      .sql(
        `SELECT id, email, nome
        FROM users
        WHERE id = ?;`
      )
      .bind(id)
      .execute()
    )
    .then(results => results.fetchAll()[0] || [])
    .then(([id, email, name]) => ({ id, email, name }))
    .then(user => !user.id ? null : user)

module.exports = {
  insertUser,
  existsByEmail,
  getUserByEmail,
  getUserById,
};
