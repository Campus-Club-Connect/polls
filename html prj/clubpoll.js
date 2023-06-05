// Get the form element
const form = document.getElementById("postForm");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const clubName = document.getElementById("club-name").value;

  // Create the post element
  const post = document.createElement("div");
  post.className = "post";

  // Create the profile box
  const profileBox = document.createElement("div");
  profileBox.className = "profile-box";
  post.appendChild(profileBox);

  // Create the profile image
  const profileImage = document.createElement("img");
  profileImage.src = "profile.png";
  profileImage.alt = "Profile Image";
  profileImage.className = "profile-image";
  profileBox.appendChild(profileImage);

  // Create the profile info
  const profileInfo = document.createElement("div");
  profileInfo.className = "profile-info";
  profileBox.appendChild(profileInfo);

  // Create the username
  const username = document.createElement("div");
  username.className = "username";
  username.textContent = name;
  profileInfo.appendChild(username);

  // Create the role
  const role = document.createElement("div");
  role.className = "role";
  role.textContent = "President";
  profileInfo.appendChild(role);

  // Create the duration
  const duration = document.createElement("div");
  duration.className = "duration";
  duration.textContent = "5 Hrs";
  profileInfo.appendChild(duration);

  // Create the image box
  const imageBox = document.createElement("div");
  imageBox.className = "image-box";
  post.appendChild(imageBox);

  // Create the image
  const image = document.createElement("img");
  image.src = "billDorji.png";
  image.alt = "Image";
  image.className = "image";
  imageBox.appendChild(image);

  // Create the voting section
  const voting = document.createElement("div");
  voting.className = "voting";

  // Create the button container
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  // Create the like button
  const likeButton = document.createElement("div");
  likeButton.id = "likeButton";
  likeButton.className = "button like-button";
  buttonContainer.appendChild(likeButton);

  // Create the percentage bar container
  const percentageBarContainer = document.createElement("div");
  percentageBarContainer.className = "percentage-bar-container";
  buttonContainer.appendChild(percentageBarContainer);

  // Create the like percentage
  const likePercentage = document.createElement("div");
  likePercentage.id = "likePercentage";
  likePercentage.className = "like-percentage";
  percentageBarContainer.appendChild(likePercentage);

  // Create the percentage bar
  const percentageBar = document.createElement("div");
  percentageBar.id = "percentageBar";
  percentageBar.className = "percentage-bar";
  percentageBarContainer.appendChild(percentageBar);

  // Create the dislike percentage
  const dislikePercentage = document.createElement("div");
  dislikePercentage.id = "dislikePercentage";
  dislikePercentage.className = "dislike-percentage";
  percentageBarContainer.appendChild(dislikePercentage);

  // Create the dislike button
  const dislikeButton = document.createElement("div");
  dislikeButton.id = "dislikeButton";
  dislikeButton.className = "button dislike-button";
  buttonContainer.appendChild(dislikeButton);

  // Append the button container and vote count to the voting section
  voting.appendChild(buttonContainer);

  // Create the vote count
  const voteCount = document.createElement("div");
  voteCount.id = "voteCount";
  voteCount.className = "vote-count";
  voteCount.textContent = "Votes: 0";
  voting.appendChild(voteCount);

  // Append the voting section to the post
  post.appendChild(voting);

  // Append the post to the document body
  document.body.appendChild(post);
});
