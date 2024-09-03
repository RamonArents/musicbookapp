import * as SQLite from 'expo-sqlite';

export const openDatabase = async () => {
  try{
    const db = await SQLite.openDatabaseAsync("musicbookdatabase.db");
    console.log("Database opened");
    return db;
  }catch(error){
    console.error("Database failed to open", error);
    throw(error);
  }
};

//TODO: Creating table and insert data.

// export const createTable = async () => {
//     try{
//       await db.execAsync(`CREATE TABLE IF NOT EXISTS musicbooks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, book TEXT, blz INTEGER);`);
//       console.log("Table succesfully created.");
//     }
//     catch(error){
//       console.error("There was an error", error);
//     }
// };

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
