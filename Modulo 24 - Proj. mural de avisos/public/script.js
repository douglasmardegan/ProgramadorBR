document.addEventListener("DOMContentLoaded", () => {
  updatePosts();
});

function updatePosts() {
  fetch("http://192.168.15.39:3000/api/all_posts")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let postElements = "";
      let posts = JSON.parse(json);
      posts.forEach((post) => {
        let postElement = `<div class="post-container" id="${post.id}">
            <div class="post-title-container">
                <h3>${post.title}</h3>
            </div>
            <div class="post-description-container">
                <div>${post.description}</div>
            </div>
        </div>`;

        postElements += postElement;
      });

      document.getElementById("posts-container").innerHTML = postElements;
    });
}

function postNewPost() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  if (title == null || title == "", description == null || description == "") {
    alert("Please fill in the title and/or description field!");
  } else {
    let post = { title, description };

    const options = {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(post),
    };

    fetch("http://192.168.15.39:3000/api/new_post", options).then((res) => {
      updatePosts();

      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
    });
  }
}
