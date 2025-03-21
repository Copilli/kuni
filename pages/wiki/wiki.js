document.addEventListener("DOMContentLoaded", function () {
    // Get emotion from URL or set default to "Happiness"
    const urlParams = new URLSearchParams(window.location.search);
    let emotion = urlParams.get("emotion") || "Happiness";
    displayEmotion(emotion);

    // Dropdown functionality for selecting emotions dynamically
    const emotionDropdown = document.getElementById("emotion-dropdown");
    if (emotionDropdown) {
        emotionDropdown.value = emotion;
        emotionDropdown.addEventListener("change", function () {
            displayEmotion(this.value);
        });
    }

    // Highlight active navigation link
    highlightActiveNav();
});

function displayEmotion(emotion) {
    const emotionTitle = document.getElementById("emotion-title");
    const emotionImage = document.getElementById("emotion-image");
    const emotionDescription = document.getElementById("emotion-description");

    // Emotion descriptions
    const emotionDescriptions = {
        "Happiness": "Happiness is the feeling of joy and satisfaction.",
        "Anticipation": "Anticipation is the feeling of expecting something exciting.",
        "Disgust": "Disgust is the repulsion towards something unpleasant.",
        "Fear": "Fear is the emotion of sensing danger or threat.",
        "Rage": "Rage is uncontrolled and overwhelming anger.",
        "Sadness": "Sadness is an emotional response to loss.",
        "Surprise": "Surprise is a sudden, unexpected emotion.",
        "Trust": "Trust is confidence and security in others.",
        "Aggressiveness": "Aggressiveness is the emotion of forceful action.",
        "Contempt": "Contempt is a feeling of superiority and disdain.",
        "Remorse": "Remorse is deep regret for past actions.",
        "Upset": "Upset is emotional disturbance and frustration.",
        "Scared": "Scared is a strong feeling of fear and anxiety.",
        "Submission": "Submission is yielding to authority or influence.",
        "Love": "Love is a deep feeling of affection and connection.",
        "Upbeat": "Upbeat is a feeling of optimism and positivity."
    };

    // Update page content
    emotionTitle.textContent = emotion;
    emotionImage.src = `../../resources/emotionsV2.0/${emotion}.png`;
    emotionDescription.textContent = emotionDescriptions[emotion] || "No description available.";
}

// Function to return to the Emotion Selector
function goBack() {
    window.location.href = "../emotionSelector/emotionSelector.html";
}
