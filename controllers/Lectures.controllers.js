import { pool } from '../db.js';
import Lecture from '../models/Lecture.model.js';

export const getLectures = async (req, res, next) => {
    try {
        const allLectures = await Lecture.findAll();
        if (allLectures.length === 0) {
            return res.status(404).json({ message: 'No lectures found' });
        }
        return res.status(200).json({ message: 'Lectures found', data: allLectures });
    } catch (err) {
        console.error('Error fetching lectures:', err);
        return res.status(500).json({ message: 'Error fetching lectures', error: err.message });
    }
};

export const getLecturesById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const lecture = await Lecture.findById(id);
        if (!lecture) {
            return res.status(404).json({ message: 'Lecture not found' });
        }
        return res.status(200).json({ message: 'Lecture found', data: lecture });
    } catch (err) {
        console.error('Error fetching lectures:', err);
        return res.status(500).json({ message: 'Error fetching lectures', error: err.message });
    }
};


export const postLectures = async (req, res, next) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    try {
        const lectureId = await Lecture.create(title, description);
        return res.status(201).json({ message: 'Lecture created successfully', lectureId });
    } catch (err) {
        console.error('Error creating lecture:', err);
        return res.status(500).json({ message: 'Error creating lecture', error: err.message });
    }
};

export const putLectures = async (req, res, next) => {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    try {
        const lecture = await Lecture.findById(id);
        if (!lecture) {
            return res.status(404).json({ message: 'Lecture not found' });
        }
        await lecture.update(title, description);
        return res.status(200).json({ message: 'Lecture updated successfully' });
    }
    catch (err) {
        console.error('Error updating lecture:', err);
        return res.status(500).json({ message: 'Error updating lecture', error: err.message });
    }
}

export const deleteLectures = async (req, res, next) => {
    const { id } = req.params;

    try {
        const lecture = await Lecture.findById(id);
        if (!lecture) {
            return res.status(404).json({ message: 'Lecture not found' });
        }
        // Llamar al método estático delete en lugar del método de instancia
        await Lecture.delete(id);
        return res.status(200).json({ message: 'Lecture deleted successfully' });
    }
    catch (err) {
        console.error('Error deleting lecture:', err);
        return res.status(500).json({ message: 'Error deleting lecture', error: err.message });
    }
}
