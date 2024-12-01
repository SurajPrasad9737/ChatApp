const express = require('express');
const {
  allMessages,
  sendMessage,
  updateMessageStatus,
} = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/:chatId').get(protect, allMessages);
router.route('/').post(protect, sendMessage);
router.route('/status').put(protect, updateMessageStatus);

module.exports = router;
