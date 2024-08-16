import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiCallService } from 'src/service/api-call.service';
import { UserData } from '../view-request/view-request.component';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss'],
})
export class NewRequestComponent implements OnInit {
  VehicleOwnername: string = '';
  VehicleModel: string = '';
  VehicleIssue: string = '';
  Description: string = '';
  location: string = '';
  SelectMechanic: string = '';
  garages: any[] = [];
  mechanics: any[] = [];
  requestForm!: FormGroup;

  [x: string]: any;

  additionalDetails: string = '';
  @ViewChild('toast') toast: any;

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private apiCallService: ApiCallService
  ) {
    this.requestForm = this.formBuilder.group({
      vehicleOwnername: ['', Validators.required],
      vehicleModel: ['', Validators.required],
      vehicleIssue: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      SelectMechanic: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.apiCallService.get('/mechanic').subscribe(
      (res) =>{
        console.log (res)
        this.mechanics = res.data;
      },
      (error) => {
        console.log(error)
      }
    )
  }

  onSubmit() {
    const vehicleOwnername = this.requestForm?.get('vehicleOwnername')?.value;
    const vehicleModel = this.requestForm?.get('vehicleModel')?.value;
    const vehicleIssue = this.requestForm?.get('vehicleIssue')?.value;
    const description = this.requestForm?.get('description')?.value;
    const location = this.requestForm?.get('location')?.value;
    const SelectMechanic = this.requestForm?.get('SelectMechanic')?.value;

    console.log('Vehicle Owner Name:', vehicleOwnername);
    console.log('Vehicle Model:', vehicleModel);
    console.log('Vehicle Issue:', vehicleIssue);
    console.log('Description:', description);
    console.log('Location:', location);
    console.log('SelectMechanic:', SelectMechanic);

    const reqBody = {
      'vehicleOwnername': vehicleOwnername,
      'vehicleModel': vehicleModel,
      'vehicleIssue': vehicleIssue,
      'description': description,
      'location': location,
      'SelectMechanic' : SelectMechanic,
    };

    this.apiCallService.post('/new-request', reqBody).subscribe(
      (res) => {
        this.toastr.success('Request submitted successfully!');
        console.log(res);
      },
      (error) => {
        this.toastr.error('Failed to submit the request');
        console.log(error);
      }
    );
  }
}
