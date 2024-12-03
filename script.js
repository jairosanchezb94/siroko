// Function to load a screen
function loadScreen(screenNumber) {
    const container = document.getElementById('app-container');
    fetch(`screen${screenNumber}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading screen${screenNumber}.html`);
            }
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the screen:', error);
        });
}

// Initializes the system to load the first screen
document.addEventListener('DOMContentLoaded', () => {
    loadScreen(1);
});

// Function to switch between screens
function showScreen(screenNumber) {
    loadScreen(screenNumber);
}
