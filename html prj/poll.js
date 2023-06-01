// File: script.js
const dropBox = document.getElementById('dropBox');

dropBox.addEventListener('dragenter', function (e) {
    e.preventDefault();
    dropBox.classList.add('dragover');
});

dropBox.addEventListener('dragleave', function (e) {
    e.preventDefault();
    dropBox.classList.remove('dragover');
});

dropBox.addEventListener('dragover', function (e) {
    e.preventDefault();
});

dropBox.addEventListener('drop', function (e) {
    e.preventDefault();
    dropBox.classList.remove('dragover');
    const files = e.dataTransfer.files;
    // Process the dropped files
    console.log(files);
    displayFileIcons(files);
});

dropBox.addEventListener('click', function () {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt,.pdf,.doc,.docx'; // Specify accepted file types if needed
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', function () {
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
    dropBox.innerHTML = '';
    Array.from(files).forEach(file => {
        const fileIcon = document.createElement('i');
        fileIcon.classList.add('far', 'fa-file', 'file-icon');
        dropBox.appendChild(fileIcon);
    });
}

let likeButton = document.getElementById('likeButton');
let dislikeButton = document.getElementById('dislikeButton');
let percentageBar = document.getElementById('percentageBar');
let likePercentage = document.getElementById('likePercentage');
let dislikePercentage = document.getElementById('dislikePercentage');
let voteCount = document.getElementById('voteCount');

let likeCount = 0;
let dislikeCount = 0;
let userAction = null;

likeButton.addEventListener('click', function() {
    if (userAction === 'like') {
        likeCount--;
        userAction = null;
    } else {
        likeCount++;
        dislikeCount = 0;
        userAction = 'like';
    }
    updatePercentage();
});

dislikeButton.addEventListener('click', function() {
    if (userAction === 'dislike') {
        dislikeCount--;
        userAction = null;
    } else {
        dislikeCount++;
        likeCount = 0;
        userAction = 'dislike';
    }
    updatePercentage();
});

function updatePercentage() {
    const totalVotes = likeCount + dislikeCount;
    const likePercentageValue = totalVotes === 0 ? 0 : Math.round((likeCount / totalVotes) * 100);
    const dislikePercentageValue = totalVotes === 0 ? 0 : Math.round((dislikeCount / totalVotes) * 100);

    likePercentage.textContent = likePercentageValue + '%';
    dislikePercentage.textContent = dislikePercentageValue + '%';
    voteCount.textContent = 'Votes: ' + totalVotes;

    if (userAction === 'dislike') {
        percentageBar.style.backgroundColor = '#F8273D';
        percentageBar.style.width = '100%';
        likePercentage.style.marginLeft = '0';
        dislikePercentage.style.marginLeft = '0';
    } else if (userAction === 'like') {
        percentageBar.style.backgroundColor = '#213266';
        percentageBar.style.width = '100%';
        likePercentage.style.marginLeft = '0';
        dislikePercentage.style.marginLeft = '0';
    } else {
        percentageBar.style.backgroundColor = 'transparent';
        percentageBar.style.width = '0';
        likePercentage.style.marginLeft = '20px';
        dislikePercentage.style.marginLeft = '60px';
    }
}
