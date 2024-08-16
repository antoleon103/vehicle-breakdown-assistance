import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
// import { MapboxService } from 'src/service/mapbox.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  constructor() {}

  openGoogleMaps(
    fromLat: number,
    fromLng: number,
    toLat: number,
    toLng: number
  ) {
    // const url = `https://www.google.com/maps/dir/?api=1&origin=${fromLat},${fromLng}&destination=${toLat},${toLng}&travelmode=driving`;
    const fromLocation = '123 Main St, City, State, Zip';
    const toLocation = '456 Elm St, City, State, Zip';
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      fromLocation
    )}&destination=${encodeURIComponent(toLocation)}&travelmode=driving`;

    window.location.href = url; // Open in the same tab
  }

  // Simulate fetching customer and mechanic's locations

  simulateNavigation() {
    const mechanicLocation = { lat: 8.1894216, lng: 77.4110455 };
    const customerLocation = { Lat: 8.1671, lng: 77.4142 };
    this.openGoogleMaps(
      mechanicLocation.lat,
      mechanicLocation.lng,
      customerLocation.Lat,
      customerLocation.lng
    );
  }
}
//   }
//   constructor(private mapboxService: MapboxService) { }
//   title = 'Location App';
//   location: string = "";

//   map: google.maps.Map | undefined;

//   directionsService: google.maps.DirectionsService | undefined;
//   directionsRenderer: google.maps.DirectionsRenderer | undefined;

//   ngOnInit(): void {
//     const map = new mapboxgl.Map({
//     container: 'map', // Specify the ID of the HTML element to render the map
//     style: 'mapbox://styles/mapbox/streets-v11', // Set the map style
//     center: [-74.5, 40], // Set the initial center of the map [lng, lat]
//     zoom: 9, // Set the initial zoom level
//     accessToken: 'pk.eyJ1IjoiYW50b2xlb24iLCJhIjoiY2x2bnhqMmQ2MGl4eDJpbm42NWEwMHNnbyJ9.luBDSvdQ2GHBTmw-X70juw' // Set your Mapbox access token here
//   });

//   // Add navigation control to the map
//   map.addControl(new mapboxgl.NavigationControl());

//    // Get route coordinates
//    const origin = [-74.5, 40];
//    const destination = [-74.5, 41];
//    this.mapboxService.getRoute(origin, destination).then((response: { body: { routes: any[]; }; }) => {
//      const route = response.body.routes[0];
//      const routeCoordinates = route.geometry.coordinates;

//      // Draw route on map
//      map.addLayer({
//        id: 'route',
//        type: 'line',
//        source: {
//          type: 'geojson',
//          data: {
//            type: 'Feature',
//            properties: {},
//            geometry: {
//              type: 'LineString',
//              coordinates: routeCoordinates
//            }
//          }
//        },
//        layout: {
//          'line-join': 'round',
//          'line-cap': 'round'
//        },
//        paint: {
//          'line-color': '#3887be',
//          'line-width': 8
//        }
//      });
//    });
//  }

// const mapElement = document.getElementById('map');
// if (mapElement) {
//   this.map = new google.maps.Map(mapElement, {
//     center: { lat:  8.1671, lng:77.4142 },
//     zoom: 8
//   });
// } else {
//   console.error("Map element not found!");
// }
// const mapElement = document.getElementById('map');
// if (mapElement) {
//   this.map = new google.maps.Map(mapElement, {
//     center: { lat:8.1671, lng:77.4142  },
//     zoom: 8
//   });
// }

// this.directionsService = new google.maps.DirectionsService();
// this.directionsRenderer = new google.maps.DirectionsRenderer();
// this.directionsRenderer.setMap(this.map ? this.map : null);
// this.calculateAndDisplayRoute();

//   calculateAndDisplayRoute() {
//     const request = {
//       origin: 'Sydney, Australia', // Replace with your origin address
//       destination: 'Melbourne, Australia', // Replace with your destination address
//       travelMode: google.maps.TravelMode.DRIVING
//     };

//     if(this.directionsService) {
//       this.directionsService.route(request, (result, status) => {
//         if (status === 'OK' && this.directionsRenderer) {
//           this.directionsRenderer.setDirections(result);
//         } else {
//           window.alert('Directions request failed due to ' + status);
//         }
//       });
//     }
//   }

//   async loadGoogleMaps() {
//     return new Promise<void>((resolve, reject) => {
//       const script = document.createElement('script');
//       script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAGkaM3eA_ME-yDGIBX-m8LCXe-bOelM9o&libraries=places';
//       script.onload = () => {
//         resolve();
//       };
//       script.onerror = (error: any) => {
//         reject(error);
//       };
//       document.body.appendChild(script);
//     });
//   }

//   async getCurrentLocation() {
//     if (navigator.geolocation) {
//       try {
//         const position = await this.getPosition();
//         this.location = `${position.coords.latitude}, ${position.coords.longitude}`;
//       } catch (error) {
//         console.error("Error getting location:", error);
//       }
//     } else {
//       console.error("Geolocation is not supported by this browser.");
//     }
//   }

//   private getPosition(): Promise<GeolocationPosition> {
//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
//   }
// }
