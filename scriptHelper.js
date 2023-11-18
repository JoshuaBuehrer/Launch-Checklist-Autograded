// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(
    document,
    name,
    diameter,
    star,
    distance,
    moons,
    imageUrl
  ) {
    const missionTarget = document.getElementById("missionTarget");
  
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
  }
  
  function validateInput(testInput) {
    if (testInput === undefined || testInput === null) {
      return "Empty";
    }
  
    if (typeof testInput !== "string") {
      return "Not a Number";
    }
  
    if (testInput.trim().length === 0) {
      return "Empty";
    } else if (isNaN(testInput)) {
      return "Not a Number";
    } else {
      return "Is a Number";
    }
  }
  
  function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotValidation = validateInput(pilot);
    const copilotValidation = validateInput(copilot);
    const fuelValidation = validateInput(fuelLevel);
    const cargoValidation = validateInput(cargoLevel);
  
    const faultyItems = document.getElementById("faultyItems");
    const launchStatus = document.getElementById("launchStatus");
  
    if (
      pilotValidation === "Empty" ||
      copilotValidation === "Empty" ||
      fuelValidation === "Empty" ||
      cargoValidation === "Empty"
    ) {
      alert("All fields are required!");
      return;
    }
  
    if (fuelValidation === "Not a Number" || cargoValidation === "Not a Number") {
      window.alert("Make sure all boxes are valid!");
       return;
     }
  
    document.getElementById(
      "pilotStatus"
    ).textContent = `Pilot ${pilot} is ready for launch`;
    document.getElementById(
      "copilotStatus"
    ).textContent = `Co-pilot ${copilot} is ready for launch`;
  
   
    let isShuttleReady = true;
  
    if (fuelLevel < 10000) {
      faultyItems.style.visibility = "visible";
      document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
      isShuttleReady = false;
    } else {
      document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
    }
  
    if (cargoLevel >= 10000) {
      faultyItems.style.visibility = "visible";
      document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
      isShuttleReady = false;
    } else {
      document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
    }
  
    if (isShuttleReady) {
      faultyItems.style.visibility = "visible";
      launchStatus.textContent = "Shuttle is Ready for Launch";
      launchStatus.style.color = "green";
    } else {
      launchStatus.textContent = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "red";
    }
    
    return;
  }
  
  async function myFetch() {
    let planetsReturned;
  
    const url = "https://handlers.education.launchcode.org/static/planets.json";
  
    planetsReturned = await fetch(url).then(function (response) {
      return response.json();
    });
  
    return planetsReturned;
  }
  
  function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
  
    return planets[randomIndex];
  }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;