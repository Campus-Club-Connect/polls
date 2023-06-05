// File: script.js

function goToPresidentPage() {
  window.open("president.html", "_self");
}

const dropBox = document.getElementById("dropBox");

dropBox.addEventListener("dragenter", function (e) {
  e.preventDefault();
  dropBox.classList.add("dragover");
});

dropBox.addEventListener("dragleave", function (e) {
  e.preventDefault();
  dropBox.classList.remove("dragover");
});

dropBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropBox.addEventListener("drop", function (e) {
  e.preventDefault();
  dropBox.classList.remove("dragover");
  const files = e.dataTransfer.files;
  // Process the dropped files
  console.log(files);
  displayFileIcons(files);
});

dropBox.addEventListener("click", function () {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".txt,.pdf,.doc,.docx"; // Specify accepted file types if needed
  fileInput.style.display = "none";

  fileInput.addEventListener("change", function () {
    const files = fileInput.files;
    // Process the selected files
    console.log(files);
    displayFileIcons(files);
  });

  document.body.appendChild(fileInput);
  fileInput.click();
  document.body.removeChild(fileInput);
});

function displayFileIcons(files) {
  dropBox.innerHTML = "";
  Array.from(files).forEach((file) => {
    const fileIcon = document.createElement("i");
    fileIcon.classList.add("far", "fa-file", "file-icon");
    dropBox.appendChild(fileIcon);
  });
}

let likeButton = document.getElementById("likeButton");
let dislikeButton = document.getElementById("dislikeButton");
let percentageBar = document.getElementById("percentageBar");
let likePercentage = document.getElementById("likePercentage");
let dislikePercentage = document.getElementById("dislikePercentage");
let voteCount = document.getElementById("voteCount");

let likeCount = 0;
let dislikeCount = 0;
let userAction = null;

likeButton.addEventListener("click", function () {
  if (userAction === "like") {
    likeCount--;
    userAction = null;
  } else {
    likeCount++;
    dislikeCount = 0;
    userAction = "like";
  }
  updatePercentage();
});

dislikeButton.addEventListener("click", function () {
  if (userAction === "dislike") {
    dislikeCount--;
    userAction = null;
  } else {
    dislikeCount++;
    likeCount = 0;
    userAction = "dislike";
  }
  updatePercentage();
});

function updatePercentage() {
  const totalVotes = likeCount + dislikeCount;
  const likePercentageValue =
    totalVotes === 0 ? 0 : Math.round((likeCount / totalVotes) * 100);
  const dislikePercentageValue =
    totalVotes === 0 ? 0 : Math.round((dislikeCount / totalVotes) * 100);

  likePercentage.textContent = likePercentageValue + "%";
  dislikePercentage.textContent = dislikePercentageValue + "%";
  voteCount.textContent = "Votes: " + totalVotes;

  if (userAction === "dislike") {
    percentageBar.style.backgroundColor = "#F8273D";
    percentageBar.style.width = "100%";
    likePercentage.style.marginLeft = "0";
    dislikePercentage.style.marginLeft = "0";
  } else if (userAction === "like") {
    percentageBar.style.backgroundColor = "#213266";
    percentageBar.style.width = "100%";
    likePercentage.style.marginLeft = "0";
    dislikePercentage.style.marginLeft = "0";
  } else {
    percentageBar.style.backgroundColor = "transparent";
    percentageBar.style.width = "0";
    likePercentage.style.marginLeft = "20px";
    dislikePercentage.style.marginLeft = "60px";
  }
}

// Get the form element
const form = document.querySelector(".proposal");

// Add event listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const clubName = document.getElementById("club-name").value;

  // Create a new post element
  const post = document.createElement("div");
  post.className = "post";
  post.style.marginTop = "771px";
  post.style.left = "528px";

  // Create the profile box
  const profileBox = document.createElement("div");
  profileBox.className = "profile-box";

  // Create the profile image
  const profileImage = document.createElement("img");
  profileImage.src = "billDorji.png";
  profileImage.alt = "Profile Image";
  profileImage.className = "profile-image";
  profileBox.appendChild(profileImage);

  // Create the profile info
  const profileInfo = document.createElement("div");
  profileInfo.className = "profile-info";

  // Create the username
  const username = document.createElement("div");
  username.className = "username";
  username.textContent = name;
  profileInfo.appendChild(username);

  // Create the role
  const role = document.createElement("div");
  role.className = "role";
  role.textContent = "employee";
  profileInfo.appendChild(role);

  // Create the duration
  const duration = document.createElement("div");
  duration.className = "duration";
  duration.textContent = "0 Hrs";
  profileInfo.appendChild(duration);

  profileBox.appendChild(profileInfo);
  post.appendChild(profileBox);

  // Create the image box
  const imageBox = document.createElement("div");
  imageBox.className = "image-box";

  // Create the image
  const image = document.createElement("img");
  image.src = "game.png";
  image.alt = "Image";
  image.className = "image";
  imageBox.appendChild(image);
  post.appendChild(imageBox);

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

  buttonContainer.appendChild(percentageBarContainer);

  // Create the dislike button
  const dislikeButton = document.createElement("div");
  dislikeButton.id = "dislikeButton";
  dislikeButton.className = "button dislike-button";
  buttonContainer.appendChild(dislikeButton);
  voting.appendChild(buttonContainer);

  // Create the vote count
  const voteCount = document.createElement("div");
  voteCount.id = "voteCount";
  voteCount.className = "vote-count";
  voteCount.textContent = "Votes: 0";
  voting.appendChild(voteCount);

  post.appendChild(voting);

  // Append the post to the document body
  document.body.appendChild(post);
});
