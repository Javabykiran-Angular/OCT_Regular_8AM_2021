import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string="Data send from parent....";
 
  myjson={
    id:9,
    name:'sumit'
  }

  childStrDataReceived:string='';

  constructor() { }

  ngOnInit() {
  }

}
