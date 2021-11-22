import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {DataTransferService, UserService} from "../../service";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  user = {
    username: 'max',
    password: 1111
  }
  myForm: FormGroup
  myForm2:FormGroup
  users:IUser[];
  userDetail:IUser;

  constructor(private userService:UserService,private transferService:DataTransferService) {
  }

  customValidator(control: AbstractControl):null | object{
    console.log(control);
    return null
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(7), this.customValidator]),
      age: new FormControl(10)
    })
    this.myForm2 = new FormGroup({
      userId:new FormControl(1)
    })
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  save(tref: HTMLFormElement) {
    console.log(this.user);
  }

  save2() {
    console.log(this.myForm);
  }

  showDetails() {
    const id = this.myForm2.controls['userId'].value;
    this.userDetail = this.users[id - 1]

  }

  setAge():void {
    this.transferService.setAgeData(this.myForm.controls['age'].value)
  }
}
