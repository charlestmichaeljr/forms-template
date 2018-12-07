import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent implements OnInit {

  @ViewChild('userForm') myForm: NgForm;

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultExpertise = 'Advanced';
  formSubmitted = false;
  user = {
    email: '',
    expertise: '',
    password: ''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.formSubmitted = true;
    this.user.email = this.myForm.value.userData.email;
    this.user.expertise = this.myForm.value.expertise;
    this.user.password = this.myForm.value.password;
    console.log(this.user);
  }
}
