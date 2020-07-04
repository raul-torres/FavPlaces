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

      
      function tBounceBlock() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerBlock.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        }
        if (markerBlock.getAnimation() !== null) {
            markerBlock.setAnimation(null);
        } else {
            markerBlock.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceFirst() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerFirst.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerFirst.getAnimation() !== null) {
            markerFirst.setAnimation(null);
        } else {
            markerFirst.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceFoundTy() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerFoundTy.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerFoundTy.getAnimation() !== null) {
          markerFoundTy.setAnimation(null);
        } else {
          markerFoundTy.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceSuper() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerSuper.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerSuper.getAnimation() !== null) {
          markerSuper.setAnimation(null);
        } else {
          markerSuper.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceSpice() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerSpice.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerSpice.getAnimation() !== null) {
          markerSpice.setAnimation(null);
        } else {
          markerSpice.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceRavi() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerRavi.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerRavi.getAnimation() !== null) {
          markerRavi.setAnimation(null);
        } else {
          markerRavi.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceKeren() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerKeren.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerKeren.getAnimation() !== null) {
          markerKeren.setAnimation(null);
        } else {
          markerKeren.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceVegan() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerVegan.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerVegan.getAnimation() !== null) {
          markerVegan.setAnimation(null);
        } else {
          markerVegan.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceMagnolia() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerMagnolia.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerMagnolia.getAnimation() !== null) {
          markerMagnolia.setAnimation(null);
        } else {
          markerMagnolia.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceSocial() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerSocial.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerSocial.getAnimation() !== null) {
          markerSocial.setAnimation(null);
        } else {
          markerSocial.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceTeasN() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerTeasN.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerTeasN.getAnimation() !== null) {
          markerTeasN.setAnimation(null);
        } else {
          markerTeasN.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceBuredo() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerBuredo.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerBuredo.getAnimation() !== null) {
          markerBuredo.setAnimation(null);
        } else {
          markerBuredo.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceHotN() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerHotN.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerHotN.getAnimation() !== null) {
          markerHotN.setAnimation(null);
        } else {
          markerHotN.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceKindred() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerKindred.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerKindred.getAnimation() !== null) {
          markerKindred.setAnimation(null);
        } else {
          markerKindred.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceHabanero() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerHabanero.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerHabanero.getAnimation() !== null) {
          markerHabanero.setAnimation(null);
        } else {
          markerHabanero.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBouncePlacita() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerPlacita.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerPlacita.getAnimation() !== null) {
          markerPlacita.setAnimation(null);
        } else {
          markerPlacita.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceErcilias() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerErcilias.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerErcilias.getAnimation() !== null) {
          markerErcilias.setAnimation(null);
        } else {
          markerErcilias.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceAmstradam() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerAmstradam.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerAmstradam.getAnimation() !== null) {
          markerAmstradam.setAnimation(null);
        } else {
          markerAmstradam.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceJenis() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerJenis.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerJenis.getAnimation() !== null) {
          markerJenis.setAnimation(null);
        } else {
          markerJenis.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceLauriel() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerLauriel.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerLauriel.getAnimation() !== null) {
          markerLauriel.setAnimation(null);
        } else {
          markerLauriel.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceViet() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerViet.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerViet.getAnimation() !== null) {
          markerViet.setAnimation(null);
        } else {
          markerViet.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      function tBounceIron() {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
          map.panTo(markerIron.getPosition());
          map.setZoom(18);
          map.setMapTypeId('satellite');
        } else {
          var center = new google.maps.LatLng(38.8951111, -77.0363693);
          map.setCenter(center);
          map.setZoom(11);
          map.setMapTypeId('roadmap');      
        };
        if (markerIron.getAnimation() !== null) {
          markerIron.setAnimation(null);
        } else {
          markerIron.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
      