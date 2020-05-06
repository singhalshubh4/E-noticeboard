import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router'
import { Notice } from '../../../models/notice'
import {sendNotice} from '../../../models/sendnotice'
import {FacultySchema} from '../../../models/faculty-login'
import { login } from "../../../models/login"
import {studentAccount} from '../../../models/student-account'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Viewnotice: Notice;
  rollno;
  dataUrl: string
  studentUrl: string;
  noticeUrl: string;
  tableUrl: string;
  dept;
  year;
  Loginurl = "https://e-notice-board.herokuapp.com/login"
  constructor(private http: HttpClient) { }
  LoginStudent(Login: login): Observable<any> {
    this.rollno = Login.uname;
    this.noticeUrl = `https://e-notice-board.herokuapp.com/student/notice/read?rollNo=${Login.uname}`;
    this.tableUrl = `https://e-notice-board.herokuapp.com/student/timetable/read?rollNo=${Login.uname}`;
    return this.http.post(this.Loginurl, Login)
  }
  LoginFaculty(faculty: FacultySchema): Observable<any>{
    return this.http.post(this.Loginurl, faculty);
  }
  getNotice(): Observable<any>{
    return this.http.get(this.noticeUrl);
  }
  createStd(std: studentAccount): Observable<any>{
    this.studentUrl = 'https://e-notice-board.herokuapp.com/admin/student/create';
    return this.http.post(this.studentUrl, std);
  }
  addNotice(notice: sendNotice): Observable<any>{
   this.dataUrl= "https://e-notice-board.herokuapp.com/faculty/notice/create"
    return this.http.post(this.dataUrl, notice);
  }
}