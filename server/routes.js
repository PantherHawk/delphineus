var resourceController = require('./controllers/resourceController.js');
var userController = require('./controllers/userController.js');
var router = require('express').Router();

// resources
router.get('/resources', resourceController.getResources);
router.post('/resources', resourceController.postResource);
router.get('/resources/category', resourceController.getCategory);
router.get('/resources/tag', resourceController.getTag);

router.post('resources/likes', resourceController.postLikes);
router.get('/categories', resourceController.getCategories);
router.get('/tags', resourceController.getTags);
router.get('/user/bookmarks', resourceController.getBookmarks);

// users
// router.get('/users', userController.checkAuth);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.post('/signup', userController.signup);

module.exports = router;
