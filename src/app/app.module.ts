import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import {FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component'
import { AuthGuard } from './auth.guard';
import { FacultyLoginComponent } from './components/faculty-login/faculty-login.component';
import { NoticeViewComponent } from './notice-view/notice-view.component';
import { AboutComponent } from './components/about/about.component';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { AddNoticeComponent } from './components/add-notice/add-notice.component';
import { FacultyGuard } from './faculty.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    NavBarComponent,
    FooterComponent,
    FacultyLoginComponent,
    NoticeViewComponent,
    AboutComponent,
    TimeTableComponent,
    HolidayListComponent,
    CreateStudentComponent,
    FacultyDashboardComponent,
    AddNoticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard,FacultyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
