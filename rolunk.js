function toggleDescription(id) {
    const desc = document.getElementById(id);
    const isVisible = desc.style.display === "block";
    
    // Elrejti az összes leírást
    const allDescriptions = document.querySelectorAll('.description');
    allDescriptions.forEach(description => {
        description.style.display = 'none';
    });
    
    // Ha nincs megjelenítve, akkor megjeleníti
    if (!isVisible) {
        desc.style.display = "block";
    }
}
