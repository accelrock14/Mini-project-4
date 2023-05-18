var images = [
  {
    image: "post_1.png",
    source: "https://github.com/accelrock14/Teleporter-game",
    profile: "https://github.com/Ivan2001otp",
    profilePic: "profile_1.jpeg",
    username: "Immanuel Dsouza",
    tags: ["unity", "c#", "gaming"],
  },
  {
    image: "post_2.png",
    source: "https://github.com/accelrock14/Mini-project-2",
    profile: "https://github.com/accelrock14",
    profilePic: "profile_2.png",
    username: "Harisuriya Shakthidaran",
    tags: ["android", "java"],
  },
  {
    image: "post_3.webp",
    source: "https://github.com/Stowaway4331/simple-midC-piano",
    profile: "https://github.com/Stowaway4331",
    profilePic: "profile_3.jpeg",
    username: "Jeremy Dsouza",
    tags: ["javascript", "react", "website"],
  },
  {
    image: "post_4.jpg",
    source: "https://github.com/Kaushik268mlore/THE-WORDLE",
    profile: "https://github.com/Kaushik268mlore",
    profilePic: "profile_4.jpeg",
    username: "Kaushik Kumar",
    tags: ["javascript", "golang", "website"],
  },
  {
    image: "post_5.png",
    source: "https://github.com/Ivan2001otp/iMusic",
    profile: "https://github.com/accelrock14",
    profilePic: "profile_5.png",
    username: "Indibar Dutta",
    tags: ["android", "java", "music"],
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
  source.href = images[i].source;
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
  tags.innerHTML = "Tags: " + images[i].tags.join(" ");
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
    "<img src='image/profile.jpg'><div class='circle'></div><div class='comment_search'><input type='text' placeholder='Write a comment'><i class='fa-regular fa-face-smile'></i><i class='fa-solid fa-camera'></i><i class='fa-regular fa-note-sticky'></i></div>";

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

var links = document.getElementsByTagName("a");
var len = links.length;

for (var i = 0; i < len; i++) {
  links[i].target = "_blank";
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
      source.href = image.source;
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
      tags.innerHTML = "Tags: " + image.tags.join(" ");
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
        "<img src='image/profile.jpg'><div class='circle'></div><div class='comment_search'><input type='text' placeholder='Write a comment'><i class='fa-regular fa-face-smile'></i><i class='fa-solid fa-camera'></i><i class='fa-regular fa-note-sticky'></i></div>";

      container.appendChild(top_container);
      container.appendChild(img_container);
      container.appendChild(document.createElement("hr"));
      container.appendChild(description);
      container.appendChild(document.createElement("hr"));
      container.appendChild(like);
      container.appendChild(document.createElement("hr"));
      container.appendChild(comments);
      center.appendChild(container);
      var links = document.getElementsByTagName("a");
      var len = links.length;

      for (var i = 0; i < len; i++) {
        links[i].target = "_blank";
      }
    }
  });
}
