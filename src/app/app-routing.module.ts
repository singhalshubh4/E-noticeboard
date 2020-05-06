import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { AuthGuard } from './auth.guard'
import {FacultyGuard} from './faculty.guard'
import { FacultyLoginComponent } from './components/faculty-login/faculty-login.component';
import { NoticeViewComponent } from './notice-view/notice-view.component';
import { AboutComponent } from './components/about/about.component';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { AddNoticeComponent } from './components/add-notice/add-notice.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'student-login', canActivate: [AuthGuard], component: LoginPageComponent },
  { path: 'faculty-login', component: FacultyLoginComponent },
  { path: 'notice-view', canActivate: [AuthGuard], component: NoticeViewComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'Time-table', canActivate: [AuthGuard], component: TimeTableComponent },
  { path: 'Holiday-list', canActivate: [AuthGuard], component: HolidayListComponent },
  { path: 'create-student-account',canActivate:[FacultyGuard],component: CreateStudentComponent },
  { path: 'faculty-dashboard',canActivate:[FacultyGuard],component: FacultyDashboardComponent },
  { path: 'add-notice',canActivate:[FacultyGuard],component: AddNoticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
