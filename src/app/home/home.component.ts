import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title : string = "Bienvenues sur le site de la première chaine Belge";

  constructor() { }

  ngOnInit(): void {
  }

}
