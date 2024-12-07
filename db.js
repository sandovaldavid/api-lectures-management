import {db} from "./config.js";
import sqlite3 from "sqlite3";

export const pool = new sqlite3.Database(db.filename, (err) => {
  if (err) {
    console.error('Error in conection to Data Base', err.message);
  } else {
    console.log('Conection success to SQLite');
  }
});