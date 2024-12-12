document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("welcomePopup");
    const closeBtn = document.getElementById("closePopup");

    // Afficher la popup après 1 seconde
    setTimeout(() => {
        popup.style.display = "flex";
    }, 1000);

    // Fermer la popup
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });
});
