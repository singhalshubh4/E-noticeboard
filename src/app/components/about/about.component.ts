import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {LoginService} from '../../services/login.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }
  timetable() {
    this.router.navigate(['/Time-table']);
  }
  about() {
    this.router.navigate(['/about']);
  }
  enotice(){
    this.router.navigate(['/student-login']);
  }
  HolidayList() {
    this.router.navigate(['/Holiday-list']);
  }
}
