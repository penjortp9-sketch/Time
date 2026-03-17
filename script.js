let images = [
    "https://source.unsplash.com/400x300/?remote-work",
    "https://source.unsplash.com/400x300/?work-from-home",
    "https://source.unsplash.com/400x300/?productivity",
    "https://source.unsplash.com/400x300/?home-office",
    "https://source.unsplash.com/400x300/?freelancer"
];

// Function to change image randomly
function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById("projectImage").src = images[randomIndex];
}

// Run automatically when page loads
window.onload = function() {
    changeImage();
};