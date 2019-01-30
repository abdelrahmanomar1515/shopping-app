import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable()
export class AuthService {
  token: string
  signinError: string
  signupError: string

  constructor(private router: Router) { }

  signupUser(email:string, password:string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(response => this.signinUser(email,password))
      .catch(error => this.signupError = error)
  }
  signinUser(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then( response => {
        this.router.navigate(['/'])
        firebase.auth().currentUser.getIdToken().then(token => this.token = token )
      })
      .catch( error => this.signinError = error)
  }
  getToken(){
    firebase.auth().currentUser.getIdToken().then(
      token => this.token = token
    )
    return this.token
  }
  isAuthenticated(){
    return this.token != null
  }
  signoutUser(){
    firebase.auth().signOut()
    this.router.navigate(['/'])
    this.token = null
  }
  signinErrorExists(){
    return this.signinError != null
  }
  signupErrorExists(){
    return this.signupError != null
  }
  clearSignupError(){
    this.signupError = null
  }
}
