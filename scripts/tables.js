import { pool } from '../db.js';
// Create tables
const createTables = async () => {
  await pool.exec(`
    CREATE TABLE IF NOT EXISTS lectures (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT
    );
  `);
  console.log('Table created or already exists');
};
//Insert data
const insertData = async () => {
  try {
    await pool.exec(`
      INSERT INTO lectures (title, description) VALUES
      ('Understanding Algorithms', 'An introduction to algorithmic thinking and problem-solving techniques'),
      ('Mastering SQL', 'A deep dive into writing efficient and complex SQL queries'),
      ('Web Security Basics', 'Learn how to secure web applications from common vulnerabilities'),
      ('Introduction to AI', 'Explore the basics of Artificial Intelligence and its applications'),
      ('Effective Communication', 'Enhance your communication skills for better teamwork and presentations'),
      ('Building REST APIs', 'A step-by-step guide to creating robust RESTful services'),
      ('Version Control with Git', 'Learn how to use Git for managing code and collaboration'),
      ('UI/UX Principles', 'Discover the fundamentals of designing intuitive user interfaces'),
      ('Project Management Essentials', 'Key concepts and tools for managing successful projects'),
      ('Getting Started with Docker', 'Learn the basics of containerization using Docker');
    `);
    console.log('10 rows of data inserted successfully');
  } catch (err) {
    console.error('Error inserting data:', err.message);
  }
};

// Call the functions
createTables();
insertData();