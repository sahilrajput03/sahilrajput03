# Learn Leaflet

- **Github Repository - Testing Examples:** [sahilrajput03/learn-leaflet](https://github.com/sahilrajput03/learn-leaflet)
- **DOCS: References:** [Click here](https://leafletjs.com/reference.html)
- **Panning:** It allows the user to scroll the map in any direction. This is useful when you wish to view the area immediately adjacent to the area currently shown on the screen. To pan the map, perform the following steps: 1. Using the pointer, click the map and drag the pointer in the direction you wish to pan the map.
- Quick Start: Standalone Example: [Click here](https://leafletjs.com/examples/quick-start/example.html)

## My slasher Task: CONTINUE_ON_THIS_THREAD

- EventByLocation: [Click here](http://localhost:3000/app/events/by-location), Task Requirements: [Click here](https://docs.google.com/document/d/1LozEJH_3gu-sd_teSyiC7fOtDKPvusPyaofzZFnSVyM/edit#), Mockup: [Click here](https://www.figma.com/file/ZaeXUmYaMRnvIRk24rAA2r/Slasher-UI?node-id=3197%3A36245&t=mQalImJYVXTglBga-4)
- SO: Zoom to fit all markers in Mapbox or Leaflet: [Click here](https://stackoverflow.com/questions/16845614/zoom-to-fit-all-markers-in-mapbox-or-leaflet)
- DOCS: Zoom Levels: [Click here](https://leafletjs.com/examples/zoom-levels/)
- MY MONGODB_NOTES: Finding distance between two gps locations: [Click here](https://github.com/sahilrajput03/learning-monogo-and-mongoosejs#finding-distance-between-two-gps-locations-point-to-point-and-not-the-actual-travelling-distance-by-roads)
- Marker: [Click here](https://leafletjs.com/reference.html#marker) - Instantiates a Marker object given a geographical point and optionally an options object. L.Marker is used to display clickable/draggable icons on the map. Extends Layer.
    ```js
    // syntax
    L.marker(<LatLng> latlng, <Marker options> options?)

    // Usage
    L.marker([50.5, 30.5]).addTo(map);
    ```
- Layer: [Click here](https://leafletjs.com/reference.html#layer) - A set of methods from the Layer base class that all Leaflet layers use. Inherits all methods, options and events from L.Evented.
    ```js
    var layer = L.marker(latlng).addTo(map);
    layer.addTo(map);
    layer.remove();
    ```

## DOCS: `Map` > `Map Methods`

- **Methods for modifying map state:** [Click here](https://leafletjs.com/reference.html#map-methods-for-modifying-map-state)

To zoom to a given `LatLngBound`, I can use:

- `fitBounds(LatLngBounds, fitBoundsOptions?)`: Sets a map view that contains the given geographical bounds with the maximum zoom level possible.
- `flyToBounds(LatLngBounds, fitBoundsOptions?)`: Sets the view of the map with a smooth animation like flyTo, but takes a bounds parameter like fitBounds.

## DOCS: LatLngBounds: [Click here](https://leafletjs.com/reference.html#latlngbounds)

Represents a rectangular geographical area on a map.

```js
var corner1 = L.latLng(40.712, -74.227),
corner2 = L.latLng(40.774, -74.125),
bounds = L.latLngBounds(corner1, corner2);

// A LatLngBound value has coordinates for `top-right` and `bottom-left` points of the bounded rectangular region.
// For e.g,  {_southWest: bottom_left_latLng, _northEast: top_right_latLng }
// { "_southWest": {"lat": 41.050832274225485, "lng": -74.9698495599688}, "_northEast": {"lat": 41.05092210575319, "lng": -74.96973044003121}}


// All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
map.fitBounds([
    [40.712, -74.227],
    [40.774, -74.125]
]);
```

## DOCS: Pan

- Pan the map to a given center via `panTo(LatLng, PanOptions?)`
- Pans the map by a given number of pixels (animated) via `panBy(<Point> offset, <Pan options> options?)`

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
