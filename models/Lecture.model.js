import { pool } from '../db.js';

class Lecture {

    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
    static fromDbRow(row) {
        return new Lecture(row.id, row.title, row.description);
    }

    static async findAll() {
        try {
            const rows = await new Promise((resolve, reject) => {
                pool.all('SELECT * FROM lectures', (err, rows) => {
                    if (err) reject(err);
                    else resolve(rows);
                });
            });

            // Return an array of Lecture objects
            return rows.map(Lecture.fromDbRow);
        } catch (err) {
            throw new Error('Error fetching lectures: ' + err.message);
        }
    }

    static async findById(id) {
        try {
            const row = await new Promise((resolve, reject) => {
                pool.get('SELECT * FROM lectures WHERE id = ?', [id], (err, row) => {
                    if (err) reject(err);
                    else resolve(row);
                });
            });
            return Lecture.fromDbRow(row);
        } catch (err) {
            throw new Error('Error fetching lecture by ID: ' + err.message);
        }
    }

    static async create(title, description) {
        try {
            const result = await new Promise((resolve, reject) => {
                pool.run(
                    'INSERT INTO lectures (title, description) VALUES (?, ?)',
                    [title, description],
                    function (err) {
                        if (err) reject(err);
                        else resolve(this.lastID); // Return conference ID
                    }
                );
            });

            // Return a new Lecture object
            return new Lecture(result, title, description);
        } catch (err) {
            throw new Error('Error inserting lecture: ' + err.message);
        }
    }

    static async update(id, title, description) {
        try {
            await new Promise((resolve, reject) => {
                pool.run(
                    'UPDATE lectures SET title = ?, description = ? WHERE id = ?',
                    [title, description, id],
                    (err) => {
                        if (err) reject(err);
                        else resolve();
                    }
                );
            });
            return { id, title, description };
        } catch (err) {
            throw new Error('Error updating lecture: ' + err.message);
        }
    }

    static async delete(id) {
        try {
            await new Promise((resolve, reject) => {
                pool.run('DELETE FROM lectures WHERE id = ?', [id], (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            });
            return { message: 'Lecture deleted successfully' };
        } catch (err) {
            throw new Error('Error deleting lecture: ' + err.message);
        }
    }
}

export default Lecture;
