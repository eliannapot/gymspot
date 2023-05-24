//Map

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 38.238558920524724, lng: 21.734261025667106},
      zoom: 12
    });
  }

// Day - Night Mode

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const themeButton = document.getElementById('theme-button')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains('darkTheme') ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains('iconTheme') ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('darkTheme')
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove']('iconTheme')
}

// Activate / deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle('darkTheme')
    themeButton.classList.toggle('iconTheme')
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})