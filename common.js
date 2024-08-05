<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ... other head content ... -->
    <script src="common.js"></script>
</head>
<body>
    <div id="imageDisplay"></div>
    <div class="nav-buttons">
        <button onclick="goToHome()">Home</button>
        <button onclick="showPreviousPoem()">Previous</button>
        <button onclick="showNextPoem()">Next</button>
        <button class="favorite" onclick="toggleFavorite('Collection Name', currentImageFile)">Favorite</button>
    </div>
    <script>
    const imageFiles = [
        // ... your list of image files ...
    ];
    let currentIndex = 0;
    let currentImageFile = imageFiles[currentIndex];

    function showNextPoem() {
        currentIndex = nextPoem(currentIndex, imageFiles);
        currentImageFile = imageFiles[currentIndex];
        showPoem(currentImageFile);
        updateFavoriteButton('Collection Name', currentImageFile);
    }

    function showPreviousPoem() {
        currentIndex = previousPoem(currentIndex, imageFiles);
        currentImageFile = imageFiles[currentIndex];
        showPoem(currentImageFile);
        updateFavoriteButton('Collection Name', currentImageFile);
    }

    // Show the first poem when the page loads
    window.onload = function() {
        showPoem(currentImageFile);
        updateFavoriteButton('Collection Name', currentImageFile);
    };
    </script>
</body>
</html>
