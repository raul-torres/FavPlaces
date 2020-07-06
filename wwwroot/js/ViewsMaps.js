var map;
var markerMos;
var markerGeo;
var markerAda;
var markerEden;
var markerOld;
var markerTys;
var markerShen;
var markerGreat;
var markerRock;
var markerSilver;
var markerOcco;
var markerFair;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.8951111, lng: -77.0363693 },
    zoom: 11
  });
  

// Icon and Size ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  var iconImg = {
    url: './img/views.png',
    scaledSize : new google.maps.Size(40, 40),
  };


// All the markers ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    markerMos = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.872346, lng: -77.229810}
        });
        // Controlling Info Window
        var infoWindowMos = new google.maps.InfoWindow({
            content:'<h3>Mosaic District</h3>'
        });
        // Marker on Click Listener
        markerMos.addListener('click', function(){
            tBounceMos(),
            infoWindowMos.open(map, markerMos);
        });
    markerGeo = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.905180, lng: -77.062785}
        });
        // Controlling Info Window
        var infoWindowGeo = new google.maps.InfoWindow({
            content:'<h3>Georgetown</h3>'
        });
        // Marker on Click Listener
        markerGeo.addListener('click', function(){
            tBounceGeo(),
            infoWindowGeo.open(map, markerGeo);
        });
    markerAda = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.922665, lng: -77.042669}
        });
        // Controlling Info Window
        var infoWindowAda = new google.maps.InfoWindow({
            content:'<h3>Adams Morgan</h3>'
        });
        // Marker on Click Listener
        markerAda.addListener('click', function(){
            tBounceAda(),
            infoWindowAda.open(map, markerAda);
        });
    markerEden = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.873914, lng: -77.154028}
        });
        // Controlling Info Window
        var infoWindowEden = new google.maps.InfoWindow({
            content:'<h3>Eden Center</h3>'
        });
        // Marker on Click Listener
        markerEden.addListener('click', function(){
            tBounceEden(),
            infoWindowEden.open(map, markerEden);
        });
    markerOld = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.804231, lng: -77.040247}
        });
        // Controlling Info Window
        var infoWindowOld = new google.maps.InfoWindow({
            content:'<h3>Old Town Alexandria</h3>'
        });
        // Marker on Click Listener
        markerOld.addListener('click', function(){
            tBounceOld(),
            infoWindowOld.open(map, markerOld);
        });
    markerTys = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.919869, lng: -77.226170}
        });
        // Controlling Info Window
        var infoWindowTys = new google.maps.InfoWindow({
            content:'<h3>Tysons Corner</h3>'
        });
        // Marker on Click Listener
        markerTys.addListener('click', function(){
            tBounceTys(),
            infoWindowTys.open(map, markerTys);
        });
    markerShen = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.357897, lng: -78.546676}
        });
        // Controlling Info Window
        var infoWindowShen = new google.maps.InfoWindow({
            content:'<h3>Shenandoah National Park</h3>'
        });
        // Marker on Click Listener
        markerShen.addListener('click', function(){
            tBounceShen(),
            infoWindowShen.open(map, markerShen);
        });
    markerGreat = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.996904, lng: -77.254708}
        });
        // Controlling Info Window
        var infoWindowGreat = new google.maps.InfoWindow({
            content:'<h3>Great Falls Park</h3>'
        });
        // Marker on Click Listener
        markerGreat.addListener('click', function(){
            tBounceGreat(),
            infoWindowGreat.open(map, markerGreat);
        });
    markerRock = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.937397, lng: -77.047772}
        });
        // Controlling Info Window
        var infoWindowRock = new google.maps.InfoWindow({
            content:'<h3>Rock Creek Park</h3>'
        });
        // Marker on Click Listener
        markerRock.addListener('click', function(){
            tBounceRock(),
            infoWindowRock.open(map, markerRock);
        });
    markerSilver = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.996165, lng: -77.026226}
        });
        // Controlling Info Window
        var infoWindowSilver = new google.maps.InfoWindow({
            content:'<h3>Silver Spring</h3>'
        });
        // Marker on Click Listener
        markerSilver.addListener('click', function(){
            tBounceSilver(),
            infoWindowSilver.open(map, markerSilver);
        });
    markerOcco = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.684024, lng: -77.260345}
        });
        // Controlling Info Window
        var infoWindowOcco = new google.maps.InfoWindow({
            content:'<h3>Occoquan Historic District</h3>'
        });
        // Marker on Click Listener
        markerOcco.addListener('click', function(){
            tBounceOcco(),
            infoWindowOcco.open(map, markerOcco);
        });
    markerFair = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.846463, lng: -77.303626}
        });
        // Controlling Info Window
        var infoWindowFair = new google.maps.InfoWindow({
            content:'<h3>Fairfax City</h3>'
        });
        // Marker on Click Listener
        markerFair.addListener('click', function(){
            tBounceFair(),
            infoWindowFair.open(map, markerFair);
        });
    


}

var zoomLevel;

// Funtion reseting bounce
function resetBounce() {
  markerMos.setAnimation(null);
  markerGeo.setAnimation(null);
  markerAda.setAnimation(null);
  markerEden.setAnimation(null);
  markerOld.setAnimation(null);
  markerTys.setAnimation(null);
  markerShen.setAnimation(null);
  markerGreat.setAnimation(null);
  markerRock.setAnimation(null);
  markerSilver.setAnimation(null);
  markerOcco.setAnimation(null);
  markerFair.setAnimation(null);
}
// Function Controlling Smooth Zoom
function smoothZoom (map, max, cnt) {
  if (cnt >= max) {
      return;
  }
  else {
      z = google.maps.event.addListener(map, 'zoom_changed', function(event){
          google.maps.event.removeListener(z);
          smoothZoom(map, max, cnt + 1);
      });
      setTimeout(function(){map.setZoom(cnt)}, 80);
  }
};

function tBounceMos() {
  markerMos.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.setCenter(markerMos.getPosition());
    smoothZoom(map, 17, map.getZoom());
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerMos.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  }
};
function tBounceGeo() {
  markerGeo.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.setCenter(markerGeo.getPosition());
    smoothZoom(map, 17, map.getZoom());
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerGeo.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  }
};
function tBounceAda() {
  markerAda.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.setCenter(markerAda.getPosition());
    smoothZoom(map, 17, map.getZoom());
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerAda.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  }
};
function tBounceEden() {
  markerEden.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.setCenter(markerEden.getPosition());
    smoothZoom(map, 17, map.getZoom());
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerEden.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  }
};
function tBounceOld() {
  markerOld.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.setCenter(markerOld.getPosition());
    smoothZoom(map, 17, map.getZoom());
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerOld.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  }
};
function tBounceTys() {
  markerTys.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.setCenter(markerTys.getPosition());
    smoothZoom(map, 17, map.getZoom());
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerTys.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  }
};
function tBounceShen() {
  markerShen.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.setCenter(markerShen.getPosition());
    smoothZoom(map, 17, map.getZoom());
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerShen.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  }
};
function tBounceGreat() {
  markerGreat.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.setCenter(markerGreat.getPosition());
    smoothZoom(map, 17, map.getZoom());
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerGreat.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  }
};
function tBounceRock() {
  markerRock.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.setCenter(markerRock.getPosition());
    smoothZoom(map, 17, map.getZoom());
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerRock.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  }
};
function tBounceSilver() {
  markerSilver.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.setCenter(markerSilver.getPosition());
    smoothZoom(map, 17, map.getZoom());
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerSilver.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  }
};
function tBounceOcco() {
  markerOcco.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.setCenter(markerOcco.getPosition());
    smoothZoom(map, 17, map.getZoom());
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerOcco.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  }
};
function tBounceFair() {
  markerFair.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.setCenter(markerFair.getPosition());
    smoothZoom(map, 17, map.getZoom());
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerFair.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  }
};




