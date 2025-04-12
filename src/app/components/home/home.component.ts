import { Component, inject, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  blogs:any []=[]
  blogService=inject(BlogService)
  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe((data:any)=>{
      this.blogs=data
      console.log(this.blogs)
    },(error)=>{
      alert("Some error occured")
    })
    
  }


}
