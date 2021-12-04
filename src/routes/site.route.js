const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/site.controller')

router.post('/comment',siteController.comment);
router.put('/reply',siteController.reply);
router.post('/search', siteController.throwError);
router.delete('/deleteReply/:id', siteController.deleteReply);
router.delete('/deleteComment/:id', siteController.deleteComment);
router.put('/modifyReply/:id', siteController.modifyReply);
router.put('/modifyComment/:id', siteController.modifyComment);
router.get('/', siteController.mainRender);

module.exports = router;

