var map;
var markerArtec;
var markerArbo;
var markerHirsh;
var markerCath;
var markerSky;
var markerIfly;
var markerApe;
var markerAir;
var markerMansion;
var markerCrum;
var markerRen;
var markerAuto;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.8951111, lng: -77.0363693 },
    zoom: 11
  });
  
  var iconImg = {
    url: './img/light.png',
    scaledSize : new google.maps.Size(40, 40),
  };

// All the markers
  markerArtec = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    icon: iconImg,
    position: {lat: 38.884044, lng: -77.029124}
    });
    // Controlling Info Window
    var infoWindowArtec = new google.maps.InfoWindow({
        content:'<h3>ARTECHOUSE</h3>'
    });
    // Marker on Click Listener
    markerArtec.addListener('click', function(){
        tBounceArtec(),
        infoWindowArtec.open(map, markerArtec);
    });

    markerArbo = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      icon: iconImg,
      position: {lat: 38.912122, lng: -76.965800}
      });
      // Controlling Info Window
      var infoWindowArbo = new google.maps.InfoWindow({
          content:'<h3>National Arboretum</h3>'
      });
      // Marker on Click Listener
      markerArbo.addListener('click', function(){
          tBounceArbo(),
          infoWindowArbo.open(map, markerArbo);
      });

    markerHirsh = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      icon: iconImg,
      position: {lat: 38.888177, lng: -77.022936}
      });
      // Controlling Info Window
      var infoWindowHirsh = new google.maps.InfoWindow({
          content:'<h3>Hirshhorn Museum</h3>'
      });
      // Marker on Click Listener
      markerHirsh.addListener('click', function(){
          tBounceHirsh(),
          infoWindowHirsh.open(map, markerHirsh);
      });

      markerCath = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.930578, lng: -77.070759}
        });
        // Controlling Info Window
        var infoWindowCath = new google.maps.InfoWindow({
            content:'<h3>Washington National Cathedral</h3>'
        });
        // Marker on Click Listener
        markerCath.addListener('click', function(){
            tBounceCath(),
            infoWindowCath.open(map, markerCath);
        });
      // markerCath = new google.maps.Marker({
      //   map: map,
      //   animation: google.maps.Animation.DROP,
      //   icon: iconImg,
      //   position: {lat: 38.930578, lng: -77.070759}
      //   });
      //   // Controlling Info Window
      //   var infoWindowCath = new google.maps.InfoWindow({
      //       content:'<h3>Washington National Cathedral</h3>'
      //   });
      //   // Marker on Click Listener
      //   markerCath.addListener('click', function(){
      //       tBounceCath(),
      //       infoWindowCath.open(map, markerCath);
      //   });
      markerSky = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.805673, lng: -77.215449}
        });
        // Controlling Info Window
        var infoWindowSky = new google.maps.InfoWindow({
            content:'<h3>Sky Zone</h3>'
        });
        // Marker on Click Listener
        markerSky.addListener('click', function(){
            tBounceSky(),
            infoWindowSky.open(map, markerSky);
        });
      markerIfly = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 39.053689, lng: -77.446929}
        });
        // Controlling Info Window
        var infoWindowIfly = new google.maps.InfoWindow({
            content:'<h3>iFLY</h3>'
        });
        // Marker on Click Listener
        markerIfly.addListener('click', function(){
            tBounceIfly(),
            infoWindowIfly.open(map, markerIfly);
        });
      markerApe = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.748281, lng: -77.276239}
        });
        // Controlling Info Window
        var infoWindowApe = new google.maps.InfoWindow({
            content:'<h3>Go Ape Zipline & Adventure Park</h3>'
        });
        // Marker on Click Listener
        markerApe.addListener('click', function(){
            tBounceApe(),
            infoWindowApe.open(map, markerApe);
        });
      markerAir = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.888154, lng: -77.019862}
        });
        // Controlling Info Window
        var infoWindowAir = new google.maps.InfoWindow({
            content:'<h3>Smithsonian Air and Space Museum</h3>'
        });
        // Marker on Click Listener
        markerAir.addListener('click', function(){
            tBounceAir(),
            infoWindowAir.open(map, markerAir);
        });
      markerMansion = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.908446, lng: -77.045758}
        });
        // Controlling Info Window
        var infoWindowMansion = new google.maps.InfoWindow({
            content:'<h3>The Mansion on O St</h3>'
        });
        // Marker on Click Listener
        markerMansion.addListener('click', function(){
            tBounceMansion(),
            infoWindowMansion.open(map, markerMansion);
        });
      markerCrum = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.907992, lng: -77.064116}
        });
        // Controlling Info Window
        var infoWindowCrum = new google.maps.InfoWindow({
            content:'<h3>Crumbs & Whiskers</h3>'
        });
        // Marker on Click Listener
        markerCrum.addListener('click', function(){
            tBounceCrum(),
            infoWindowCrum.open(map, markerCrum);
        });
      markerRen = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 38.899113, lng: -77.039058}
        });
        // Controlling Info Window
        var infoWindowRen = new google.maps.InfoWindow({
            content:'<h3>Renwick Gallery of Art</h3>'
        });
        // Marker on Click Listener
        markerRen.addListener('click', function(){
            tBounceRen(),
            infoWindowRen.open(map, markerRen);
        });

      markerAuto = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: iconImg,
        position: {lat: 39.021348, lng: -77.427091}
        });
        // Controlling Info Window
        var infoWindowAuto = new google.maps.InfoWindow({
            content:'<h3>Autobahn Indoor Speedway</h3>'
        });
        // Marker on Click Listener
        markerAuto.addListener('click', function(){
            tBounceAuto(),
            infoWindowAuto.open(map, markerAuto);
        });
      
}

var zoomLevel;

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

// Function for reseting all of the bounce Animation
function resetBounce() {
  markerArtec.setAnimation(null);
  markerArbo.setAnimation(null);
  markerHirsh.setAnimation(null);
  markerCath.setAnimation(null);
  markerSky.setAnimation(null);
  markerIfly.setAnimation(null);
  markerApe.setAnimation(null);
  markerAir.setAnimation(null);
  markerMansion.setAnimation(null);
  markerCrum.setAnimation(null);
  markerRen.setAnimation(null);
  markerAuto.setAnimation(null);
}

function tBounceArtec() {
  markerArtec.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.setCenter(markerArtec.getPosition());
    smoothZoom(map, 17, map.getZoom());
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerArtec.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  }
};

function tBounceSky() {
  markerSky.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerSky.getPosition());
    map.setZoom(17);
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerSky.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');
    
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  };
};
function tBounceArbo() {
  markerArbo.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerArbo.getPosition());
    map.setZoom(17);
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerArbo.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  };
};
function tBounceHirsh() {
  markerHirsh.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerHirsh.getPosition());
    map.setZoom(17);
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerHirsh.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  };
};
function tBounceCath() {
  markerCath.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerCath.getPosition());
    map.setZoom(17);
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerCath.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  };
};
function tBounceIfly() {
  markerIfly.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerIfly.getPosition());
    map.setZoom(17);
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerIfly.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  };
};
function tBounceApe() {
  markerApe.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerApe.getPosition());
    map.setZoom(17);
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerApe.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  };
};
function tBounceAir() {
  markerAir.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerAir.getPosition());
    map.setZoom(17);
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerAir.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  };
};
function tBounceMansion() {
  markerMansion.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerMansion.getPosition());
    map.setZoom(17);
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerMansion.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  };
};
function tBounceCrum() {
  markerCrum.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerCrum.getPosition());
    map.setZoom(17);
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerCrum.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  };
};
function tBounceRen() {
  markerRen.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerRen.getPosition());
    map.setZoom(17);
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerRen.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  };
};
function tBounceAuto() {
  markerAuto.setAnimation(google.maps.Animation.BOUNCE);
  zoomLevel = map.getZoom();
  if (zoomLevel <= 11) {
    map.panTo(markerAuto.getPosition());
    map.setZoom(17);
    map.setMapTypeId('satellite');
  } else {
    map.setCenter(markerAuto.getPosition());
    map.setZoom(11);
    map.setMapTypeId('roadmap');      
    setTimeout(function () {
      smoothZoom(map, 17, map.getZoom());
      map.setMapTypeId('satellite');
    }, 2000);
  };
};


