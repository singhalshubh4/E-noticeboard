import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
