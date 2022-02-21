const express = require("express");
const router = express.Router();
const posts = require("../post_model/model");
const cors = require("cors");

router.use(cors());

/* Creating a route to search and read all the posts */
/* GET method will be used */
router.get("/all_posts", (req, res) => {
  /* Transforming JS Object to JSON string */
  res.json(JSON.stringify(posts.getAllPosts()));
});

/* Creating a route to post a new post */
/* POST method will be used */
router.post("/new_post", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  posts.createPost(title, description);

  res.send("Post adicionado com sucesso!");
});

router.delete("/delete_post", (req, res) => {
  let id = req.body.id;
  let index = posts.posts.findIndex((post) => post.id === id);

  if (index != -1) {
    posts.deletePost(index);
    res.send("Post deletado com sucesso!");
  } else {
    res.send(`Não existem posts com o id: ${id}`);
  }
});

module.exports = router;
