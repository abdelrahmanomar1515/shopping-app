import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopping-app';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyANbjLJZ9ADVOZ9Ca_ZoG7VlGyRA31yZl4",
      authDomain: "my-ng-shopping-app.firebaseapp.com",
    })
  }
}
