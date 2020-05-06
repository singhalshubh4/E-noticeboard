import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../services/login.service"
import {NoticeViewComponent}  from '../../../notice-view/notice-view.component'
import { Notice } from "../../../../../models/notice"
import {Router} from '@angular/router'
import { not } from '@angular/compiler/src/output/output_ast';
import { NullTemplateVisitor } from '@angular/compiler';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  notices: Notice[];
  // department: {
  //   tag:null,
  //   CSE: "Computer Science and Engineering",
  //   IT: "Information Technology",
  //   MECH:"Mechanical Engineering"
  // }
  dep: string;
  deps;
  year;
  constructor(private loginService:LoginService,private router:Router ){ }
  ngOnInit(): void {
    this.dep = this.loginService.dept;
    this.year = this.loginService.year;
    this.loginService.getNotice().subscribe(data => {
      this.notices = data.result;
      if (this.year === 1)
        this.deps = "Advanced Science and Humanities";
      else if (this.dep === 'IT')
        this.deps ="Information Technology";
      else if (this.dep==='CSE')
        this.deps = "Computer Science and Engineering";
      else if (this.dep === "MECH") 
        this.deps="Mechanical Engineering"
      else if(this.dep==="ECE")
        this.deps = "Electronics and Communication Engineering"
      else if (this.dep === 'EIE') 
        this.deps ="Electronics and Instrumentation Engineering"
      else if (this.dep === "CIVIL")
        this.deps = "Civil Engineering"
      else if (this.dep === "EEE")
        this.deps= "Electrical and Electronics Engineering"
    });
  }
  sendNotice(notice) {
    this.loginService.Viewnotice = notice;
    this.router.navigate(['/notice-view']);
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
