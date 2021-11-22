import {Component, OnInit} from '@angular/core';
import {IncrementPipe} from "../../pipes";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  arr2: number[];

  color = 'green'

  user = {name: "max", age: 18}
  name = 'kokos'
  born = new Date(1925, 5, 24, 21, 11, 33)
  now = new Date()
  arr = [1, 2, 3, 4, 5]

  constructor(private IncrementPipe: IncrementPipe) {
  }

  ngOnInit(): void {
    this.arr2 = this.IncrementPipe.transform(this.arr, 10)
  }

}
