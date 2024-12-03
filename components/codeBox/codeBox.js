function initializeScreen3() {
    const promoCodeElement = document.querySelector('.promo-code');
    const copyButton = document.querySelector('.copy-button');
    const timerValue = document.querySelector('#timer');
    const codeBox = document.querySelector('.promo-code-box');
    const timerBox = document.querySelector('.timer-box');
    let timer = 1200; // 20 minutes in seconds
    let timerInterval;

    const generatePromoCode = () => {
        const selectedOptionStep2 = localStorage.getItem('selectedOptionStep2');
        if (!selectedOptionStep2) return console.error("Insufficient data to generate the discount code."), "ERROR";
        const validCharacters = selectedOptionStep2.slice(-4).toUpperCase().replace(/[^B-Z0-9]/g, '');
        return `${Date.now().toString().slice(-4)}${validCharacters}`.substring(0, 8);
    };

    const updateTimer = () => {
        timerValue.textContent = `${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, '0')}`;
        if (--timer < 0) {
            clearInterval(timerInterval);
            handleTimerExpiration();
        }
    };

    const handleTimerExpiration = () => {
        codeBox.classList.add('expired');
        timerBox.style.backgroundColor = '#C51414';
        timerValue.innerHTML = 'Code expired. <span class="reset-link">Restart.</span>';
        document.querySelector('.reset-link').addEventListener('click', resetTimer);
    };

    const resetTimer = () => {
        timer = 1200;
        codeBox.classList.remove('expired');
        timerBox.style.backgroundColor = '#3F2035';
        promoCodeElement.textContent = generatePromoCode();
        startTimer();
    };

    const startTimer = () => {
        clearInterval(timerInterval);
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    };

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(promoCodeElement.textContent).then(() => {
            alert('Promo code copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });

    promoCodeElement.textContent = generatePromoCode();
    startTimer();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeScreen3(); // Initializes the logic for screen 3
    document.getElementById('go-to-siroko').addEventListener('click', () => {
        window.location.href = 'https://www.siroko.com/es/';
    });
});

