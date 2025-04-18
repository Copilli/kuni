const options = document.querySelectorAll('.option');
const levelContainer = document.getElementById('level-container');
const levelRange = document.getElementById('level-range');
const levelValue = document.getElementById('level-value');
const confirmButton = document.getElementById('confirm-button');
let selectedOptions = [];

// Emotion levels mapping (adjusted for levels 1-3)
const emotionLevels = {
    "1": ["Interest", "Anticipation", "Vigilance"],
    "2": ["Boredom", "Disgust", "Aversion"],
    "3": ["Trepidation", "Fear", "Dread"],
    "4": ["Serenity", "Happiness", "Ecstasy"],
    "5": ["Anger", "Rage", "Fury"],
    "6": ["Melancholy", "Sadness", "Affliction"],
    "7": ["Distraction", "Surprise", "Astonishment"],
    "8": ["Acceptance", "Trust", "Admiration"],
};

// Emotion combinations mapping
const emotionCombinations = {
    "1-5": "Aggressiveness",
    "5-2": "Contempt",
    "2-6": "Remorse",
    "6-7": "Upset",
    "7-3": "Scared",
    "3-8": "Submission",
    "8-4": "Love",
    "4-1": "Upbeat"
};

// Allowed emotion pairs
const allowedPairs = Object.keys(emotionCombinations).map(pair => pair.split('-'));

// Set initial level range to 1-3
levelRange.min = "1";
levelRange.max = "3";
levelRange.value = "2";
levelValue.textContent = "2";

options.forEach(option => {
    option.addEventListener('click', () => {
        const id = option.getAttribute('data-id');

        if (option.classList.contains('selected')) {
            // Deselect
            option.classList.remove('selected');
            selectedOptions = selectedOptions.filter(selectedId => selectedId !== id);
        } else {
            // Select
            if (selectedOptions.length === 0) {
                option.classList.add('selected');
                selectedOptions.push(id);

                // Reset level selector when a new emotion is selected
                levelRange.value = "2";
                levelValue.textContent = "2";

            } else if (selectedOptions.length === 1) {
                const firstId = selectedOptions[0];
                const isValidPair = allowedPairs.some(pair =>
                    (pair[0] === firstId && pair[1] === id) ||
                    (pair[0] === id && pair[1] === firstId)
                );

                if (isValidPair) {
                    option.classList.add('selected');
                    selectedOptions.push(id);
                }
            }
        }

        updateGridState();
    });
});

function updateGridState() {
    if (selectedOptions.length === 1) {
        const selectedId = selectedOptions[0];
        const validPairs = allowedPairs
            .filter(pair => pair.includes(selectedId))
            .flat()
            .filter(id => id !== selectedId);

        options.forEach(option => {
            const id = option.getAttribute('data-id');
            if (!validPairs.includes(id) && id !== selectedId) {
                option.classList.add('disabled');
            } else {
                option.classList.remove('disabled');
            }
        });

        // Show level selector
        levelContainer.style.display = 'block';
    } else {
        // Hide level selector when selecting more than one emotion
        levelContainer.style.display = 'none';

        if (selectedOptions.length === 2) {
            options.forEach(option => {
                if (!option.classList.contains('selected')) {
                    option.classList.add('disabled');
                }
            });
        } else {
            options.forEach(option => option.classList.remove('disabled'));
        }
    }

    updateConfirmButton();
}

document.getElementById("toggle-version").addEventListener("change", function () {
    const isV2 = this.checked;
    const imageElements = document.querySelectorAll(".emotion-img");

    imageElements.forEach(img => {
        const emotionName = img.alt; // Extract emotion name from alt attribute
        img.src = isV2
            ? `../resources/emotionsV2.0/${emotionName}.png`
            : `../resources/emotions/${emotionName}.png`;
    });
});


// Update displayed level value
levelRange.addEventListener('input', () => {
    levelValue.textContent = levelRange.value;
});

function updateConfirmButton() {
    if (selectedOptions.length === 1 || selectedOptions.length === 2) {
        confirmButton.classList.add('enabled');
        confirmButton.disabled = false;
    } else {
        confirmButton.classList.remove('enabled');
        confirmButton.disabled = true;
    }
}

// Event to send selection data
confirmButton.addEventListener('click', () => {
    if (selectedOptions.length === 1) {
        const emotionId = selectedOptions[0];
        const level = levelRange.value;
        const emotionName = emotionLevels[emotionId][level - 1]; // Adjusted for level 1-3

        window.location.href = `../wiki/wiki.html?emotion=${emotionName}`;
    } else if (selectedOptions.length === 2) {
        const pairKey = `${selectedOptions[0]}-${selectedOptions[1]}`;
        const reversedPairKey = `${selectedOptions[1]}-${selectedOptions[0]}`;
        const combinedEmotion = emotionCombinations[pairKey] || emotionCombinations[reversedPairKey];

        window.location.href = `../wiki/wiki.html?emotion=${combinedEmotion}`;
    }
});

