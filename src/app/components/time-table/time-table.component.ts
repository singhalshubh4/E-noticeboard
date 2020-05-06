import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  constructor(private router: Router,private loginService:LoginService) { }
  rollno;
  ngOnInit(): void {
    this.rollno = this.loginService.rollno;
  }
  timetable() {

    this.router.navigate(['/Time-table']);
  }
  about() {
    this.router.navigate(['/about']);
  }
  enotice() {
    this.router.navigate(['/student-login']);
  }
  HolidayList() {
    this.router.navigate(['/Holiday-list']);
  }
}