import { config } from 'dotenv';

config();

export const db = {
    filename: './DataBase/db.sqlite3',
    driver: 'sqlite3.Database'
};
