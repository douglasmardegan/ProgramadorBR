module.exports = {
  /* Adding an array of post for testing */
  posts: [
  ],
  /* Adding a function to get all posts */
  getAllPosts() {
    return this.posts;
  },
  /* Adding a function to create a new post */
  createPost(title, description) {
    this.posts.push({ id: generateID(), title, description });
  },
  /* Adding a function to delete a post */
  deletePost(index) {
    this.posts.splice(index, 1);
  },
};

function generateID() {
  return Math.random().toString(36).substring(2, 9);
}
