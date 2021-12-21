import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url:string="https://jsonplaceholder.typicode.com/posts";
  // private url:string="https://localhost:8080/posts";

  constructor(private http:HttpClient) { }

    getPost(){
      return (this.http.get(this.url));
    }

    PostData(obj){
     return (this.http.post(this.url,obj))
    }

    UpdateData(obj){
     return (this.http.put(`${this.url}/${obj.id}`,obj));
    }

    DeleteData(id){
       return (this.http.delete(`${this.url}/${id}`));
    }



}
