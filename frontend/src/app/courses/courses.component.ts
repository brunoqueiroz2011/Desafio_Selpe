import { Component, OnInit } from '@angular/core';
import { Courses } from './courses.model';
import { CoursesService } from './courses.service';

@Component({
  selector: 'selpe-cnestypes',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses : Courses

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getQtdTypes(this.courses).subscribe(course => this.courses = course)    
  }

}
