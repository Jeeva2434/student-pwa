import { Component, inject, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [ CommonModule, MatListModule, MatIconModule, RouterModule ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent implements OnInit{
  studentsData:any[] = [];
  topper = {
    "studentName":'',
    "marks": Number.MIN_SAFE_INTEGER
  }

  private studentsService:StudentsService = inject(StudentsService);
  private route:ActivatedRoute = inject(ActivatedRoute);

  constructor(){
    this.route.params.pipe(
      switchMap(params => this.studentsService.getSubjectData(params['subjectName']))
    ).subscribe((data)=>{
      this.studentsData = data;
      this.updateTopper();
    })
  }

  ngOnInit():void{

  }

  updateTopper(){
    for(let i=0,len=this.studentsData.length; i<len ; i++){
      if(this.topper.marks < this.studentsData[i].marks){
        this.topper = this.studentsData[i];
      }
    }
  }

}
