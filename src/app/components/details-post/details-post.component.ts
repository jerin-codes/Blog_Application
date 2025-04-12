import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-post',
  standalone: true,
  imports: [],
  templateUrl: './details-post.component.html',
  styleUrl: './details-post.component.css'
})
export class DetailsPostComponent implements OnInit {
  public id:any;
  public blog:any;
  constructor(private router: Router, private actRoute:ActivatedRoute,private blogService:BlogService){
    this.id=this.actRoute.snapshot.paramMap.get('id');
  }

ngOnInit(): void {
 
  this.blogService.getBlogById(this.id).subscribe(data=>{
    this.blog=data
    console.log("test",data,this.blog)
  },(error)=>{
    alert("Blog does not exist!")
  })
  // console.log("ge",this.id,this.blog)
}

onDelete(id:any)
{
  console.log("test")
  Swal.fire({
    title: 'Are you sure?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, proceed',
    cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.isConfirmed) {
      this.blogService.deleteBlog(id).subscribe((res)=>{
        this.router.navigate(['/']);
          
        
      })
    }
  });
  


}
onUpdate(id:any){
  
  this.router.navigate(['/editblog',id]);
}

}
