let isEnglish = false;

function toggleLanguage() {
    isEnglish = !isEnglish;
    
    const button = document.getElementById("language-toggle");
    const elements = document.querySelectorAll("[data-lang]");

    // Szöveg módosítása
    elements.forEach((element) => {
        const langKey = element.getAttribute("data-lang");
        if (isEnglish) {
            element.innerHTML = translations[langKey].en;
        } else {
            element.innerHTML = translations[langKey].hu;
        }
    });

    // Gomb szövege
    if (isEnglish) {
        button.innerHTML = "Hungarian";
    } else {
        button.innerHTML = "English";
    }
}

// Nyelvi fordítások objektum
const translations = {
    "home-title": {
        hu: "Üdvözöljük a Mini Miskolc gyárában!",
        en: "Welcome to Mini Miskolc Factory!"
    },
    "home-description": {
        hu: "Precizitás, innováció és minőség minden egyes Mini autóban.",
        en: "Precision, innovation, and quality in every Mini car."
    },
    "cta-text": {
        hu: "Fedezze fel modelleinket",
        en: "Explore our models"
    },
    // További szövegek...
};

// Alapértelmezett nyelv beállítása
document.addEventListener("DOMContentLoaded", function () {
    toggleLanguage(); // Alapértelmezett nyelv betöltése
});
