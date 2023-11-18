// Write your JavaScript code here!

window.addEventListener("load", async function () {
    let listedPlanets;
  
    
      // Set listedPlanets equal to the value returned by calling myFetch()
      listedPlanets = await myFetch();
  
      // Below this comment call the appropriate helper functions
      // picks and puts planet to webpage
      const selectedPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        selectedPlanet.name,
        selectedPlanet.diameter,
        selectedPlanet.star,
        selectedPlanet.distance,
        selectedPlanet.moons,
        selectedPlanet.image
      );
  
      const form = document.querySelector('form[data-testid="testForm"]');
      const list = document.getElementById("faultyItems");
  
      form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        // Collect form data
        const pilot = form.elements["pilotName"].value;
        const copilot = form.elements["copilotName"].value;
        const fuelLevel = form.elements["fuelLevel"].value;
        const cargoMass = form.elements["cargoMass"].value;
  
       
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
  
      });
    
  });