function setupOptions(selector) {
    const optionBox = document.querySelector(selector);
    const options = optionBox.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(opt => opt.dataset.checked = "false");
            option.dataset.checked = "true";
            localStorage.setItem('selectedOptionStep2', option.querySelector('.option-text').textContent);
        });
    });
}

function setupNextButton(buttonSelector, nextScreenUrl, storageKey) {
    const button = document.querySelector(buttonSelector);

    button.addEventListener('click', () => {
        const selectedOption = document.querySelector('.option[data-checked="true"]');
        if (selectedOption) {
            const selectedText = selectedOption.querySelector('.option-text').textContent;
            localStorage.setItem(storageKey, selectedText);
            window.location.href = nextScreenUrl;
        } else {
            alert("Por favor, selecciona una opción antes de continuar.");
        }
    });
}
