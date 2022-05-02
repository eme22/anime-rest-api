/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/api';
const router = express.Router();

router.get('/get', controller.getPosts);
router.get('/get/:id', controller.getPost);
router.put('/post/:id', controller.updatePost);
router.delete('/delete/:id', controller.deletePost);
router.post('/post', controller.addPost);

export = router;