
const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;
const currentYearElement = document.getElementById('currentYear');
currentYearElement.textContent = currentYear;

const lastModifiedDateElement = document.getElementById('lastModifiedDate');
lastModifiedDateElement.textContent = lastModifiedDate;
