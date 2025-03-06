document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const emotion = urlParams.get("emotion");

    if (emotion) {
        displayEmotion(emotion);
    }
});

function displayEmotion(emotion) {
    const emotionTitle = document.getElementById("emotion-title");
    const emotionImage = document.getElementById("emotion-image");
    const emotionDescription = document.getElementById("emotion-description");

    // Emotion descriptions
    const emotionDescriptions = {
        "Interest": "Interest is the emotion of curiosity and engagement.",
        "Anticipation": "Anticipation is the feeling of expecting something exciting.",
        "Vigilance": "Vigilance is the heightened awareness of your surroundings.",
        "Boredom": "Boredom is the state of disinterest and lack of stimulation.",
        "Disgust": "Disgust is the repulsion towards something unpleasant.",
        "Aversion": "Aversion is an intense dislike or opposition.",
        "Trepidation": "Trepidation is a feeling of nervous hesitation.",
        "Fear": "Fear is the emotion of sensing danger or threat.",
        "Dread": "Dread is a deep feeling of impending doom.",
        "Serenity": "Serenity is a state of inner peace and calm.",
        "Happiness": "Happiness is the feeling of joy and satisfaction.",
        "Ecstasy": "Ecstasy is intense happiness and bliss.",
        "Anger": "Anger is the emotion of frustration and irritation.",
        "Rage": "Rage is uncontrolled and overwhelming anger.",
        "Fury": "Fury is extreme and destructive anger.",
        "Melancholy": "Melancholy is a deep, reflective sadness.",
        "Sadness": "Sadness is an emotional response to loss.",
        "Affliction": "Affliction is intense suffering and sorrow.",
        "Distraction": "Distraction is when your attention is scattered.",
        "Surprise": "Surprise is a sudden, unexpected emotion.",
        "Astonishment": "Astonishment is extreme surprise and awe.",
        "Acceptance": "Acceptance is being open to experiences.",
        "Trust": "Trust is confidence and security in others.",
        "Admiration": "Admiration is deep respect for someone or something.",
        "Aggressiveness": "Aggressiveness is the emotion of forceful action.",
        "Contempt": "Contempt is a feeling of superiority and disdain.",
        "Remorse": "Remorse is deep regret for past actions.",
        "Upset": "Upset is emotional disturbance and frustration.",
        "Scared": "Scared is a strong feeling of fear and anxiety.",
        "Submission": "Submission is yielding to authority or influence.",
        "Love": "Love is a deep feeling of affection and connection.",
        "Upbeat": "Upbeat is a feeling of optimism and positivity."
    };

    // Set emotion title
    emotionTitle.textContent = emotion;

    // Set emotion image path (checks both versions)
    emotionImage.src = `../../resources/emotionsV2.0/${emotion}.png`;

    // Set emotion description
    emotionDescription.textContent = emotionDescriptions[emotion] || "No description available.";
}

// Return to selection page
function goBack() {
    window.location.href = "../emotionSelector/emotionSelector.html";
}
