import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../../../src/app/auth/auth.service';

@Component({
  selector: 'app-default-detail',
  templateUrl: './default-detail.component.html',
  styleUrls: ['./default-detail.component.css']
})
export class DefaultDetailComponent implements OnInit {

  constructor(private authService:AuthService) { }

  isAuthenticated(){
    return this.authService.isAuthenticated()
  }

  ngOnInit() {
  }

}
