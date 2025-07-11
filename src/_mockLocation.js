import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;
const latDist = 0.0005;
const lonDist = 0.0005;

const LATITUDE = -23.9477201;
const LONGITUDE = -46.3302543667;

const getLocation = (latIncrement, lonIncrement) => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: LATITUDE + latIncrement * tenMetersWithDegrees,
      longitude: LONGITUDE + lonIncrement * tenMetersWithDegrees
    }
  };
};

let latCounter = 0;
let lonCounter = 0;
let direction = "right"; // right, down, left, up

setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(latCounter, lonCounter)
  });

  switch (direction) {
    case "right":
      lonCounter++;
      if (lonCounter * tenMetersWithDegrees >= lonDist) direction = "down";
      break;
    case "down":
      latCounter--;
      if (latCounter * tenMetersWithDegrees <= -latDist) direction = "left";
      break;
    case "left":
      lonCounter--;
      if (lonCounter * tenMetersWithDegrees <= -lonDist) direction = "up";
      break;
    case "up":
      latCounter++;
      if (latCounter * tenMetersWithDegrees >= latDist) direction = "right";
      break;
  }
}, 1000);