import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;
  myusername:string='Sumit Raokhande';

  jsonObj={
    fname:"Sumit",
    id:8,
    status:'Active'
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  OnPage1(){
    this.router.navigate(['/Page1']);
  }
  OnPage2(){
    this.router.navigate(['/Page2',this.myid])
  }
  OnPage3(){
    this.router.navigate(['/Page3',this.myid,this.myusername])
  }

  OnFollower(){
    this.router.navigate(['/Follower']);
  }
  OnQueryParam(){
    this.router.navigate(['/QueryParameter'],
      {queryParams:this.jsonObj});  
  }

}
