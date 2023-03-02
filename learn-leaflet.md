# Learn Leaflet

- SO: How to set zoom level/view of leaflet map: [Click here](https://stackoverflow.com/questions/48450273/how-to-set-zoom-level-view-of-leaflet-map)
- **Panning:** It allows the user to scroll the map in any direction. This is useful when you wish to view the area immediately adjacent to the area currently shown on the screen. To pan the map, perform the following steps: 1. Using the pointer, click the map and drag the pointer in the direction you wish to pan the map.

## DOCS: Pan the map to a given center

`panTo(LatLng, PanOptions?)`

## DOCS: `Map` > `Map Methods` > `Methods for modifying map state`

[Click here](https://leafletjs.com/reference.html#map-methods-for-modifying-map-state)

To zoom a given `LatLngBound`, I can use:

1. `fitBounds(LatLngBounds, fitBoundsOptions?)`
2. `flyToBounds(LatLngBounds, fitBoundsOptions?)`

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

## DOCS: Point

Source: [Click here](https://leafletjs.com/reference.html#point)

Represents a point with x and y coordinates in pixels.

```ts
var point = L.point(200, 300);

// Creates a Point object with the given x and y coordinates. If optional round is set to true, rounds the x and y values.
L.point(<Number> x, <Number> y, <Boolean> round?)

// Expects an array of the form [x, y] instead.
L.point(<Number[]> coords)

// Expects a plain object of the form {x: Number, y: Number} instead.
L.point(<Object> coords)


// All Leaflet methods and options that accept Point objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
map.panBy([200, 300]);
map.panBy(L.point(200, 300));
```
