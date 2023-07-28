// script.js
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle");
    const body = document.body;
    const now = new Date();
    const currentHour = now.getHours();
  
    // Function to check if the current time is within the light mode hours (7AM to 5PM)
    function isLightModeTime(hour) {
      return hour >= 7 && hour < 18;
    }
  
    // Function to check if the current time is within the dark mode hours (6PM to 6AM)
    function isDarkModeTime(hour) {
      return hour >= 18 || hour < 6;
    }
  
    // Function to apply the correct mode based on the user's current time
    function applyModeBasedOnTime() {
      if (isLightModeTime(currentHour)) {
        body.classList.remove("dark-mode");
        toggle.checked = false;
      } else if (isDarkModeTime(currentHour)) {
        body.classList.add("dark-mode");
        toggle.checked = true;
      }
    }
  
    // Call the function when the page loads
    applyModeBasedOnTime();
  
    // Add event listener to the toggle button
    toggle.addEventListener("change", function () {
      if (toggle.checked) {
        // Switch to dark mode
        body.classList.add("dark-mode");
      } else {
        // Switch to light mode
        body.classList.remove("dark-mode");
      }
    });
  });
  