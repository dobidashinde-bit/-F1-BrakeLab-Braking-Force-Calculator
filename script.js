const massInput = document.getElementById("mass");
const speedInput = document.getElementById("speed");
const distanceInput = document.getElementById("distance");

const calculateButton =
document.getElementById("calculatebutton");

const forceOutput =
document.getElementById("force");

 const decelerationOutput =
 document.getElementById("deceleration");

const gForceOutput =
    document.getElementById("gForce");

const energyOutput =
document.getElementById("energy");

const timeOutput =
document.getElementById("time");

const messageOutput =
document.getElementById("message");

const car =
document.getElementById("car");

const status =
document.getElementById("status");

const error =
document.getElementById("error");

calculateButton.addEventListener("click", calculateBrake);

function calculateBrake() {
    const mass = Number(massInput.value);
    const speedKmh = Number(speedInput.value);
    const distance = Number(distanceInput.value);

    const speed = speedKmh * 1000 / 3600;

    //validate inputs

    if (
        !Number.isFinite(mass) ||
        !Number.isFinite(speedKmh) ||
        !Number.isFinite(distance) ||
        mass <= 0 ||
        speedKmh <= 0 ||
        distance <= 0
    ) {

        error.textContent =
        " Enter valid values for all three input.";
        return;
    } 
    error.textContent = "";
   status.textContent = "CALCULATING...";
   //Braking deceleration
   //
   // v² = u² + 2as
   // Final velocity =0
   // a = v² / 2s

   const deceleration =
   (speed* speed) / (2 * distance);

   // Force
   //
   // F =ma
   const force =
   mass * deceleration;
   
   // kinetic energy 
   //
   // KE = ½mv²
  const kineticEnergy =
    0.5 * mass * speed * speed;

   //G-force
   const gForce =
   deceleration / 9.80665;

   //stopping time
   //
   // v = at
   // t = v/a

   const  stoppingTime =
   speed/deceleration;

   // Display results

   forceOutput.textContent =
   Math.round(force).toLocaleString();

   decelerationOutput.textContent=
   deceleration.toFixed(2);

   gForceOutput.textContent =
   gForce.toFixed(2);

   energyOutput.textContent =
    (kineticEnergy / 1000000).toFixed(2);

   timeOutput.textContent =
   stoppingTime.toFixed(2);

   status.textContent = "BRAKING COMPLETE";

   //Animate car

 car.style.transform = "translateX(0)";

setTimeout(() => {
    car.style.transform = "translateX(280px)";
}, 100);

    // Funny  engineeing messages 

     if (gForce < 0.5) {
       
        messageOutput.textContent=
        "That's barely  braking. The corner is laughing at you";

    }

    else if (gForce < 1){
        messageOutput.textContent =
         "Pretty gentle. Your tyres are still hhaving a nice day.";
    }

    else if (gForce < 2){
        messageOutput.textContent =
         "Okay, now we're actually branking.";
    }

    else if (gForce < 3) {
        messageOutput.textContent =
        "Your tyres would like to speak to the engineer.";
    }

    else {

        messageOutput.textContent =
        "ENGINEER:want did you do to the brakesi?!";
    }
}