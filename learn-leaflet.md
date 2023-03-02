# Learn Leaflet

- SO: how to set zoom level/view of leaflet map: [Click here](https://stackoverflow.com/questions/48450273/how-to-set-zoom-level-view-of-leaflet-map)

## DOCS: LatLngBounds: [Click here](https://leafletjs.com/reference.html#latlngbounds)

Represents a rectangular geographical area on a map.

```js
var corner1 = L.latLng(40.712, -74.227),
corner2 = L.latLng(40.774, -74.125),
bounds = L.latLngBounds(corner1, corner2);

// All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
map.fitBounds([
    [40.712, -74.227],
    [40.774, -74.125]
]);
```

## DOCS: LatLng: [Click here](https://leafletjs.com/reference.html#latlng)

  Represents a geographical point with a certain latitude and longitude.

```js
var latlng = L.latLng(50.5, 30.5);

// All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
map.panTo([50, 30]);
map.panTo({lng: 30, lat: 50});
map.panTo({lat: 50, lng: 30});
map.panTo(L.latLng(50, 30));
```

## DOCS: `Map` > `Map Methods` > `Methods for modifying map state`

[Click here](https://leafletjs.com/reference.html#map-methods-for-modifying-map-state)
