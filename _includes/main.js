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
  option
);
