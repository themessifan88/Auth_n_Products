import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.username = this.loginService.username;
  }

}
