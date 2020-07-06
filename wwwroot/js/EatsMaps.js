var marker;
var allMarkers;
var markerBlock;
var markerFirst;
var markerFoundTy;
var markerSuper;
var markerSpice;
var markerRavi;
var markerKeren;
var markerVegan;
var markerMagnolia;
var markerSocial;
var markerTeasN;
var markerBuredo;
var markerHotN;
var markerKindred;
var markerHabanero;
var markerPlacita;
var markerErcilias;
var markerAmstradam;
var markerJenis;
var markerLauriel;
var markerViet;
var markerIron;
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: 38.8951111, lng: -77.0363693},
    zoom: 11
  });

  var iconImg = {
    url: './img/eats.png',
    scaledSize : new google.maps.Size(30, 30),
  };

        // All the markers
        markerBlock = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.831371, lng: -77.188410}
            });
            // Controlling Info Window
            var infoWindowBlock = new google.maps.InfoWindow({
                content:'<h3>The Block</h3>'
            });
            // Marker on Click Listener
            markerBlock.addListener('click', function(){
                tBounceBlock(),
                infoWindowBlock.open(map, markerBlock);
            });
        markerFirst = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.842762, lng: -77.274180}
            });
            // Controlling Info Window
            var infoWindowFirst = new google.maps.InfoWindow({
                content:'<h3>First Watch</h3>'
            });
            // Marker on Click Listener
            markerFirst.addListener('click', function(){
                tBounceFirst(),
                infoWindowFirst.open(map, markerFirst);
            });
        markerFoundTy = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.92253, lng: -77.2225676}
            });
            // Controlling Info Window
            var infoWindowFoundTy = new google.maps.InfoWindow({
                content:'<h3>Founding Farmers</h3>'
            });
            // Marker on Click Listener
            markerFoundTy.addListener('click', function(){
                tBounceFoundTy(),
                infoWindowFoundTy.open(map, markerFoundTy);
            });
        markerSuper = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.920608, lng: -77.235145}
            });
            // Controlling Info Window
            var infoWindowSuper = new google.maps.InfoWindow({
                content:'<h3>Super Chicken</h3>'
            });
            // Marker on Click Listener
            markerSuper.addListener('click', function(){
                tBounceSuper(),
                infoWindowSuper.open(map, markerSuper);
            });
        markerSpice = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.881468, lng: -77.230530}
            });
            // Controlling Info Window
            var infoWindowSpice = new google.maps.InfoWindow({
                content:'<h3>Spice 6</h3>'
            });
            // Marker on Click Listener
            markerSpice.addListener('click', function(){
                tBounceSpice(),
                infoWindowSpice.open(map, markerSpice);
            });
        markerRavi = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.8742196, lng: -77.1051734}
            });
            // Controlling Info Window
            var infoWindowRavi = new google.maps.InfoWindow({
                content:'<h3>Ravi Kabob</h3>'
            });
            // Marker on Click Listener
            markerRavi.addListener('click', function(){
                tBounceRavi(),
                infoWindowRavi.open(map, markerRavi);
            });
        markerKeren = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.916848, lng: -77.041259}
            });  
            // Controlling Info Window
            var infoWindowKeren = new google.maps.InfoWindow({
                content:'<h3>Keren</h3>'
            });
            // Marker on Click Listener
            markerKeren.addListener('click', function(){
                tBounceKeren(),
                infoWindowKeren.open(map, markerKeren);
            });
        markerVegan = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.991431, lng: -76.933943}
            });  
            // Controlling Info Window
            var infoWindowVegan = new google.maps.InfoWindow({
                content:'<h3>New Vegan</h3>'
            });
            // Marker on Click Listener
            markerVegan.addListener('click', function(){
                tBounceVegan(),
                infoWindowVegan.open(map, markerVegan);
            });
        markerMagnolia = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.895382, lng: -77.273326}
            });  
            // Controlling Info Window
            var infoWindowMagnolia = new google.maps.InfoWindow({
                content:'<h3>Magnolia Cafe</h3>'
            });
            // Marker on Click Listener
            markerMagnolia.addListener('click', function(){
                tBounceMagnolia(),
                infoWindowMagnolia.open(map, markerMagnolia);
            });
        markerSocial = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.896801, lng:  -77.270470}
            });  
            // Controlling Info Window
            var infoWindowSocial = new google.maps.InfoWindow({
                content:'<h3>Social Burger</h3>'
            });
            // Marker on Click Listener
            markerSocial.addListener('click', function(){
                tBounceSocial(),
                infoWindowSocial.open(map, markerSocial);
            });
        markerTeasN = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.914065, lng: -77.222782}
            });  
            // Controlling Info Window
            var infoWindowTeasN = new google.maps.InfoWindow({
                content:'<h3>Teas N You</h3>'
            });
            // Marker on Click Listener
            markerTeasN.addListener('click', function(){
                tBounceTeasN(),
                infoWindowTeasN.open(map, markerTeasN);
            });
        markerBuredo = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.901012, lng: -77.031543}
            });  
            // Controlling Info Window
            var infoWindowBuredo = new google.maps.InfoWindow({
                content:'<h3>Buredo</h3>'
            });
            // Marker on Click Listener
            markerBuredo.addListener('click', function(){
                tBounceBuredo(),
                infoWindowBuredo.open(map, markerBuredo);
            });
        markerHotN = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.925028, lng: -77.052106}
            });
            // Controlling Info Window
            var infoWindowHotN = new google.maps.InfoWindow({
                content:'<h3>Hot N Juicy</h3>'
            });
            // Marker on Click Listener
            markerHotN.addListener('click', function(){
                tBounceHotN(),
                infoWindowHotN.open(map, markerHotN);
            });  
        markerKindred = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.885197, lng: -77.165354}
            }); 
            // Controlling Info Window
            var infoWindowKindred = new google.maps.InfoWindow({
                content:'<h3>Cafe Kindred</h3>'
            });
            // Marker on Click Listener
            markerKindred.addListener('click', function(){
                tBounceKindred(),
                infoWindowKindred.open(map, markerKindred);
            });
        markerHabanero = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.937546, lng:  -77.032949}
            });  
            // Controlling Info Window
            var infoWindowHabanero = new google.maps.InfoWindow({
                content:'<h3>Taqueria Habanero</h3>'
            });
            // Marker on Click Listener
            markerHabanero.addListener('click', function(){
                tBounceHabanero(),
                infoWindowHabanero.open(map, markerHabanero);
            });
        markerPlacita = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.950269, lng:  -76.926033}
            });
            // Controlling Info Window
            var infoWindowPlacita = new google.maps.InfoWindow({
                content:'<h3>La Placita</h3>'
            });
            // Marker on Click Listener
            markerPlacita.addListener('click', function(){
                tBouncePlacita(),
                infoWindowPlacita.open(map, markerPlacita);
            });  
        markerErcilias = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.928614, lng: -77.037539}
            }); 
            // Controlling Info Window
            var infoWindowErcilias = new google.maps.InfoWindow({
                content:'<h3>Ercilias</h3>'
            });
            // Marker on Click Listener
            markerErcilias.addListener('click', function(){
                tBounceErcilias(),
                infoWindowErcilias.open(map, markerErcilias);
            }); 
        markerAmstradam = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.915136, lng: -77.032177}
            });
            // Controlling Info Window
            var infoWindowAmstradam = new google.maps.InfoWindow({
                content:'<h3>Amsterdam Falafel</h3>'
            });
            // Marker on Click Listener
            markerAmstradam.addListener('click', function(){
                tBounceAmstradam(),
                infoWindowAmstradam.open(map, markerAmstradam);
            });  
        markerJenis = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.916381, lng: -77.031654}
            });
            // Controlling Info Window
            var infoWindowJenis = new google.maps.InfoWindow({
                content:'<h3>Jeni"s Ice Cream</h3>'
            });
            // Marker on Click Listener
            markerJenis.addListener('click', function(){
                tBounceJenis(),
                infoWindowJenis.open(map, markerJenis);
            }); 
        markerLauriel = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.915334, lng: -77.041479}
            });  
            // Controlling Info Window
            var infoWindowLauriel = new google.maps.InfoWindow({
                content:'<h3>Lauriol Plaza</h3>'
            });
            // Marker on Click Listener
            markerLauriel.addListener('click', function(){
                tBounceLauriel(),
                infoWindowLauriel.open(map, markerLauriel);
            });
        markerViet = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 38.935109, lng:  -77.032429}
            });
            // Controlling Info Window
            var infoWindowViet = new google.maps.InfoWindow({
                content:'<h3>Pho Viet</h3>'
            });
            // Marker on Click Listener
            markerViet.addListener('click', function(){
                tBounceViet(),
                infoWindowViet.open(map, markerViet);
            });   
        markerIron = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            icon: iconImg,
            position: {lat: 39.072626, lng:  -77.132978}
            }); 
            // Controlling Info Window
            var infoWindowIron = new google.maps.InfoWindow({
                content:'<h3>Iron Age</h3>'
            });
            // Marker on Click Listener
            markerIron.addListener('click', function(){
                tBounceIron(),
                infoWindowIron.open(map, markerIron);
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
        markerBlock.setAnimation(null);
        markerFirst.setAnimation(null);
        markerFoundTy.setAnimation(null);
        markerSuper.setAnimation(null);
        markerSpice.setAnimation(null);
        markerRavi.setAnimation(null);
        markerKeren.setAnimation(null);
        markerVegan.setAnimation(null);
        markerMagnolia.setAnimation(null);
        markerSocial.setAnimation(null);
        markerTeasN.setAnimation(null);
        markerBuredo.setAnimation(null);
        markerHotN.setAnimation(null);
        markerKindred.setAnimation(null);
        markerHabanero.setAnimation(null);
        markerPlacita.setAnimation(null);
        markerErcilias.setAnimation(null);
        markerAmstradam.setAnimation(null);
        markerJenis.setAnimation(null);
        markerLauriel.setAnimation(null);
        markerViet.setAnimation(null);
        markerIron.setAnimation(null);
      }
      
      function tBounceBlock() {
        markerBlock.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerBlock.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerBlock.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceFirst() {
        markerFirst.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerFirst.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerFirst.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceFoundTy() {
        markerFoundTy.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerFoundTy.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerFoundTy.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceSuper() {
        markerSuper.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerSuper.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerSuper.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceSpice() {
        markerSpice.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerSpice.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerSpice.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceRavi() {
        markerRavi.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerRavi.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerRavi.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceKeren() {
        markerKeren.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerKeren.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerKeren.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceVegan() {
        markerVegan.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerVegan.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerVegan.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceMagnolia() {
        markerMagnolia.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerMagnolia.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerMagnolia.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceSocial() {
        markerSocial.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerSocial.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerSocial.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceTeasN() {
        markerTeasN.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerTeasN.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerTeasN.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceBuredo() {
        markerBuredo.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerBuredo.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerBuredo.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceHotN() {
        markerHotN.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerHotN.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerHotN.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceKindred() {
        markerKindred.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerKindred.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerKindred.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceHabanero() {
        markerHabanero.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerHabanero.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerHabanero.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBouncePlacita() {
        markerPlacita.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerPlacita.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerPlacita.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceErcilias() {
        markerErcilias.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerErcilias.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerErcilias.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceAmstradam() {
        markerAmstradam.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerAmstradam.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerAmstradam.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceJenis() {
        markerJenis.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerJenis.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerJenis.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceLauriel() {
        markerLauriel.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerLauriel.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerLauriel.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceViet() {
        markerViet.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerViet.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerViet.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };

      function tBounceIron() {
        markerIron.setAnimation(google.maps.Animation.BOUNCE);
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.setCenter(markerIron.getPosition());
          smoothZoom(map, 17, map.getZoom());
          map.setMapTypeId('satellite');
        } else {
          map.setCenter(markerIron.getPosition());
          map.setZoom(11);
          map.setMapTypeId('roadmap');
          setTimeout(function () {
            smoothZoom(map, 17, map.getZoom());
            map.setMapTypeId('satellite');
          }, 1000);
        }
      };
      