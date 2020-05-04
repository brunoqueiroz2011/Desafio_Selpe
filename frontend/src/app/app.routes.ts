import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { PeopleComponent } from './people/people.component';


export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent} ,
    {path:'people', component: PeopleComponent},
    {path:'person/:id', component: PeopleComponent},
    {path:'courses', component: CoursesComponent}
]