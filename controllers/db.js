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
