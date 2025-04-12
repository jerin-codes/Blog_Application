import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent  implements OnInit{
  addBlog=new FormGroup({
    title:new FormControl('',Validators.required),
    author:new FormControl('',Validators.required),
    content:new FormControl('',Validators.required)


  });
  constructor(private toast: NgToastService,private router: Router) {}
  blogService=inject(BlogService)

  onSumbit(){
    console.log(this.addBlog.value)
    if(this.addBlog.value.title=='' || this.addBlog.value.content=='' || this.addBlog.value.author==''){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the data fields!",
        
      });
      

    }else{
      this.blogService.createBlog(this.addBlog.value).subscribe((data)=>{
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Blog added successfully.',
        });
        this.toast.success('Blog added successfully!','success',5000);
        this.addBlog.reset()
        this.router.navigate(['/']);
    
    
    
       },(error)=>{
        alert("Something went wrong!")
       })
    }
   
  }

  ngOnInit(): void {
    
  }

}
