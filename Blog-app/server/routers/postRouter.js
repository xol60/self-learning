const authentication = require('../utils')
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');
const router = require('express').Router()
const Post = require('../models/Post')
router.post('/create', authentication, uploadMiddleware.single('file'), async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath,
        author: req.user.id,
    });
    res.status(200).json(postDoc)
})
router.get('/', authentication, async (req, res) => {
    res.send(
        await Post.find()
            .sort({ createdAt: -1 })
            .limit(20)
    );
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const postDoc = await Post.findById(id);
    res.json(postDoc);
})
module.exports = router