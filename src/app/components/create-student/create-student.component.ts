import { Component, OnInit } from '@angular/core';
import { studentAccount } from "../../../../models/student-account"
import { FormGroup } from '@angular/forms'
import {Router} from '@angular/router'
import {LoginService} from "../../services/login.service"
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student: studentAccount;
  name: null;
  stdNo: null;
  rollNo: null;
  branch: null;
  year: null;
  section: null;
  mobNo: null;
  email: null;
 constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  createAccount(formdata) {
    this.student={
      name: formdata.value.name,
      stdNo: formdata.value.stdNo,    
      rollNo: formdata.value.rollNo,
      branch: formdata.value.branch,
      year: formdata.value.year,
      section: formdata.value.section,
      mobNo: formdata.value.mobNo,
      email:formdata.value.email
    }
    this.loginService.createStd(this.student).subscribe(data => {
      if (data.success === true) {
        alert('Account Created');
        this.router.navigate(['/faculty-dashboard'])
      }
    }), error => alert('enter correct details');
  }
}
