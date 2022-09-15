import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title : string = "Se connecter"
  username =  "";
  password  = "";
  errorMessage : string = "";
  hasError = false;

  constructor(private router : Router, private auth : UserserviceService) { }

  ngOnInit(): void {
  }


  login(){
    //this.router.navigate(['users']);
    let response = this.auth.login(this.username,this.password);
      if(response === 200){
        this.router.navigate(['users']);
      }
      if(response === 404){
        this.router.navigate(['login']); 
        this.hasError = true;
        this.errorMessage = "Mauvais pseudo ou mot de passe";
      }
  }
}
