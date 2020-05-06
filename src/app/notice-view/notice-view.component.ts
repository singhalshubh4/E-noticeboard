import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import {LoginPageComponent} from '../components/login/login-page/login-page.component'
import { Notice } from '../../../models/notice'
@Component({
  selector: 'app-notice-view',
  templateUrl: './notice-view.component.html',
  styleUrls: ['./notice-view.component.css']
})
export class NoticeViewComponent implements OnInit {
  notice: Notice;
  constructor(private LoginService:LoginService) { }

  ngOnInit(): void {
    this.notice = this.LoginService.Viewnotice;
  }

}
