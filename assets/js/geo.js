const successCallback = (position) => {
  console.log(position);
};

const errorCallback = (error) => {
  console.log(error);
};

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
};

navigator.geolocation.getCurrentPosition(
  successCallback,
  errorCallback,
  options
);

/**
button.onclick = function() {
  var startPos;
  var nudge = document.getElementById('nudge');
  var showNudgeBanner = function() {
    nudge.style.display = 'block';
  };
  var hideNudgeBanner = function() {
    nudge.style.display = 'none';
  };
  var nudgeTimeoutId = setTimeout(showNudgeBanner, 5000);
  var geoSuccess = function(position) {
    hideNudgeBanner(); // We have the location, don't display banner    
    clearTimeout(nudgeTimeoutId); // Do magic with location    
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  var geoError = function (error) {
    switch (error.code) {
      case error.TIMEOUT:    // The user didn't accept the callout        
        showNudgeBanner();
      break;
    }
  }; 
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};

// check for Geolocation support
if (navigator.geolocation) {  
  console.log('Geolocation is supported!');
} else {  
  console.log('Geolocation is not supported for this Browser/OS.');
}

window.onload = function() {
var startPos;
var geoSuccess = function(position) {
  startPos = position;
  document.getElementById('startLat').innerHTML = startPos.coords.latitude;
  document.getElementById('startLon').innerHTML = startPos.coords.longitude;
};
navigator.geolocation.getCurrentPosition(geoSuccess);
};
var watchId = navigator.geolocation.watchPosition(function(position) {
   document.getElementById('currentLat').innerHTML = position.coords.latitude;
   document.getElementById('currentLon').innerHTML = position.coords.longitude;
});

window.onload = function() {
  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  var geoError = function(error) {
    console.log('Error occurred. Error code: ' + error.code); // error.code can be:    //   0: unknown error    //   1: permission denied    //   2: position unavailable (error response from location provider)    //   3: timed out  
  };
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};
*/
