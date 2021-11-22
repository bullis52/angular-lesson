import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interfaces";
import {Resolve} from "@angular/router";
import {urls} from "../constans";

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(urls.users)
  }
  getUser(id:number):Observable<IUser>{
    return this.httpClient.get<IUser>(urls.users + '/' + id)
  }

}
