import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructorsComponent } from './instructors/instructors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';

const routes: Routes = [
  {path: "instructors", component: InstructorsComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {path: "detail/:id", component: InstructorDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
