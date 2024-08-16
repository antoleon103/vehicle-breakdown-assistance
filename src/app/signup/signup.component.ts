import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/service/api-call.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstName!: string;
  lastName: string ='';
  phoneNumber: string ='';
  email: string ='';
  password: string ='';
  userType: string ='';
  

  constructor(private route: Router, private apiCallService: ApiCallService) { }

  ngOnInit(): void {
  }
  
  signup() {

    if (this.userType === 'user') {
      // Redirect to user page
      this.route.navigate(['/new-request']);
    } else if (this.userType === 'mechanic') {
      // Redirect to mechanic page
      this.route.navigate(['/mechanic']);
    }
    
    // this.route.navigate(['/header']);

    console.log( this.firstName);
    console.log( this.lastName);
    console.log( this.phoneNumber);
    console.log( this.email);
    console.log( this.password);
    console.log( this.userType);

    const reqBody = {
      'firstName': this.firstName,
      'lastName': this.lastName,  
      'phoneNumber': this.phoneNumber,
      'email':this.email,
      'password':this.password,
      'userType': this.userType === 'user' ? 3 : 2
    }
    
    this.apiCallService.post(`/signup`, reqBody).subscribe(
      (res) => {
        console.log (res)
      },
      (error) => {
        console.log(error)
      }
    );
  }
}
