import { config } from 'dotenv';

config();

export const db = {
  filename: process.env.DB_FILENAME,
    driver: 'sqlite3.Database'
};
