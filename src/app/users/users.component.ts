import { Component, OnInit } from '@angular/core';

import { UserserviceService } from '../services/userservice.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[] = [];

  constructor(private userService : UserserviceService) { }

  ngOnInit(): void {
    this.getUsers(); 
  }


  getUsers(){
    this.userService.getUsers()
      .subscribe(users => this.users = users); 
  }
}
