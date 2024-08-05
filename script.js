const dynamicTexts = [
    "Dynamic text 1",
    "Dynamic text 2",
    // ... Add 48 more texts here
    "Dynamic text 50"
];

let currentIndex = -1;

function updateText() {
    currentIndex = (currentIndex + 1) % dynamicTexts.length;
    document.getElementById('dynamic-text').textContent = dynamicTexts[currentIndex];
}

document.body.addEventListener('click', updateText);

// Initialize with the first dynamic text
updateText();