document.getElementById('lang-btn').addEventListener('click', function() {
    const currentLang = document.documentElement.lang;

    if (currentLang === 'hu') {
        // Átváltás angolra
        document.documentElement.lang = 'en';
        document.getElementById('lang-btn').innerHTML = '<i class="fas fa-flag-uk"></i> EN';
        updateTextToEnglish();
    } else {
        // Átváltás magyarra
        document.documentElement.lang = 'hu';
        document.getElementById('lang-btn').innerHTML = '<i class="fas fa-flag-hungary"></i> HU';
        updateTextToHungarian();
    }
});

function updateTextToEnglish() {
    // Például cserélhetjük a szövegeket angolra
    document.querySelector('h2').innerText = 'Welcome to the Mini Miskolc factory!';
    document.querySelector('p').innerText = 'Precision, innovation, and quality in every Mini car.';
    document.querySelector('.btn').innerText = 'Explore our models';
    // Add other translations similarly
}

function updateTextToHungarian() {
    // Visszaállítás magyarra
    document.querySelector('h2').innerText = 'Üdvözöljük a Mini Miskolc gyárában!';
    document.querySelector('p').innerText = 'Precizitás, innováció és minőség minden egyes Mini autóban.';
    document.querySelector('.btn').innerText = 'Fedezze fel modelleinket';
    // Add other translations similarly
}
