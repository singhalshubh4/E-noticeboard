import { Component, OnInit } from '@angular/core';
import {FacultySchema} from '../../../../models/faculty-login'
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { from } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.css']
})
export class FacultyLoginComponent implements OnInit {
  facultySchema :FacultySchema={
    uname: null,
    pass: null
  }
  constructor( private loginService:LoginService,private router:Router) { }
   
  ngOnInit(): void {
  
  }
  onSubmit(formData) {
    this.loginService.LoginFaculty(this.facultySchema).subscribe(data => {
      if (data.success === true) {
        localStorage.setItem("faculty", "admin");
        this.router.navigate(['/faculty-dashboard']);
      }
    }), error =>alert('wrong username or password');
  }
 
}
