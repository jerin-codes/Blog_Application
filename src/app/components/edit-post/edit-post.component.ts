import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,NgToastModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit{
  addBlog=new FormGroup({
      title:new FormControl('',Validators.required),
      author:new FormControl('',Validators.required),
      content:new FormControl('',Validators.required)
  
  
    });
   public id:any;
    public blog:any;
    constructor(private toast: NgToastService,private router: Router, private actRoute:ActivatedRoute,private blogService:BlogService){
      this.id=this.actRoute.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
      // console.log(this.id)
      this.blogService.getBlogById(this.id).subscribe(data=>{
        this.blog=data
        console.log("test",data,this.blog)
      },(error)=>{
        alert("Blog does not exist!")
      })
      
    }

    onSumbit(){
      console.log(this.addBlog.value)
    if(this.addBlog.value.title=='' || this.addBlog.value.content=='' || this.addBlog.value.author==''){
Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the data fields!",
        
      });
    }else{
      this.blogService.updateData(this.id,this.addBlog.value).subscribe((data)=>{
        Swal.fire({
                 icon: 'success',
                 title: 'Success!',
                 text: 'Blog updated successfully.',
               });
        this.addBlog.reset()
        this.router.navigate(['/']);
    
    
    
       },(error)=>{
        alert("Something went wrong!")
       })
    }
    }

}
