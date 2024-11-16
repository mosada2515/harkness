const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Use absolute path to uploads directory
        const uploadPath = '/Users/miki/Desktop/harkness/uploads';
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        // You can add file type restrictions here
        cb(null, true);
    },
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit per file
    }
});

// Handle file uploads
router.post('/', upload.array('files'), (req, res) => {
    try {
        console.log('Files uploaded:', req.files);
        // Here you can add code to process the files and train your model
        res.json({ 
            success: true,
            message: 'Files uploaded successfully',
            files: req.files
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error uploading files',
            error: error.message
        });
    }
});

module.exports = router;