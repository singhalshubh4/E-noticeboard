import { Component, OnInit } from '@angular/core';
import {sendNotice} from '../../../../models/sendnotice'
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import {LoginService} from '../../services/login.service'
import{ HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {
  notice: sendNotice;
  constructor(private http: HttpClient,private router:Router) { }
  ngOnInit(): void {
  }
  dataUrl = "https://e-notice-board.herokuapp.com/faculty/notice/create"
  heading = null;
  lastdate = null;
  department = [];
  section = [];
  year = [];
  selectedFile = null;
  onFile(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  add(value) {
    if (this.year.includes(value))
      this.year.splice(this.year.indexOf(value), 1);
    else
      this.year.push(value);
  }
  addDept(value) {
    if (this.department.includes(value))
      this.department.splice(this.department.indexOf(value), 1)
    else
      this.department.push(value);
  }
  addSection(value) {
    if (this.section.includes(value))
       this.section.splice(this.section.indexOf(value), 1)
     else
       this.section.push(value);
  }
  onSubmit(myform) {
    const fd = new FormData();
    for (let i = 0; i < this.year.length; i++){
      fd.append('year[]', this.year[i]);
    }
    for (let i = 0; i < this.department.length; i++){
      fd.append('department[]', this.department[i]);
    }
    fd.append('heading', this.heading);
    fd.append('lastdate', this.lastdate);
    fd.append('notice', this.selectedFile, this.selectedFile.name);
    this.http.post(this.dataUrl, fd).subscribe(data => {
      myform.reset();
      alert('Notice Added');
      this.router.navigate(['/faculty-dashboard']);
    }, error => console.log(error));
  }
}

  //   this.notice = {
  //     heading: myform.value.heading,
  //     lastdate:myform.value.lastdate,
  //     department:myform.value.department,
  //     notice: this.selectedFile.name,
  //     section: myform.value.section,
  //     year:myform.value.year
  //   }
  //   console.log(this.notice);
  //   this.loginService.addNotice(this.notice).subscribe(data => {
  //     console.log(data);
  //   }), error => console.log(error);
  // }