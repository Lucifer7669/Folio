import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserData } from '../Interface/contact-us-interface';
@Injectable({
  providedIn: 'root',
})
export class FolioService {
  constructor(private firebaseService: AngularFirestore) {}

  sendData(requestBody: UserData) {
    console.log('in service');
    this.firebaseService.collection('userdata').add({ ...requestBody });
    console.log(requestBody);
  }

  readaddress() {
    return this.firebaseService.collection('userdata').snapshotChanges();
  }
}
