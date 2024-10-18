import * as SQLite from "expo-sqlite";

/**
 * Function to return db instance
 * @returns db - The instance of the database
 */
export const openDatabase = async () => {
  //Try to open database. Give error on failure.
  try {
    const db = await SQLite.openDatabaseAsync("musicbookdatabase.db");
    return db;
  } catch (error) {
    console.error("Database failed to open", error);
    throw error;
  }
};

/**
 * Creates table musicbooks if it does not exists
 * @param {*} db - Instance of the database
 */
export const createTable = async (db) => {
  //Try to create table. Give error on failure.
  try {
    await db.execAsync(
      "CREATE TABLE IF NOT EXISTS musicbooks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, book TEXT, blz INTEGER);"
    );
  } catch (error) {
    console.error("There was an error", error);
  }
};

/**
 * Insert a new record in the musicbooks database
 * @param {*} db - Instance of the database
 * @param {*} title - Title of the song
 * @param {*} book - Title of the book
 * @param {*} blz - Page number of the book
 */
export const insertBook = async (db, title, book, blz) => {
  //Try to insert new record into the database. Give error on failure.
  try {
    await db.runAsync(
      "INSERT INTO musicbooks (title, book, blz) VALUES (?, ?, ?)",
      title,
      book,
      blz
    );
  } catch (error) {
    console.error("There was an error", error);
  }
};

/**
 * Select all records from the musicbooks database
 * @param {*} db - Instance of the database
 * @returns Array with all record of the musicbooks database
 */
export const selectMusicBooks = async (db) => {
  //Array to store the records in
  let bookArray = [];
  //Try to select all record. Give error on failure.
  try {
    const books = await db.getAllAsync("SELECT * FROM musicbooks");

    //Loop trough the data and insert into the bookArray
    for (const book of books) {
      bookArray.push(book);
    }
  } catch (error) {
    console.error("There was an error", error);
  }
  //Return the bookArray
  return bookArray;
};

/**
 * Updates a record from the musicbook database
 * @param {*} db - Instance of the database
 * @param {*} id - The id of the record that will be updated
 * @param {*} title - The title of the song
 * @param {*} book - The title of the book
 * @param {*} blz - Page number of the book
 */
export const updateBook = async (db, id, title, book, blz) => {
  //Try to update book. Give error on failure.
  try {
    await db.runAsync(
      "UPDATE musicbooks SET title = ?, book = ?, blz = ? WHERE id = ?",
      title,
      book,
      blz,
      id
    );
  } catch (error) {
    console.error("There was an error", error);
  }
};

/**
 * Deletes a record from the database
 * @param {*} db - Instance of the database
 * @param {*} id - The id of the book that should be deleted
 */
export const deleteBook = async (db, id) => {
  //Try to delete a book. Give error on failure.
  try {
    await db.runAsync("DELETE FROM musicbooks WHERE id = ?", id);
  } catch (error) {
    console.error("There was an error", error);
  }
};

//TODO: Underneath code might be neccssary when installing the app on the real device.

// import SQLite from "react-native-sqlite-storage";

// SQLite.DEBUG(true);
// SQLite.enablePromise(true);

// export const openDatabase = async () => {
//   try {
//     const db = await SQLite.openDatabase({
//       name: "musicbookdatabase.db",
//       location: "default",
//     });
//     console.log("Database opened: " + db);
//     return db;
//   } catch (error) {
//     console.error("Failed to open the database:", error);
//     throw error;
//   }
// };

// export const createTable = async (db) => {
//   try {
//     await db.transaction((tx) => {
//       tx.executeSql(
//         "CREATE TABLE IF NOT EXISTS musicbooks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, book TEXT, blz INTEGER)",
//         [],
//         () => {
//           console.log("Table created successfully");
//         },
//         (error) => {
//           console.log("Failed to create table:", error);
//         }
//       );
//     });
//   } catch (error) {
//     console.error("Transaction error:", error);
//   }
// };

// export const insertBook = async (db, title, book, blz) => {
//   try {
//     await db.transaction((tx) => {
//       tx.executeSql(
//         "INSERT INTO musicbooks (title, book, blz) VALUES (?,?,?)",
//         [title, book, blz],
//         () => {
//           console.log("Music book inserted successfully");
//         },
//         (error) => {
//           console.log("Error inserting musicbook", error);
//         }
//       );
//     });
//   } catch (error) {
//     console.error("Transaction error:", error);
//   }
// };

// export const getBooks = async (db, setBooks) => {
//   try {
//     await db.transaction((tx) => {
//       tx.executeSql(
//         "SELECT * FROM musicbooks",
//         [],
//         (tx, results) => {
//           let rows = results.rows;
//           let musicbooks = [];
//           for (let i = 0; i < rows.length; i++) {
//             musicbooks.push(rows.item(i));
//           }
//           setBooks(musicbooks);
//         },
//         (error) => {
//           console.log("Failed to fetch music books:", error);
//         }
//       );
//     });
//   } catch (error) {
//     console.error("Transaction error:", error);
//   }
// };
