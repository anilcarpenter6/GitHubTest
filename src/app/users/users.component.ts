import { Component, OnInit } from '@angular/core';
import { Customer, TestServiceService } from '../test-service.service';
import * as $ from 'jquery';
// var mysql = require('mysql')

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public sqldata: Customer[] = [];
  constructor(public service: TestServiceService) {
  }
  ngOnInit() {
    this.test()
  }
  public test() {
    this.service.getAll().subscribe((res: any) => {
      debugger
      this.sqldata = res;
    })

  }
  public Insert() {
    this.service.Insert().subscribe((res: any) => {
      debugger
      this.sqldata = res;
    })

  }
}