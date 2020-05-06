import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  createstd() {
    this.router.navigate(['/create-student-account']);
  }
  addnotice() {
    this.router.navigate(['add-notice']);
  }
  logout() {
    localStorage.removeItem('faculty');
    this.router.navigate(['faculty-login'])
  }
}
