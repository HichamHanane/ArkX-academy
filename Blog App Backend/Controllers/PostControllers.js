const Posts = require('../Models/Post')

let { getPosts, AddPost, EditPost, DeletePost } = Posts;

const getAllPost = (req, res) => {
    res.json(getPosts());
}
const AddPosts = (req, res) => {
    let data = getPosts();

    if (req.body) {
        data.push(req.body);
        Posts.AddPost(data)
        res.send(data);
    }
    else {
        res.status(400).json({ message: "There is no data" });
    }

}

const Edit = (req, res) => {
    //res.json(EditPost())
    let data = getPosts();
    if (req.body) {
        let oldPost = data.filter((post) => {
            return post.id == req.body.id
        })
        let index;
        oldPost.length != 0 ? index = data.indexOf(oldPost[0]) : res.status(402).json({ message: "post not found" })
        data.splice(index, 1, req.body);
        EditPost(data);
    }
    else {
        res.status(400).json({ message: "you sent no data" });
    }
}

const Delete = (req, res) => {
    let data = getPosts();
    let id = req.params.id;
    let d = data.find((p) => p.id == id);
    if(d){        
        let searchObj = data.filter((p, i) => {
            return p.id != id;
        })
        DeletePost(searchObj);
    }
    else{
        res.status(404).json({message: 'Not found'})

    }
    // if (d) {
    
        
    // }
    // else{
    //     res.status(404).json('Post not found');
    // }
}

module.exports = { getAllPost, AddPosts, Edit, Delete }