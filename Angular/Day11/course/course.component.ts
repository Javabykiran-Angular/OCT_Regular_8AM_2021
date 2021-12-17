import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  myCourse:string[]=[];

  constructor(private service:CourseService) { 

     // let service=new CourseService();
     // this.myCourse = service.getCourse()

  }

  ngOnInit() {
    this.myCourse=this.service.getCourse();
  }

}
