const connection = require('./connection');

class Author {
  constructor(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await connection();
        const results = await db.collection('authors').find().toArray();

        const authors = results.map((authorData) => {
          const { _id, first_name, middle_name, last_name } = authorData;
          const author = new Author(first_name, middle_name, last_name);
          author.id = _id;
          return author;
        });

        resolve(authors);
      } catch (err) {
        reject(err);
      }
    });
  }
};

module.exports = Author;

// const getNewAuthor = authorData => {
//   const { id, firstName, middleName, lastName } = authorData;

//   const fullName = [firstName, middleName, lastName].filter(name => name).join(' ');

//   return { id, firstName, middleName, lastName, name: fullName };
// // };
// class Author {
//   constructor(firstName, middleName, lastName) {
//     this.firstName = firstName;
//     this.middleName = middleName;
//     this.lastName = lastName;
//   };

//   getAll() {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const db = await (connection);
//         const results = await db.collection('authors').find().toArray();

//         const authors = results.map(authorData => {
//           const { _id, first_name, middle_name, last_name } = authorData;
//           const author = new Author(first_name, middle_name, last_name);
//           author.id = _id;
//           return author;
//         });
//         resolve(authors);
//       }
//       catch (err) {
//         reject(err);
//       }
//     });
//   }
// }

// const findById = async (id) => {
//   const authorData = await connection()
//     .then((db) =>
//       db.getTable('authors')
//         .select(['first_name', 'middle_name', 'last_name'])
//         .where('id = :id')
//         .bind('id', id)
//         .execute()
//     )
//     .then((results) => results.fetchAll())
//     .then((authors) => authors[0]);

//   if (!authorData) return null;

//   const [firstName, middleName, lastName] = authorData;

//   return getNewAuthor({ id, firstName, middleName, lastName });
// }

// const isValid = (firstName, middleName, lastName) => {
//   if (!firstName || typeof firstName !== 'string') return false;
//   if (!lastName || typeof lastName !== 'string') return false;
//   if (middleName || typeof middleName !== 'string') return false;

//   return true;
// }

// const create = async (firstName, middleName, lastName) =>
//   connection()
//     .then(db => db
//       .getTable('authors')
//       .insert(['first_name', 'middle_name', 'last_name'])
//       .values(firstName, middleName, lastName)
//       .execute()
//     );

// module.exports = {
//   getAll, findById, isValid, create
// };
