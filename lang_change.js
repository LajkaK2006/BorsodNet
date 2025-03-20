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
    // Angol nyelvű szövegek
    document.querySelector('h2').innerText = 'Welcome to the Mini Miskolc factory!';
    document.querySelector('p').innerText = 'Precision, innovation, and quality in every Mini car.';
    document.querySelector('.btn').innerText = 'Explore our models';
    document.querySelector('.car-item:nth-child(1) h3').innerText = 'Mini Cooper';
    document.querySelector('.car-item:nth-child(1) p').innerText = 'The unique combination of classic Mini style and dynamics.';
    document.querySelector('.car-item:nth-child(1) .price').innerText = 'Price: From 10,990,000 HUF';
    document.querySelector('.car-item:nth-child(2) h3').innerText = 'Mini Countryman';
    document.querySelector('.car-item:nth-child(2) p').innerText = 'The perfect Mini for adventures, with more space and a stronger engine.';
    document.querySelector('.car-item:nth-child(2) .price').innerText = 'Price: From 12,450,000 HUF';
    document.querySelector('.car-item:nth-child(3) h3').innerText = 'Mini John Cooper Works';
    document.querySelector('.car-item:nth-child(3) p').innerText = 'The sporty Mini offering an exciting driving experience, made for true car enthusiasts.';
    document.querySelector('.car-item:nth-child(3) .price').innerText = 'Price: From 15,500,000 HUF';
    // További angol szövegek
}

function updateTextToHungarian() {
    // Magyar nyelvű szövegek
    document.querySelector('h2').innerText = 'Üdvözöljük a Mini Miskolc gyárában!';
    document.querySelector('p').innerText = 'Precizitás, innováció és minőség minden egyes Mini autóban.';
    document.querySelector('.btn').innerText = 'Fedezze fel modelleinket';
    document.querySelector('.car-item:nth-child(1) h3').innerText = 'Mini Cooper';
    document.querySelector('.car-item:nth-child(1) p').innerText = 'A klasszikus Mini stílus és dinamika egyedülálló kombinációja.';
    document.querySelector('.car-item:nth-child(1) .price').innerText = 'Ár: 10,990,000 Ft-tól';
    document.querySelector('.car-item:nth-child(2) h3').innerText = 'Mini Countryman';
    document.querySelector('.car-item:nth-child(2) p').innerText = 'A Mini tökéletes választása a kalandokhoz, nagyobb térrel és erősebb motorral.';
    document.querySelector('.car-item:nth-child(2) .price').innerText = 'Ár: 12,450,000 Ft-tól';
    document.querySelector('.car-item:nth-child(3) h3').innerText = 'Mini John Cooper Works';
    document.querySelector('.car-item:nth-child(3) p').innerText = 'A sportos Mini, ami izgalmas vezetési élményt kínál, igazi autórajongóknak.';
    document.querySelector('.car-item:nth-child(3) .price').innerText = 'Ár: 15,500,000 Ft-tól';
    // További magyar szövegek
}

document.getElementById('lang-btn').addEventListener('click', function() {
    const currentLang = document.documentElement.lang;

    if (currentLang === 'hu') {
        // Átváltás angolra: átirányít a home_en.html oldalra
        window.location.href = 'home_en.html';
    } else {
        // Átváltás magyarra: átirányít a home_hu.html oldalra
        window.location.href = 'home_hu.html';
    }
});
