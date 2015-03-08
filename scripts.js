/**
 * @author Alex Lewis Clark
 */
var map = L.map('leafletMap').setView([39.906081, -73.965308], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var shelters = shelterData.rows;

for (var i=0; i<shelters.length; i++) {
	
var individualWarmingShelters = shelters[i];	

var marker = L.marker([individualWarmingShelters.latitude, individualWarmingShelters.longitude]).addTo(map);
marker.bindPopup("<b>"+individualWarmingShelters.FullAddress+"</b><br>Alex lives here!"+"<br>"+individualWarmingShelters.Borough).openPopup(); 
} // end of for loop!! 