import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiCallService } from 'src/service/api-call.service';


export interface UserData {
  id: number,
  Vehicle_Owner_name: string;
  Vehicle_Model: string;
  Vehicle_Issue: string;
  Description: string;
  Location: string;
  status:string;
}

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.scss']
})
export class ViewRequestComponent {

  constructor(private apicallservice:ApiCallService){ 
    
  }
  dataSource = new MatTableDataSource<UserData>();
  displayedColumns: string[] = ['ownername', 'vehicleModel', 'vehicleIssue', 'description','Location','status'];
  ngOnInit() {
    this.apicallservice.get('/view-request').subscribe(
      (res) =>{
        console.log (res)
        const users: UserData[] = res.data;
        this.dataSource.data = users;
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
