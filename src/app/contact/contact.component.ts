import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
} from '@angular/forms';
import { FolioService } from '../Folio-Services/folio-service';
import { UserData } from '../Interface/contact-us-interface';

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
  userData: UserData[] = [];
  userDetails: UserData = new UserData();
  constructor(
    private fb: FormBuilder,
    private contactUsService: FolioService
  ) {}

  ngOnInit(): void {
    this.contactusForm = this.fb.group({
      name: new FormControl(),
      number: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
    });

    this.contactUsService.readaddress().subscribe((data) => {
      this.userData = data.map((doc) => {
        return {
          id: doc.payload.doc.id,
          ...(doc.payload.doc.data() as {}),
        } as UserData;
      });
      console.log('Data recieved', data);
    });
  }

  public Onsubmit() {
    console.log(this.contactusForm.value);
    this.userDetails.name = this.contactusForm.value.name;
    this.userDetails.email = this.contactusForm.value.email;
    this.userDetails.address = this.contactusForm.value.address;
    this.userDetails.number = this.contactusForm.value.number;

    this.contactUsService.sendData(this.userDetails);
    console.log(this.userDetails);
  }
}
