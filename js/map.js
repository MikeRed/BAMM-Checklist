/// *
// * HotMama Geolocation

var map;
var infoWindow;

var markersData = [
   {
      lat: 48.459263,	
      lng: -123.376722,
	  
      name: "Hot Mama Fit - Headquater Saanich/Victoria",
      address1: "Click <a href='http://hotmamafit.com/saanich/find-us'>HERE</a> to visit our website!", 
      address2: "✉ info@hotmamafit.com",
      postalCode: "✆ 250-686-4346"
   },
   {
      lat: 48.372811,	
      lng: -123.733413,
      name: "Hot Mama Fit - Sooke",
      address1:"Click <a href='http://hotmamafit.com/sooke/find-us'>HERE</a> to visit our website!",
      address2: "✉ jill@hotmamafit.com",
      postalCode: "✆ 250-686-3931" 
   },
   {
      lat: 48.428756,	
      lng: -123.488893,
      name: "Hot Mama Fit - Westshore",
      address1:"Click <a href='http://hotmamafit.com/westshore/find-us'>HERE</a> to visit our website!",
      address2: "✉ jen@hotmamafit.com",
      postalCode: "✆ 250-686-4278" 
   },
   {
      lat: 42.314937,	
      lng: -83.036363,
      name: "Hot Mama Fit - Windsor",
      address1:"Click <a href='http://hotmamafit.com/ontario/windsor/find-us'>HERE</a> to visit our website!",
      address2: "✉ cathy@hotmamafit.com",
      postalCode: "✆ 519-817-6262" 
   },
   {
      lat: 53.542785,	
      lng: -113.903367,
      name: "Hot Mama Fit - Spruce Grove",
      address1:"Click <a href='http://hotmamafit.com/spruce-grove'>HERE</a> to visit our website!!",
      address2: "✉ amanda@hotmamafit.com",
      postalCode: "✆ 587-988-0222" 
   },
   {
      lat: 53.527931,	
      lng: -114.001928,
      name: "Hot Mama Fit - Stony Plain",
      address1:"Click <a href='http://hotmamafit.com/spruce-grove'>HERE</a> to visit our website!",
      address2: "✉ amanda@hotmamafit.com",
      postalCode: "✆ 587-988-0222"
   },
   {
      lat: 53.541208,	
      lng: -113.295736,
      name: "Hot Mama Fit - Sherwood Park",
      address1:"Click <a href='http://hotmamafit.com/sherwood-park'>HERE</a> to visit our website!",
      address2: "✉ ashley@hotmamafit.com",
      postalCode: "✆ 780-819-0900" 
   },
    {
      lat: 51.08572,	
      lng: -114.149323,
      name: "Hot Mama Fit - Calgary NW",
      address1:"Click <a href='http://hotmamafit.com/calgary/northwest/find-us'>HERE</a> to visit our website!",
      address2: "✉ julie@hotmamafit.com",
      postalCode: "✆ 403-990-8145" 
   },
    {
      lat: 50.948356,	
      lng: -114.00032,
      name: "Hot Mama Fit - Calgary SE",
      address1:"Click <a href='http://hotmamafit.com/calgary-se'>HERE</a> to visit our website!",
      address2: "✉ lindsey@hotmamafit.com",
      postalCode: "✆ 403-862-6474" 
   },
    {
      lat: 53.630475,	
      lng: -113.625642,
      name: "Hot Mama Fit - St. Albert",
      address1:"Click <a href='http://hotmamafit.com/stalbert/find-us'>HERE</a> to visit our website!",
      address2: "✉ tannele@hotmamafit.com",
      postalCode: "✆ 587-986-6793" 
   },
    {
      lat: 53.455701,	
      lng: -113.425598,
      name: "Hot Mama Fit - Edmonton SE",
      address1:"Click <a href='http://hotmamafit.com/edmonton/southeast/'>HERE</a> to visit our website!",
      address2: "✉ tonya@hotmamafit.com",
      postalCode: "✆ 780-298-5888" 
   },
   {
      lat: 51.01894,	
      lng: -114.134081,
      name: "Hot Mama Fit - Calgary West Sarcee",
      address1:"Click <a href='http://hotmamafit.com/calgary-west-sarcee'>HERE</a> to visit our website!",
      address2: "✉ tara@hotmamafit.com",
      postalCode: "✆ 403-830-0056" 
   },
   {
      lat: 52.250807,	
      lng: -113.812866,
      name: "Hot Mama Fit - Red Deer - South",
      address1:"Click <a href='http://hotmamafit.com/red-deer-south'>HERE</a> to visit our website!",
      address2: "✉ marie@hotmamafit.com",
      postalCode: "✆ 403-999-3583" 
   },
   {
      lat: 53.784912,	
      lng: -113.644877,
      name: "Hot Mama Fit - Morinville/Sturgeon County",
      address1:"Click <a href='http://hotmamafit.com/morinville/find-us/'>HERE</a> to visit our website!",
      address2: "✉ amy@hotmamafit.com",
      postalCode: "✆ 403-999-3583" 
   },
   {
      lat: 51.291737,	
      lng: -114.025211,
      name: "Hot Mama Fit - Airdrie West",
      address1:"Click <a href='http://hotmamafit.com/airdrie/west/find-us/'>HERE</a> to visit our website!",
      address2: "",
      postalCode: "" 
   },
   {
      lat: 53.454825,	
      lng: -113.58284,
      name: "Hot Mama Fit - Edmonton SW",
      address1:"Click <a href='http://hotmamafit.com/edmonton/southwest/'>HERE</a> to visit our website!",
      address2: "✉ trish@hotmamafit.com",
      postalCode: "" 
   },
   {
      lat: 50.974038,	
      lng: -114.071475,
      name: "Hot Mama Fit - Calgary/Macleod SW",
      address1:"Click <a href='http://hotmamafit.com/calgary-macleod-sw'>HERE</a> to visit our website!",
      address2: "✉ amy.k@hotmamafit.com",
      postalCode: "✆ 403-809-7901" 
   },
   {
      lat: 52.30762,	
      lng: -114.097995,
      name: "Hot Mama Fit - Sylvan Lake",
      address1:"Click <a href='http://hotmamafit.com/sylvan-lake'>HERE</a> to visit our website!",
      address2: "✉ carla.e@hotmamafit.com",
      postalCode: "✆ 403-597-7644"
   },
   {
      lat: 51.178363,	
      lng: -115.570769,
      name: "Hot Mama Fit - Canmore/Banff",
      address1:"Click <a href='http://hotmamafit.com/canmorebanff'>HERE</a> to visit our website!",
      address2: "✉ taryn@hotmamafit.com",
      postalCode: "✆ 403-852-2111" 
   },
   {
      lat: 48.842857,	
      lng: -123.704401,
      name: "Hot Mama Fit - North Cowichan",
      address1:"Click <a href='http://hotmamafit.com/saanich/find-us'>HERE</a> to visit our website!",
      address2: "✉ info@hotmamafit.com",
      postalCode: "✆ 250-686-4346" 
   },
   {
      lat: 52.379343,	
      lng: -114.918288,
      name: "Hot Mama Fit - Rocky Mountain House",
      address1:"Click <a href='http://hotmamafit.com/saanich/find-us'>HERE</a> to visit our website!",
      address2: "✉ info@hotmamafit.com",
      postalCode: "✆ 250-686-4346" 
   },
   {
      lat: 51.161912,	
      lng: -114.14586,
      name: "Hot Mama Fit - Calgary Symons Valley",
      address1:"Click <a href='http://hotmamafit.com/saanich/find-us'>HERE</a> to visit our website!",
      address2: "✉ info@hotmamafit.com",
      postalCode: "✆ 250-686-4346" 
   },
   {
      lat: 53.25841,	
      lng: -113.549194,
      name: "Hot Mama Fit - Leduc",
      address1:"Click <a href='http://hotmamafit.com/leduc/'>HERE</a> to visit our website!",
      address2: "✉ info@hotmamafit.com",
      postalCode: "✆ 250-686-4346" 
   },
   {
      lat: 53.352426,	
      lng: -113.415373,
      name: "Hot Mama Fit - Beaumont",
      address1:"Click <a href='http://hotmamafit.com/leduc/'>HERE</a> to visit our website!",
      address2: "✉ info@hotmamafit.com",
      postalCode: "✆ 250-686-4346" 
   },
   {
      lat: 49.0900961,	
      lng: -123.0819988,
      name: "Hot Mama Fit - Ladner",
      address1:"Click <a href='http://hotmamafit.com/saanich/find-us'>HERE</a> to visit our website!",
      address2: "✉ info@hotmamafit.com",
      postalCode: "✆ 250-686-4346"
   }
];

function init(){
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initialize,initialize);
    } else {
		initialize();
	}
}

function initialize(position) {
	var lat = 50.6745;
	var lon = -120.3273;
   if(position.coords){
	alert(position.coords);
		lat = position.coords.latitude;
		lon = position.coords.longitude;
	}
   var mapOptions = {
      center: new google.maps.LatLng(lat,lon),
      zoom: 7,
      mapTypeId: 'roadmap',
   };

   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   // a new Info Window is created
   infoWindow = new google.maps.InfoWindow();

   // Event that closes the Info Window with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers();
}
google.maps.event.addDomListener(window, 'load', init);


// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(){

   // this variable sets the map bounds according to markers position
   var bounds = new google.maps.LatLngBounds();
   
   // for loop traverses markersData array calling createMarker function for each marker 
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      var address2 = markersData[i].address2;
      var postalCode = markersData[i].postalCode;

      createMarker(latlng, name, address1, address2, postalCode);

      // marker position is added to bounds variable
      bounds.extend(latlng);  
   }

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
}

// This function creates each marker and it sets their Info Window content
function createMarker(latlng, name, address1, address2, postalCode){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name,
	  animation: google.maps.Animation.DROP,
	  icon: "images/hm.png"
   });

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
   google.maps.event.addListener(marker, 'click', function() {
      
      // Creating the content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + address1 + '<br />' +
         address2 + '<br />' +
         postalCode + '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });
}