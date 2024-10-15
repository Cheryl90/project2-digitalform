document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#imageContainer img');
    const button = document.getElementById('randomizeBtn');
    const placedImages = [];

    // Function to generate a random position within 100vh and 100vw
    function getRandomPosition(image) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let randomX, randomY, overlap;

        // Keep trying to generate random positions until no overlap is detected
        do {
            overlap = false;

            // Generate random positions ensuring the image fits within the viewport
            randomX = Math.floor(Math.random() * (viewportWidth - image.width));
            randomY = Math.floor(Math.random() * (viewportHeight - image.height));

            // Check if this random position overlaps with any previously placed images
            for (let placed of placedImages) {
                if (
                    randomX < placed.x + placed.width &&
                    randomX + image.width > placed.x &&
                    randomY < placed.y + placed.height &&
                    randomY + image.height > placed.y
                ) {
                    overlap = true;
                    break;
                }
            }
        } while (overlap);

        // Store the position and dimensions of the placed image
        placedImages.push({ x: randomX, y: randomY, width: image.width, height: image.height });

        return { x: randomX, y: randomY };
    }

    // Function to randomize the position of all images
    function randomizeImages() {
        placedImages.length = 0;  // Clear previously placed image positions

        images.forEach(image => {
            const position = getRandomPosition(image);
            image.style.left = `${position.x}px`;
            image.style.top = `${position.y}px`;
        });
    }

    // Event listener for the button to randomize images on click
    button.addEventListener('click', randomizeImages);

    // Randomize positions on page load
    randomizeImages();
});


