import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
public infos:any=[];
public term:string="";
public column:string="";
public order:string="";
public limit:string="";
public page:string="";

constructor(private studentService:StudentService){

  this.studentService.getinfo().subscribe(
    (data:any)=>{
      this.infos=data;
    },
    (err:any)=>{
      alert("Internal service error");
    })
  }
  getfilteredinfo(){
    this.studentService.getfilteredinfo(this.term).subscribe(
      (data:any)=>{
        this.infos=data;
      },
      (err:any)=>{
        alert("Internal service error");
      })
  }

  getSortedinfo(){
    this.studentService.getSortedinfo(this.column,this.order).subscribe(
      (data:any)=>{
        this.infos=data;
      },
      (err:any)=>{
        alert("Internal service error");
      })
  }

  getPagedinfo(){
    this.studentService.getPagedinfo(this.limit,this.page).subscribe(
      (data:any)=>{
        this.infos=data;
      },
      (err:any)=>{
        alert("Internal service error");
      })
  }

  deleteinfo(id:any){
    this.studentService.deleteinfo(id).subscribe(
      (data:any)=>{
        alert("delete successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal service error");
      })
  }
}

