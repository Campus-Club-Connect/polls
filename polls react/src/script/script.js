// File: script.js

function goToClubsPage() {
  window.open("poll.html", "_self");
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

let voteCount = 0; // Number of votes
let voteId = null; // ID of the candidate voted by the user
let totalVotes = 1; // Total number of votes from different logged-in users

function Vote(candidateId) {
  const percentageBar = document.querySelector(".percentage-bar");
  const percentageLabel = document.querySelector(".percentage-label");

  if (voteId === candidateId) {
    // User clicked on the same candidate, remove the vote
    voteCount = 0;
    voteId = null;
    percentageBar.style.width = "0";
    percentageLabel.textContent = "Not Voted";
    percentageBar.style.backgroundColor = "";
  } else {
    // User clicked on a different candidate, update the vote
    voteCount = 1;
    voteId = candidateId;
    percentageLabel.textContent = "Voted";

    if (candidateId === "candidate1") {
      percentageBar.style.backgroundColor = "Red"; // Red color for candidate1
    } else if (candidateId === "candidate2") {
      percentageBar.style.backgroundColor = "Green"; // Green color for candidate2
    } else if (candidateId === "candidate3") {
      percentageBar.style.backgroundColor = "Blue"; // Blue color for candidate3
    } else if (candidateId === "candidate4") {
      percentageBar.style.backgroundColor = "Yellow"; // Yellow color for candidate4
    }

    percentageBar.style.width = "100%";
  }
}
