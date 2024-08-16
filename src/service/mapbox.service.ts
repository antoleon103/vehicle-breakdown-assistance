// import { Injectable } from '@angular/core';
// import mapboxSdk from '@mapbox/mapbox-sdk';

// @Injectable({
//   providedIn: 'root'
// })
// export class MapboxService {
//   private mapboxClient;

//   constructor() {
//     this.mapboxClient = mapboxSdk({ accessToken: 'pk.eyJ1IjoiYW50b2xlb24iLCJhIjoiY2x2bnhqMmQ2MGl4eDJpbm42NWEwMHNnbyJ9.luBDSvdQ2GHBTmw-X70juw' });
//   }

//   getRoute(origin: number[], destination: number[]) {
//     return this.mapboxClient.getDirections({
//       profile: 'mapbox/driving',
//       waypoints: [
//         { coordinates: origin },
//         { coordinates: destination }
//       ]
//     }).send();
//   }
// }
