import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ApiCallService } from 'src/service/api-call.service';
import { Router } from '@angular/router';



interface UserData {
  id: number;
  Vehicle_Owner_name: string;
  Vehicle_Model: string;
  Vehicle_Issue: string;
  Description: string;
  Location: string;
  status: string;
  SelectMechanic: string;
  address: string;
}

@Component({
  selector: 'app-mechanic-request',
  templateUrl: './mechanic-request.component.html',
  styleUrls: ['./mechanic-request.component.scss'],
})
 export class MechanicRequestComponent implements OnInit{

  
  dataSource = new MatTableDataSource<UserData>();
  displayedColumns: string[] = ['ownername', 'vehicleModel', 'vehicleIssue', 'description','Location','status','SelectMechanic','openMap'];

  constructor(private toastr: ToastrService,private apiCallService: ApiCallService,private router: Router) {}

  ngOnInit(): void {
    this.fetchRequests();}

    performAction(user: UserData): void {
      console.log('Performing action for user:', user);
    }

    fetchRequests(){
      this.apiCallService.get('/new-request').subscribe(
        (res) =>{
          console.log (res)
          const users: UserData[] = res.data;
          this.dataSource.data = users;
        },
        (error) => {
          console.log(error)
        }
      );
    }

    openConfirmationDialog(user: UserData): void {
      console.log(user)
      const toLocation = user.Location;
      const fromLocation: string = user.address ? user.address : "KTM, Nagercoil";

      const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
        fromLocation
      )}&destination=${encodeURIComponent(toLocation)}&travelmode=driving`;
  
      window.location.href = url; // Open in the same tab
    }
  

    acceptRequest(id: number): void {
      console.log('Request accepted for user:');
      this.apiCallService.post(`/new-request/accept`, {"id": id}).subscribe(
        (res) => {
          this.toastr.success('Request accepted', 'Success');
          const userToUpdate = this.dataSource.data.find(user => user.id === id);
      if (userToUpdate) {
        userToUpdate.status = 'Accepted';
      }
        },
        (error) => {
          console.log(error)
        }
      );
    }

    rejectRequest(id: number): void {
      console.log('Request accepted for user:');
      this.apiCallService.post(`/new-request/reject`, {"id": id}).subscribe(
        (res) => {
          this.toastr.error('Request rejected', 'Rejected');
          const userToUpdate = this.dataSource.data.find(user => user.id === id);
      if (userToUpdate) {
        userToUpdate.status = 'Rejected';
      }
        },
        (error) => {
          console.log(error)
        }
      );
    }
  }
