import { Component } from '@angular/core';

@Component({
  selector: 'app-loc',
  templateUrl: './loc.component.html',
  styleUrls: ['./loc.component.scss']
})
export class LocComponent {
  userLatitude: number | undefined;
  userLongitude: number | undefined;
  mechanicLatitude: number = 8.1671; // New York City latitude
  mechanicLongitude: number = 77.4142; // New York City longitude

  constructor() { }

  getUserLocation() {
    console.log("Getting user location...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userLatitude = position.coords.latitude;
          this.userLongitude = position.coords.longitude;
          this.openMap(); // Open map after getting user location
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.");
              break;
            default:
              alert("An unknown error occurred.");
              break;
          }
          console.error('Error getting location', error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  openMap() {
    if (!this.userLatitude || !this.userLongitude) {
      alert("User location not available.");
      return;
    }
    window.open(`https://www.google.com/maps/dir/${this.userLatitude},${this.userLongitude}/${this.mechanicLatitude},${this.mechanicLongitude}`, '_blank');
  }
}


