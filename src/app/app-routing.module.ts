import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent as D} from './screens/admin/components/dashboard/dashboard.component';
import { DashboardComponent } from './screens/developer/components/dashboard/dashboard.component';
import { HourComponent } from './screens/admin/components/hour/hour.component';
import { HoursComponent } from './screens/developer/components/hours/hours.component';
import { ProjectsComponent } from './screens/admin/components/projects/projects.component';


const routes: Routes = [
  // { path: 'home', component:AppComponent},
  { path: 'admin/:name', component:D},
  {path: 'developer', component:DashboardComponent},
  // {path:'', redirectTo:'admin', pathMatch:'full'}
  {path:'admin/hour', component:HourComponent},
  {path:'developer/hour', component:HoursComponent},
  {path:'addproject',component:ProjectsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
