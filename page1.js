// Get the image1 element by its ID
const image1 = document.getElementById("myImage1");

let image1ClickCount = 0;

// Add a click event listener to image1
image1.addEventListener("click", function() {
    image1ClickCount++; // Increment click count each time image1 is clicked

    if (image1ClickCount === 1) {
        // First click: Replace image1's src with Image3.jpg
        image1.src = "img/image3.jpg";
    } else if (image1ClickCount === 2) {
        // Second click: Replace image1's src with Image5.jpg
        image1.src = "img/image5.jpg";
    } else if (image1ClickCount === 3) {
        // Third click: Replace image1's src with Image8.jpg
        image1.src = "img/image8.jpg";
    } else if (image1ClickCount === 4) {
        // Fourth click: Redirect to an external source after image8 is shown
        window.location.href = "text1.html"; // Replace with your external link
    }

});

let isImage2Image6 = false;

// Get the image2 element by its ID
const image2 = document.getElementById("myImage2");

// Add a click event listener to image2
image2.addEventListener("click", function() {
    // Replace image2 with Image4.jpg
    image2.src = "img/image4.jpg"; 

    image2.addEventListener("click", function() {
        // Replace image3 (which was previously image1) with Image5.jpg
        image2.src = "img/image6.jpg";
        isImage2Image6 = true;
    });
});

const image7Column = document.getElementById("image7Column"); 

let image7Visible = false; // Track whether Image7 is visible

image2.addEventListener("click", function() {
    if (isImage2Image6 && !image7Visible) {
        image7Column.style.display = "flex"; // Show Image7
        image7Visible = true;
    }
});

// Add a click event listener to image7 itself to remove it
image7.addEventListener("click", function() {
    // Hide Image7 when clicked
    image7Column.style.display = "none";
    image7Visible = false;
});