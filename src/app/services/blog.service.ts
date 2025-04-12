import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  constructor(private http:HttpClient) { }

  //getAllblogs
  getAllBlogs(){
    return this.http.get("http://localhost:3000/blogs")
  }

  //create new blog to json server
  createBlog(data:any){
    return this.http.post("http://localhost:3000/blogs",data)
  }


  //get blog by id
  getBlogById(id:any){
    console.log("test",id)
    return this.http.get(`http://localhost:3000/blogs/${id}`)
  }
  

  updateData(id:any,data:any){
    return this.http.put(`http://localhost:3000/blogs/${id}`,data)
  }

  deleteBlog(id:any){
    return this.http.delete(`http://localhost:3000/blogs/${id}`)
  }
  
}
