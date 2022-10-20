function geo() {

  function successCallback(position) {
    console.log(position);
  }

  function errorCallback(error) {
    console.log(error);
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
  }

  navigator.geolocation.getCurrentPostion(
    successCallback,
    errorCallback,
    options
  )

}();
