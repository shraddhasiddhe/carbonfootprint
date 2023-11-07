// Retrieve the carbon footprint from local storage
const carbonFootprint = localStorage.getItem("carbonFootprint");

// Display the carbon footprint on the results page
document.getElementById("carbon-footprint-value").textContent = carbonFootprint + " tons CO2e/year";
