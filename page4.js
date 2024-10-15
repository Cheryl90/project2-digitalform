let currentImageIndex = 0; // Track the current image index
const images = document.querySelectorAll(".img1, .img2, .img3, .img4, .img5, .img6");
const totalImages = images.length;
const externalLink = "text3.html"; // External page URL as a string

document.getElementById("bgImage").addEventListener("click", function() {
    if (currentImageIndex < totalImages) {
        images[currentImageIndex].style.display = "block"; // Show the current image
        currentImageIndex++; // Move to the next image
    } else if (currentImageIndex === totalImages) {
        // On the seventh click, redirect to the external link
        window.location.href = externalLink;
    }
});


