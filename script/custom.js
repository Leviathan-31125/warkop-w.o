var developer = document.querySelector('#developer');
var closeButton = document.querySelector('.close-btn');


var overlay = document.querySelector('.overlay');
var profileDev = document.querySelector('.developer-profile');

const showDeveloper = function () {
    profileDev.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeDeveloper = function () {
    profileDev.classList.add("hidden");
    overlay.classList.add("hidden");
}

developer.addEventListener('click', showDeveloper);
closeButton.addEventListener('click', closeDeveloper);