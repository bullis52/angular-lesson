import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../../../interfaces";
import {urls} from "../../../constans";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(urls.users)
  }
  getUser(id:number):Observable<IUser>{
    return this.httpClient.get<IUser>(urls.users + '/' + id)
  }
}
