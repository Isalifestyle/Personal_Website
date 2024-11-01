
// Buttons
let button = document.querySelector('.project-button');
let element = document.querySelector('.colmar'); // Select the element to show/hide

function toggleDropdown() {
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'grid';
        
       
    } else {
        element.style.display = 'none';
    }
}
button.addEventListener('click', toggleDropdown);



const themeSwitch = document.getElementById('theme-switch'); // Ensure you have this button in your HTML

// Function to enable dark mode
const enableDarkmode = () => {
    document.body.classList.add('dark-mode'); // Add dark mode class
    localStorage.setItem('darkmode', 'active'); // Store dark mode status
}

// Function to disable dark mode
const disableDarkmode = () => {
    document.body.classList.remove('dark-mode'); // Remove dark mode class
    localStorage.setItem('darkmode', null); // Reset dark mode status
}

// Check local storage to see if dark mode should be enabled on load
let darkmode = localStorage.getItem('darkmode');
if (darkmode === 'active') enableDarkmode();

// Add event listener to the toggle button
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode'); // Update darkmode variable on click
    if (darkmode !== 'active') {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
});
