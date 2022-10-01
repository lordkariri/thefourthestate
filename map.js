


var map = L.map("map", {zoomControl: false, scrollWheelZoom: false, dragging:false}).setView([30,0],2.49)


L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png').addTo(map)
var uk_marker = L.circle([51.507351, -0.127758], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);

var us_marker = L.circle([47.751076, -120.740135], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);

var france_marker = L.circle([48.856614, 2.352222], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);

var germany_marker = L.circle([52.520008, 13.404954], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);

var saudi_marker = L.circle([24.713552, 46.675297], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);
var russia_marker = L.circle([55.755825, 37.617298], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);
var china_marker = L.circle([39.904202, 116.407394], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);
var india_marker = L.circle([28.613939, 77.209023], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);
var austrailia_marker = L.circle([-35.2975906, 149.1012676], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);
var mexico_marker = L.circle([19.4326296, -99.1331785], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 1
}).addTo(map);
var singapore_marker = L.circle([1.357107, 103.8194992], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);
var japan_marker = L.circle([35.6828387, 139.7594549], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);
var brazil_marker = L.circle([-10.3333333, -53.2], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);
var southafrica_marker = L.circle([-28.8166236, 24.991639], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);
var nigeria_marker = L.circle([9.6000359, 7.9999721], {
    color: 'red',
    fillColor: 'crimson',
    fillOpacity: 1,
    radius: 10000
}).addTo(map);

uk_marker.bindPopup("I am UK");
nigeria_marker.bindPopup("I am NIGERIA");


connections = L.layerGroup()
this.connections.addLayer(L.polyline([], {color: 'white'}))
connections.addTo(map)



