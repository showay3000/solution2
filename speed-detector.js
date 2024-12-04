	
function speedDetector() {
    //prompt the user
    let speed = prompt("Enter your speed in km/h");
  
    speed = Number(speed);
  
    if (isNaN(speed)) {
      console.log("please input a number");
      return;
    }
  
    if (speed < 0) {
      console.log("please input a value that is more than 0");
      return;
    }
  
    //Speed Limit
    const speedLimit = 70;
  
    //points increase for every 5 km/s over the speed limit
    const KmPerPoint = 5;
  
    if (speed <= speedLimit) {
      alert("OK");
    } else {
      const points = Math.floor((speed - speedLimit) / KmPerPoint);
  
  //Check if License should be suspended
  if (points > 12) {
    alert("License suspended");
  } else {
    alert(`Points: ${points}`);
  }
    }
  }
  
  //call the function
  speedDetector();