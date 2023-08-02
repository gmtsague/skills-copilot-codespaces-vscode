// Create web server

const express = require('express');
const router = express.Router();

// Import comment controller
const commentController = require('../controllers/commentController');

// Get all comments
router.get('/', commentController.getAllComments);

// Get comment by id
router.get('/:id', commentController.getCommentById);

// Get comments by user id
router.get('/user/:id', commentController.getCommentsByUserId);

// Get comments by post id
router.get('/post/:id', commentController.getCommentsByPostId);

// Create new comment
router.post('/', commentController.createComment);

// Update comment by id
router.put('/:id', commentController.updateComment);

// Delete comment by id
router.delete('/:id', commentController.deleteComment);

module.exports = router;
