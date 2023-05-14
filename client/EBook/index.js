var images = [
  {
    image: "post_1.jpg",
    source: "github.com",
    profile: "url.com",
    profilePic: "profile_1.jpg",
    username: "user1",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    image: "post_2.jpg",
    source: "github.com",
    profile: "url.com",
    profilePic: "profile_2.jpg",
    username: "user2",
    tags: ["tag4", "tag5"],
  },
  {
    image: "post_3.png",
    desc: "github.com",
    profile: "url.com",
    profilePic: "profile_3.jpg",
    username: "user3",
    tags: ["tag2", "tag5", "tag6"],
  },
  {
    image: "post_4.jpg",
    desc: "github.com",
    profile: "url.com",
    profilePic: "profile_4.png",
    username: "user4",
    tags: ["tag1", "tag4", "tag6"],
  },
  {
    image: "post_5.jpg",
    desc: "github.com",
    profile: "url.com",
    profilePic: "profile_5.png",
    username: "user5",
    tags: ["tag3", "tag5", "tag6"],
  },
];

for (var i = 0; i < images.length; i++) {
  var container = document.createElement("div");
  container.classList.add("user_post");

  //Details of the post displayed at the top of the image

  var top_container = document.createElement("div");
  top_container.classList.add("user_post_top");

  var userinfo = document.createElement("div");
  userinfo.classList.add("img_and_name");
  //profile pic
  var profile_pic = document.createElement("img");
  profile_pic.src = "image/" + images[i].profilePic;
  //username
  var username = document.createElement("a");
  username.classList.add("username");
  username.href = images[i].profile;
  username.innerHTML = images[i].username;

  userinfo.appendChild(profile_pic);
  userinfo.appendChild(username);
  //menu
  menu = document.createElement("div");
  menu.classList.add("menu");
  source = document.createElement("a");
  source.href = images[i].desc;
  source.innerHTML = "<i class='fa-solid fa-ellipsis'></i>";
  menu.appendChild(source);

  top_container.appendChild(userinfo);
  top_container.appendChild(menu);

  //Image container of the post

  var img_container = document.createElement("img");
  img_container.src = "image/" + images[i].image;

  //description section
  var description = document.createElement("div");
  description.classList.add("description");
  var tags = document.createElement("p");
  tags.innerHTML = images[i].tags.join(", ");
  description.appendChild(tags);

  //like, comment & share section

  var like = document.createElement("div");
  like.classList.add("like");
  like.innerHTML =
    "<div class='like_icon'><i class='fa-solid fa-thumbs-up'></i><p>Like</p></div><div class='like_icon'><i class='fa-solid fa-message'></i><p>Comments</p></div><div class='like_icon'><i class='fa-solid fa-share'></i><p>Share</p></div>";

  //comment section
  var comments = document.createElement("div");
  comments.classList.add("comment_warpper");
  comments.innerHTML =
    "<img src='image/profile.png'><div class='circle'></div><div class='comment_search'><input type='text' placeholder='Write a comment'><i class='fa-regular fa-face-smile'></i><i class='fa-solid fa-camera'></i><i class='fa-regular fa-note-sticky'></i></div>";

  container.appendChild(top_container);
  container.appendChild(img_container);
  container.appendChild(document.createElement("hr"));
  container.appendChild(description);
  container.appendChild(document.createElement("hr"));
  container.appendChild(like);
  container.appendChild(document.createElement("hr"));
  container.appendChild(comments);
  document.getElementById("center").appendChild(container);
}

// Function to search for images based on tags
function searchImages() {
  const query = document.getElementById("search").value.toLowerCase();

  const center = document.getElementById("center");

  center.innerHTML = "";

  // Loop through the images array
  images.forEach(function (image) {
    if (image.tags.indexOf(query) !== -1) {
      var container = document.createElement("div");
      container.classList.add("user_post");

      //Details of the post displayed at the top of the image

      var top_container = document.createElement("div");
      top_container.classList.add("user_post_top");

      var userinfo = document.createElement("div");
      userinfo.classList.add("img_and_name");
      //profile pic
      var profile_pic = document.createElement("img");
      profile_pic.src = "image/" + image.profilePic;
      //username
      var username = document.createElement("a");
      username.classList.add("username");
      username.href = image.profile;
      username.innerHTML = image.username;

      userinfo.appendChild(profile_pic);
      userinfo.appendChild(username);
      //menu
      menu = document.createElement("div");
      menu.classList.add("menu");
      source = document.createElement("a");
      source.href = image.desc;
      source.innerHTML = "<i class='fa-solid fa-ellipsis'></i>";
      menu.appendChild(source);

      top_container.appendChild(userinfo);
      top_container.appendChild(menu);

      //Image container of the post

      var img_container = document.createElement("img");
      img_container.src = "image/" + image.image;

      //description section
      var description = document.createElement("div");
      description.classList.add("description");
      var tags = document.createElement("p");
      tags.innerHTML = image.tags.join(", ");
      description.appendChild(tags);

      //like, comment & share section

      var like = document.createElement("div");
      like.classList.add("like");
      like.innerHTML =
        "<div class='like_icon'><i class='fa-solid fa-thumbs-up'></i><p>Like</p></div><div class='like_icon'><i class='fa-solid fa-message'></i><p>Comments</p></div><div class='like_icon'><i class='fa-solid fa-share'></i><p>Share</p></div>";

      //comment section
      var comments = document.createElement("div");
      comments.classList.add("comment_warpper");
      comments.innerHTML =
        "<img src='image/profile.png'><div class='circle'></div><div class='comment_search'><input type='text' placeholder='Write a comment'><i class='fa-regular fa-face-smile'></i><i class='fa-solid fa-camera'></i><i class='fa-regular fa-note-sticky'></i></div>";

      container.appendChild(top_container);
      container.appendChild(img_container);
      container.appendChild(document.createElement("hr"));
      container.appendChild(description);
      container.appendChild(document.createElement("hr"));
      container.appendChild(like);
      container.appendChild(document.createElement("hr"));
      container.appendChild(comments);
      center.appendChild(container);
    }
  });
}
