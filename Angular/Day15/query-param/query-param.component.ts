import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param',
  templateUrl: './query-param.component.html',
  styleUrls: ['./query-param.component.css']
})
export class QueryParamComponent implements OnInit {

  myjson={
    myid:0,
    myfname:'',
    mystatus:''
  }
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.GetDataFromURL();
  }

  GetDataFromURL(){
    this.route.queryParamMap
    .subscribe((param)=>{
      this.myjson.myid=+param.get("id");
      this.myjson.myfname=param.get("fname");
      this.myjson.mystatus=param.get("status");
    })
  }

}
