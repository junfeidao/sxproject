```javascript
 /* var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);
*/

    var mymap = L.map('mapid').setView([30.243,120.24], 17);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery  <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);
   /*var CustomerIcon = L.Icon.extend({
       options: {
           iconUrl: CustomerImg
           shadowUrl: CustomerShadowImg,
           iconSize:     [38, 95],
           shadowSize:   [50, 64],
           iconAnchor:   [22, 94],
           shadowAnchor: [4, 62],
       }
   });*/
 /*  mymap.on('click',(ev)=>{
       console.log(ev);
       //e.latlng
       let marker = new L.Marker(ev.latlng,{
       }).addTo(mymap)
   });*/
  /* function onMapClick(e) {
       console.log(e.latlng);
       console.log("You clicked the map at " + e.latlng);
   }

   mymap.on('click', onMapClick);*/
   var popup = L.popup();

   function onMapClick(e) {
       popup
           .setLatLng(e.latlng)
           .setContent("You clicked the map at " + e.latlng.toString())
           .openOn(mymap);
   }
   mymap.on('click', onMapClick);

   var marker = L.marker([30.242968833194116, 120.23989779409023]).addTo(mymap);

   marker.bindPopup("<b>钱江世纪城在这</b>").openPopup();
```

