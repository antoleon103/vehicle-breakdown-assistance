import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiCallService } from 'src/service/api-call.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  feedback = '';
  userRating = 0;

  constructor(
    private toastr: ToastrService,
    private apiCallService: ApiCallService
  ) {}

  ngOnInit(): void {}

  submitFeedback(): void {
    console.log(this.feedback);
    console.log(this.userRating);

    const reqbody = {
      'feedback': this.feedback,
      'userRating': this.userRating,
    };

    this.apiCallService.post('/feedback', reqbody).subscribe(
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
