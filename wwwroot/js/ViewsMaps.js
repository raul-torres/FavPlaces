var map;


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

// Function Controlling Bounce and Zoom In ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function tBounceMos() {
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerMos.getPosition());
    map.setZoom(16);
    map.setMapTypeId('satellite');
  } else {
    var center = new google.maps.LatLng(38.8951111, -77.0363693);
    map.setCenter(center);
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
  };
  if (markerMos.getAnimation() !== null) {
    markerMos.setAnimation(null);
  } else {
    markerMos.setAnimation(google.maps.Animation.BOUNCE);
  }
};
function tBounceGeo() {
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerGeo.getPosition());
    map.setZoom(16);
    map.setMapTypeId('satellite');
  } else {
    var center = new google.maps.LatLng(38.8951111, -77.0363693);
    map.setCenter(center);
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
  };
  if (markerGeo.getAnimation() !== null) {
    markerGeo.setAnimation(null);
  } else {
    markerGeo.setAnimation(google.maps.Animation.BOUNCE);
  }
};
function tBounceAda() {
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerAda.getPosition());
    map.setZoom(16);
    map.setMapTypeId('satellite');
  } else {
    var center = new google.maps.LatLng(38.8951111, -77.0363693);
    map.setCenter(center);
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
  };
  if (markerAda.getAnimation() !== null) {
    markerAda.setAnimation(null);
  } else {
    markerAda.setAnimation(google.maps.Animation.BOUNCE);
  }
};
function tBounceEden() {
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerEden.getPosition());
    map.setZoom(16);
    map.setMapTypeId('satellite');
  } else {
    var center = new google.maps.LatLng(38.8951111, -77.0363693);
    map.setCenter(center);
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
  };
  if (markerEden.getAnimation() !== null) {
    markerEden.setAnimation(null);
  } else {
    markerEden.setAnimation(google.maps.Animation.BOUNCE);
  }
};
function tBounceOld() {
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerOld.getPosition());
    map.setZoom(16);
    map.setMapTypeId('satellite');
  } else {
    var center = new google.maps.LatLng(38.8951111, -77.0363693);
    map.setCenter(center);
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
  };
  if (markerOld.getAnimation() !== null) {
    markerOld.setAnimation(null);
  } else {
    markerOld.setAnimation(google.maps.Animation.BOUNCE);
  }
};
function tBounceTys() {
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerTys.getPosition());
    map.setZoom(16);
    map.setMapTypeId('satellite');
  } else {
    var center = new google.maps.LatLng(38.8951111, -77.0363693);
    map.setCenter(center);
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
  };
  if (markerTys.getAnimation() !== null) {
    markerTys.setAnimation(null);
  } else {
    markerTys.setAnimation(google.maps.Animation.BOUNCE);
  }
};
function tBounceShen() {
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerShen.getPosition());
    map.setZoom(16);
    map.setMapTypeId('satellite');
  } else {
    var center = new google.maps.LatLng(38.8951111, -77.0363693);
    map.setCenter(center);
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
  };
  if (markerShen.getAnimation() !== null) {
    markerShen.setAnimation(null);
  } else {
    markerShen.setAnimation(google.maps.Animation.BOUNCE);
  }
};
function tBounceGreat() {
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerGreat.getPosition());
    map.setZoom(16);
    map.setMapTypeId('satellite');
  } else {
    var center = new google.maps.LatLng(38.8951111, -77.0363693);
    map.setCenter(center);
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
  };
  if (markerGreat.getAnimation() !== null) {
    markerGreat.setAnimation(null);
  } else {
    markerGreat.setAnimation(google.maps.Animation.BOUNCE);
  }
};
function tBounceRock() {
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerRock.getPosition());
    map.setZoom(16);
    map.setMapTypeId('satellite');
  } else {
    var center = new google.maps.LatLng(38.8951111, -77.0363693);
    map.setCenter(center);
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
  };
  if (markerRock.getAnimation() !== null) {
    markerRock.setAnimation(null);
  } else {
    markerRock.setAnimation(google.maps.Animation.BOUNCE);
  }
};
function tBounceSilver() {
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerSilver.getPosition());
    map.setZoom(16);
    map.setMapTypeId('satellite');
  } else {
    var center = new google.maps.LatLng(38.8951111, -77.0363693);
    map.setCenter(center);
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
  };
  if (markerSilver.getAnimation() !== null) {
    markerSilver.setAnimation(null);
  } else {
    markerSilver.setAnimation(google.maps.Animation.BOUNCE);
  }
};
function tBounceOcco() {
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerOcco.getPosition());
    map.setZoom(16);
    map.setMapTypeId('satellite');
  } else {
    var center = new google.maps.LatLng(38.8951111, -77.0363693);
    map.setCenter(center);
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
  };
  if (markerOcco.getAnimation() !== null) {
    markerOcco.setAnimation(null);
  } else {
    markerOcco.setAnimation(google.maps.Animation.BOUNCE);
  }
};
function tBounceFair() {
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerFair.getPosition());
    map.setZoom(16);
    map.setMapTypeId('satellite');
  } else {
    var center = new google.maps.LatLng(38.8951111, -77.0363693);
    map.setCenter(center);
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
  };
  if (markerFair.getAnimation() !== null) {
    markerFair.setAnimation(null);
  } else {
    markerFair.setAnimation(google.maps.Animation.BOUNCE);
  }
};




