import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title : string = "Voici les dernières infos";
  coverImage = '../../assets/RTLinfo.png';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  logout(){
    this.router.navigate(['login']); 
  }
}
