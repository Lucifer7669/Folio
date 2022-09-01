import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactusForm: FormGroup;
  name: string;
  number: number;
  email: string;
  address: string;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactusForm = this.fb.group({
      name: new FormControl(),
      number: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
    });
  }

  public Onsubmit() {
    console.log(this.contactusForm.value);
  }
}
