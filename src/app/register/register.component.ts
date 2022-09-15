import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = "Inscription"
  username = "";
  password = "";
  profession = "";
  address = "";

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  inscription(){
    this.router.navigate(['login']);
  }
}
