const express = require('express');
const router = express.Router();
let {getAllPost,AddPosts,Edit,Delete} = require('../Controllers/PostControllers');


router.route('/').get(getAllPost);
router.route('/posts').post(AddPosts);
router.route('/posts').put(Edit);
router.route('/posts/:id').delete(Delete);


module.exports = router;

