const Post = require('../Models/Post');


const getPosts = async (req, res) => {
    try {
        let posts = await Post.find();
        posts.length == 0 ? res.status(400).json({ message: "no posts found !!!" }) : res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }

}
const AddPost = async (req, res) => {
    try {
        let newPost = new Post;
        newPost.title = req.body.title;
        newPost.description = req.body.description;
        newPost.author = req.body.author;
        await newPost.save()
        res.status(200).json({ message: "you create new post successfully !!!" })
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
}

const RemovePost = async (req, res) => {
    try {
        let id = req.params.id;
        let delPost = (await Post.deleteOne({ _id: id })).deletedCount;
        delPost != 0 ? res.status(200).json({ message: 'post was deleted' }) : res.status(400).json({ message: "no post found !!!" })
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
}

const EditPost = async (req, res) => {
    try {
        let id = req.params.id;
        let edit = await Post.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: 'Post updated succesfully !!!' });

    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
}

const Search = async (req, res) => {
    try {
        let id = req.body.id;
        let post = await Post.findOne({ id: id })
        res.status(200).json({ data: post });
    }
    catch (err) {
        res.status(500).json({
            Error: err.message
        })
    }
}

const pagination = async (req, res) => {
    try {
        let pageNumber = req.params.pageNumber;
        let pageSize = req.params.pageSize;

        let posts = await Post.find().skip((pageNumber - 1) * pageSize).limit(pageSize)
        res.status(200).json(posts)
    }
    catch (err){
        res.status(500).json({Error : err.message});
    }

}


module.exports = { getPosts, AddPost, RemovePost, EditPost, Search, pagination };