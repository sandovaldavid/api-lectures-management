import express from 'express';
const router = express.Router();
//const pool = require('../db');
import { getLectures, postLectures, getLecturesById, putLectures } from '../controllers/Lectures.controllers.js';

router.get('/lectures', getLectures);
router.get('/lectures/:id', getLecturesById);
router.post('/lectures', postLectures);
router.put('/lectures/:id', putLectures);
router.delete('/lectures/:id', deleteLectures);

export default router;