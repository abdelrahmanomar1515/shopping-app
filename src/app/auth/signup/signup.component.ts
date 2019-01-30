import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {
  errorMessage :string = null
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    this.authService.signupUser(email,password)
  }
  siginupError(){
    if (this.authService.signupErrorExists()){
      this.errorMessage = this.authService.signupError
      return this.errorMessage != null
    }
  }
  ngOnDestroy(){
    this.authService.clearSignupError()
  }
}
