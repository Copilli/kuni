const options = document.querySelectorAll('.option');
let selectedOptions = [];

// Pares permitidos
const allowedPairs = [
    ['1', '5'], // anticipation - rage
    ['5', '2'], // rage - disgust
    ['2', '6'], // disgust - sadness
    ['6', '7'], // sadness - surprise
    ['7', '3'], // surprise - fear
    ['3', '8'], // fear - trust
    ['8', '4'], // trust - happiness
    ['4', '1'], // happiness - anticipation
];

options.forEach(option => {
    option.addEventListener('click', () => {
        const id = option.getAttribute('data-id');

        if (option.classList.contains('selected')) {
            // Deseleccionar
            option.classList.remove('selected');
            selectedOptions = selectedOptions.filter(selectedId => selectedId !== id);
            updateGridState();
        } else {
            // Seleccionar
            if (selectedOptions.length === 0) {
                // Primera selección
                option.classList.add('selected');
                selectedOptions.push(id);
                updateGridState();
            } else if (selectedOptions.length === 1) {
                // Segunda selección: verificar si es válida
                const firstId = selectedOptions[0];
                const isValidPair = allowedPairs.some(pair =>
                    (pair[0] === firstId && pair[1] === id) ||
                    (pair[0] === id && pair[1] === firstId)
                );

                if (isValidPair) {
                    // Es un par válido, seleccionarlo
                    option.classList.add('selected');
                    selectedOptions.push(id);
                    updateGridState();
                }
            }
        }
    });
});

function updateGridState() {
    if (selectedOptions.length === 1) {
        const selectedId = selectedOptions[0];
        const validPairs = allowedPairs
            .filter(pair => pair.includes(selectedId))
            .flat()
            .filter(id => id !== selectedId);

        // Habilitar solo las opciones que forman pares válidos con la seleccionada
        options.forEach(option => {
            const id = option.getAttribute('data-id');
            if (!validPairs.includes(id) && id !== selectedId) {
                option.classList.add('disabled');
            } else {
                option.classList.remove('disabled');
            }
        });
    } else if (selectedOptions.length === 2) {
        // Desactivar todas excepto las seleccionadas
        options.forEach(option => {
            if (!option.classList.contains('selected')) {
                option.classList.add('disabled');
            }
        });
    } else {
        // Reactivar todas si no hay selección o se deselecciona todo
        options.forEach(option => option.classList.remove('disabled'));
    }
}
