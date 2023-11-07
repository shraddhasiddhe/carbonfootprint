
document.getElementById("calculate-button").addEventListener("click", function () {
    const milesDriven = parseFloat(document.getElementById("vehicle-miles").value);
    const electricityUsage = parseFloat(document.getElementById("electricity-usage").value);
    const publicTransport = parseFloat(document.getElementById("public-transport").value);
    const meatConsumption = parseFloat(document.getElementById("meat-consumption").value);

    const vehicleEmissionsFactor = 2.3; // Example emissions factor in kg CO2e per mile
    const electricityEmissionsFactor = 0.5; // Example emissions factor in kg CO2e per kWh
    const publicTransportEmissionsFactor = 0.05; // Example emissions factor in kg CO2e per mile traveled on public transport
    const meatEmissionsFactor = 14.2; // Example emissions factor in kg CO2e per kg of meat

    const totalEmissions =
        (milesDriven * vehicleEmissionsFactor +
            electricityUsage * electricityEmissionsFactor +
            publicTransport * publicTransportEmissionsFactor +
            meatConsumption * meatEmissionsFactor);

    const carbonFootprint = totalEmissions / 1000;

    document.getElementById("footprint-value").textContent = carbonFootprint.toFixed(2);

    // Store the calculated carbon footprint in a URL parameter
    const params = new URLSearchParams();
    params.set("carbonFootprint", carbonFootprint.toFixed(2));

    // Redirect to the results page with the carbon footprint parameter
    window.location.href = "result.html?" + params.toString()
});
