import { Component,Input, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../service/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[] = []
  constructor(private userService:UserService) {
  }

  ngOnInit():void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

}
