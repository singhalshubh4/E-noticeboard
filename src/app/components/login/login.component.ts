import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import {Router} from '@angular/router'
import { login } from '../../../../models/login'
import { LoginService } from "../../services/login.service"
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = null;
  password = null;
  Login:login
  constructor(private loginService:LoginService,private Router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(formdata) {
    this.Login = {
      uname:formdata.value.username,
      pass:formdata.value.password
    }
    formdata.reset();
    this.loginService.LoginStudent(this.Login).subscribe(data => {
      if (data.success === true) {
        localStorage.setItem("username", "admin");
        this.loginService.dept = data.department;
        this.loginService.year = data.year;
        console.log(data);
        this.Router.navigate(['./student-login']);
      }
    },
      error => {
        alert('Wrong Username or password');
      });
  
  }
 
}
