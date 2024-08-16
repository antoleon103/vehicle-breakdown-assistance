import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiCallService } from 'src/service/api-call.service';

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.scss'],
})
export class MechanicComponent implements OnInit {
  garageForm!: FormGroup;

  garageName: string = '';
  contact: string = '';
  address: string = '';
  specialAt: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private apiCallService: ApiCallService
  ) {}

  ngOnInit(): void {
    this.garageForm = this.formBuilder.group({
      garageName: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      specialAt: ['', Validators.required],
    });
  }

  submitGarage() {
    console.log('Form Values:', this.garageForm.value);
    console.log(this.garageName);
    console.log(this.address);
    console.log(this.contact);
    console.log(this.specialAt);

    const reqbody = {
      'garageName' : this.garageName,
      'address': this.address,
      'contact': this.contact,
      'SpecialAt': this.specialAt,
    };

    this.apiCallService.post(`/mechanic`, reqbody).subscribe(
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
