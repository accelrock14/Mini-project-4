// Define an array of image objects with properties for the image file name, profile picture, username, and tags
var images = [
  {
    image: "post1.jpeg",
    desc: "This in an image",
    profile: "user1.html",
    profilePic: "p6.jpeg",
    username: "user1",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    image: "post2.jpeg",
    desc: "This in an image",
    profile: "user2.html",
    profilePic: "p2.jpeg",
    username: "user2",
    tags: ["tag4", "tag5"],
  },
  {
    image: "post3.jpeg",
    desc: "This in an image",
    profile: "user3.html",
    profilePic: "p3.jpeg",
    username: "user3",
    tags: ["tag2", "tag5", "tag6"],
  },
  {
    image: "post4.jpeg",
    desc: "This in an image",
    profile: "user4.html",
    profilePic: "p4.jpeg",
    username: "user4",
    tags: ["tag1", "tag4", "tag6"],
  },
  {
    image: "post5.jpeg",
    desc: "This in an image",
    profile: "user5.html",
    profilePic: "p5.jpeg",
    username: "user5",
    tags: ["tag3", "tag5", "tag6"],
  },
];

// Loop through the array of images and create HTML elements to display each image
for (var i = 0; i < images.length; i++) {
  var container = document.createElement("div");
  container.classList.add("picture-container");

  const userInfo = document.createElement("div");
  userInfo.classList.add("user-info");

  var profilePic = document.createElement("img");
  profilePic.src = "pictures/" + images[i].profilePic;

  var username = document.createElement("a");
  username.href = images[i].profile;
  username.innerHTML = "<h3>" + images[i].username + "<h3>";

  var description = document.createElement("p");
  description.innerHTML = images[i].desc;
  description.classList.add("description");

  userInfo.appendChild(profilePic);
  userInfo.appendChild(username);

  container.appendChild(userInfo);

  var image = document.createElement("img");
  image.src = "pictures/" + images[i].image;
  container.appendChild(image);

  var tags = document.createElement("p");
  tags.innerText = images[i].tags.join(", ");

  container.appendChild(description);
  container.appendChild(tags);

  document.getElementById("pictures").appendChild(container);
}

// Function to search for images based on tags
function searchImages() {
  const query = document.getElementById("search").value.toLowerCase();

  const container = document.getElementById("pictures");

  container.innerHTML = "";

  // Loop through the images array
  images.forEach(function (image) {
    if (image.tags.indexOf(query) !== -1) {
      const imageContainer = document.createElement("div");
      imageContainer.className = "picture-container";

      const userInfo = document.createElement("div");
      userInfo.classList.add("user-info");

      var profilePic = document.createElement("img");
      profilePic.src = "pictures/" + image.profilePic;

      var username = document.createElement("a");
      username.href = image.profile;
      username.innerHTML = "<h3>" + image.username + "<h3>";

      userInfo.appendChild(profilePic);
      userInfo.appendChild(username);

      imageContainer.appendChild(userInfo);

      const img = document.createElement("img");
      img.src = "pictures/" + image.image;

      var description = document.createElement("p");
      description.innerHTML = image.desc;
      description.classList.add("description");

      const tagContainer = document.createElement("div");
      tagContainer.className = "tag-container";

      // Loop through the image's tags and create a tag element for each one
      image.tags.forEach(function (tag) {
        const tagElement = document.createElement("span");
        tagElement.className = "tag";
        tagElement.textContent = tag;
        tagContainer.appendChild(tagElement);
      });

      imageContainer.appendChild(img);
      imageContainer.appendChild(description);
      imageContainer.appendChild(tagContainer);

      container.appendChild(imageContainer);
    }
  });
}
