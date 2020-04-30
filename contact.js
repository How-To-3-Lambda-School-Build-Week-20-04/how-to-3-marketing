function myMap() {
    var lambda = {lat: 37.7913557, lng: -122.3994978};
    var mapProp= {
      center: new google.maps.LatLng(37.7913557,-122.3994978),
      zoom:10,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({position: lambda, map: map});
}
    