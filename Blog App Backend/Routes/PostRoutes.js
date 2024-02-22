const express = require('express');
const app = express()
const router = express.Router();
let {getAllPost,AddPosts,Edit,Delete,login} = require('../Controllers/PostControllers');
const { check } = require('express-validator')


router.route('/').get(getAllPost);
router.post('/login',[check('username').exists().withMessage('usernam is required'),check('password').exists().withMessage('password is required')],login);

router.route('/posts').post(AddPosts);
router.route('/posts').put(Edit);
router.route('/posts/:id').delete(Delete);


module.exports = router;

