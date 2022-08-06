import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  contactus = new FormGroup({
    email: new FormControl('' , Validators.required),
    password: new FormControl('', Validators.required) 
  });

  onSubmit() {
    console.log(this.contactus.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
