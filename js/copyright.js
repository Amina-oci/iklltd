// This code gets the current year and updates the span with id="current-year"
const yearElement = document.getElementById('current-year');

if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}