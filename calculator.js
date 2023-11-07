document.getElementById("calculate-button").addEventListener("click", function () {
    const milesDriven = parseFloat(document.getElementById("vehicle-miles").value);
    const electricityUsage = parseFloat(document.getElementById("electricity-usage").value);
    const publicTransport = parseFloat(document.getElementById("public-transport").value);
    const meatConsumption = parseFloat(document.getElementById("meat-consumption").value);

    const vehicleEmissionsFactor = 2.3; // Emissions per mile
    const electricityEmissionsFactor = 0.5; // Emissions per kWh
    const publicTransportEmissionsFactor = 0.05; // Emissions per mile traveled on public transport
    const meatEmissionsFactor = 14.2; // Emissions per kg of meat

    const totalEmissions =
        (milesDriven * vehicleEmissionsFactor +
            electricityUsage * electricityEmissionsFactor +
            publicTransport * publicTransportEmissionsFactor +
            meatConsumption * meatEmissionsFactor);

    const carbonFootprint = totalEmissions / 1000;

    // Store the carbon footprint in local storage
    localStorage.setItem("carbonFootprint", carbonFootprint);

    // Redirect to the results page
    window.location.href = "result.html";
});
